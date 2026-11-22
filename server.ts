import crypto from 'crypto';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const DATA_DIR = path.resolve(__dirname, 'data');
const UPLOADS_DIR = path.resolve(DATA_DIR, 'uploads');
const INQUIRIES_FILE = path.resolve(DATA_DIR, 'inquiries.json');
const TESTIMONIALS_FILE = path.resolve(DATA_DIR, 'testimonials.json');
const ADMIN_FILE = path.resolve(DATA_DIR, 'admin.json');

const SESSION_SECRET =
  process.env.SESSION_SECRET && process.env.SESSION_SECRET.trim().length >= 16
    ? process.env.SESSION_SECRET.trim()
    : crypto.randomBytes(32).toString('hex');

const ALLOWED_EXTENSIONS = new Set([
  '.pdf',
  '.dwg',
  '.rvt',
  '.ifc',
  '.xlsx',
  '.xls',
  '.zip',
  '.png',
  '.jpg',
  '.jpeg',
]);
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024; // 8 MB

function ensureDataStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
  if (!fs.existsSync(INQUIRIES_FILE)) {
    fs.writeFileSync(INQUIRIES_FILE, '[]', 'utf-8');
  }
  if (!fs.existsSync(TESTIMONIALS_FILE)) {
    fs.writeFileSync(TESTIMONIALS_FILE, '[]', 'utf-8');
  }
}

ensureDataStorage();

interface InquiryRecord {
  id: string;
  referenceCode: string;
  fullName: string;
  companyName: string;
  email: string;
  whatsappNumber: string;
  projectType: string;
  serviceRequired: string;
  projectDescription: string;
  language: 'id' | 'en';
  status: 'new' | 'reviewed' | 'quoted' | 'archived';
  attachment?: {
    storedName: string;
    originalName: string;
    sizeBytes: number;
  };
  createdAt: string;
}

interface TestimonialRecord {
  id: string;
  clientName: string;
  companyName: string;
  projectType: string;
  review: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

interface AdminCredentialFile {
  salt: string;
  hash: string;
  claimedAt: string;
}

function readJsonArray<T>(filePath: string): T[] {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeJsonArray<T>(filePath: string, data: T[]) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

function sanitizeText(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, maxLen);
}

function sanitizeFilename(name: string): string {
  const base = path.basename(name).replace(/[^a-zA-Z0-9._-]/g, '_');
  return base.slice(0, 120) || 'project_document';
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()+]/g, '');
  return /^\d{8,16}$/.test(cleaned);
}

function getEnvAdminPasscode(): string {
  return typeof process.env.ADMIN_PASSCODE === 'string' ? process.env.ADMIN_PASSCODE.trim() : '';
}

function readAdminFile(): AdminCredentialFile | null {
  try {
    if (!fs.existsSync(ADMIN_FILE)) return null;
    const raw = fs.readFileSync(ADMIN_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.salt === 'string' && typeof parsed.hash === 'string') {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function hashPasscode(passcode: string, salt: string): string {
  return crypto.scryptSync(passcode, salt, 64).toString('hex');
}

function verifyPasscode(passcode: string): boolean {
  const envPasscode = getEnvAdminPasscode();
  if (envPasscode.length > 0) {
    const a = crypto.createHash('sha256').update(passcode).digest();
    const b = crypto.createHash('sha256').update(envPasscode).digest();
    return crypto.timingSafeEqual(a, b);
  }
  const stored = readAdminFile();
  if (!stored) return false;
  const computed = Buffer.from(hashPasscode(passcode, stored.salt), 'hex');
  const expected = Buffer.from(stored.hash, 'hex');
  if (computed.length !== expected.length) return false;
  return crypto.timingSafeEqual(computed, expected);
}

function signAdminToken(): string {
  const payload = Buffer.from(
    JSON.stringify({
      role: 'admin',
      iat: Date.now(),
      exp: Date.now() + 12 * 60 * 60 * 1000,
    })
  ).toString('base64url');
  const sig = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
  return `${payload}.${sig}`;
}

function verifyAdminToken(token: string): boolean {
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payload, sig] = parts;
  const expectedSig = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
  const a = Buffer.from(sig);
  const b = Buffer.from(expectedSig);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  try {
    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString('utf-8'));
    return decoded?.role === 'admin' && typeof decoded?.exp === 'number' && decoded.exp > Date.now();
  } catch {
    return false;
  }
}

function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!token || !verifyAdminToken(token)) {
    res.status(401).json({ error: 'Unauthorized. Valid admin bearer token required.' });
    return;
  }
  next();
}

function getBaseUrl(req: Request): string {
  if (process.env.APP_URL && process.env.APP_URL.startsWith('http')) {
    return process.env.APP_URL.replace(/\/$/, '');
  }
  const proto = (req.headers['x-forwarded-proto'] as string) || req.protocol || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || `localhost:${PORT}`;
  return `${proto}://${host}`;
}

const SERVICE_SLUGS_ID = [
  'jasa-bim-modeling',
  'jasa-revit-modeling',
  'jasa-tekla-structures',
  'jasa-shop-drawing-struktur',
  'jasa-rebar-detailing',
  'jasa-bim-coordination',
  'jasa-structural-engineering',
];

const BLOG_SLUGS = [
  'understanding-building-information-modeling',
  'bim-modeling-for-construction-projects',
  'revit-structural-modeling',
  'tekla-structures-in-construction',
  'structural-shop-drawing',
  'reinforcement-detailing',
  'bar-bending-schedule',
  'bim-coordination',
  'clash-detection',
  'structural-engineering-analysis',
  'quantity-take-off',
  'construction-cost-estimation',
];

async function createServer() {
  const app = express();
  app.set('trust proxy', 1);
  app.use(express.json({ limit: '12mb' }));

  // Technical SEO: robots.txt
  app.get('/robots.txt', (req, res) => {
    const baseUrl = getBaseUrl(req);
    res.type('text/plain');
    res.send(
      [
        'User-agent: *',
        'Allow: /',
        'Disallow: /api/',
        'Disallow: /admin-inquiries',
        '',
        `Sitemap: ${baseUrl}/sitemap.xml`,
      ].join('\n')
    );
  });

  // Technical SEO: dynamic sitemap.xml with hreflang alternates
  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const today = new Date().toISOString().split('T')[0];

    const urlEntries: Array<{ loc: string; idAlt?: string; enAlt?: string; priority: string }> = [
      { loc: `${baseUrl}/`, idAlt: `${baseUrl}/id/`, enAlt: `${baseUrl}/en/`, priority: '1.0' },
      { loc: `${baseUrl}/id/`, idAlt: `${baseUrl}/id/`, enAlt: `${baseUrl}/en/`, priority: '1.0' },
      { loc: `${baseUrl}/en/`, idAlt: `${baseUrl}/id/`, enAlt: `${baseUrl}/en/`, priority: '0.9' },
      { loc: `${baseUrl}/portfolio`, idAlt: `${baseUrl}/id/portfolio`, enAlt: `${baseUrl}/en/portfolio`, priority: '0.8' },
      { loc: `${baseUrl}/testimoni`, idAlt: `${baseUrl}/id/testimoni`, enAlt: `${baseUrl}/en/testimonials`, priority: '0.7' },
      { loc: `${baseUrl}/blog`, idAlt: `${baseUrl}/id/blog`, enAlt: `${baseUrl}/en/blog`, priority: '0.8' },
      { loc: `${baseUrl}/kontak`, idAlt: `${baseUrl}/id/kontak`, enAlt: `${baseUrl}/en/contact`, priority: '0.9' },
    ];

    for (const slug of SERVICE_SLUGS_ID) {
      urlEntries.push({
        loc: `${baseUrl}/${slug}/`,
        idAlt: `${baseUrl}/id/${slug}/`,
        enAlt: `${baseUrl}/en/${slug}/`,
        priority: '0.9',
      });
    }

    for (const blogSlug of BLOG_SLUGS) {
      urlEntries.push({
        loc: `${baseUrl}/blog/${blogSlug}`,
        idAlt: `${baseUrl}/id/blog/${blogSlug}`,
        enAlt: `${baseUrl}/en/blog/${blogSlug}`,
        priority: '0.7',
      });
    }

    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
      ...urlEntries.map((entry) => {
        const alts =
          entry.idAlt && entry.enAlt
            ? `\n    <xhtml:link rel="alternate" hreflang="id" href="${entry.idAlt}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${entry.enAlt}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.idAlt}" />`
            : '';
        return `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${entry.priority}</priority>${alts}\n  </url>`;
      }),
      '</urlset>',
    ].join('\n');

    res.type('application/xml');
    res.send(xml);
  });

  // Public Health endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'J&J BIM & Structure Engineering API' });
  });

  // Public Inquiry Submission
  app.post('/api/inquiries', (req, res) => {
    try {
      const body = req.body || {};
      const fullName = sanitizeText(body.fullName, 120);
      const companyName = sanitizeText(body.companyName, 160);
      const email = sanitizeText(body.email, 160);
      const whatsappNumber = sanitizeText(body.whatsappNumber, 40);
      const projectType = sanitizeText(body.projectType, 100);
      const serviceRequired = sanitizeText(body.serviceRequired, 120);
      const projectDescription = sanitizeText(body.projectDescription, 4000);
      const language: 'id' | 'en' = body.language === 'en' ? 'en' : 'id';

      if (!fullName || !companyName || !email || !whatsappNumber || !serviceRequired || !projectDescription) {
        res.status(400).json({ error: 'All required project inquiry fields must be filled.' });
        return;
      }
      if (!isValidEmail(email)) {
        res.status(400).json({ error: 'Please provide a valid email address.' });
        return;
      }
      if (!isValidPhone(whatsappNumber)) {
        res.status(400).json({ error: 'Please provide a valid WhatsApp phone number.' });
        return;
      }

      let attachmentMeta: InquiryRecord['attachment'];
      if (body.attachment && typeof body.attachment === 'object') {
        const rawName = sanitizeFilename(String(body.attachment.name || 'document'));
        const ext = path.extname(rawName).toLowerCase();
        if (!ALLOWED_EXTENSIONS.has(ext)) {
          res.status(400).json({
            error: 'Unsupported document format. Allowed: PDF, DWG, RVT, IFC, XLSX, XLS, ZIP, PNG, JPG.',
          });
          return;
        }
        const base64Str = typeof body.attachment.dataBase64 === 'string' ? body.attachment.dataBase64 : '';
        const cleanBase64 = base64Str.includes(',') ? base64Str.split(',')[1] : base64Str;
        const fileBuffer = Buffer.from(cleanBase64, 'base64');
        if (fileBuffer.length === 0 || fileBuffer.length > MAX_UPLOAD_BYTES) {
          res.status(400).json({ error: 'Attachment file size must be between 1 byte and 8 MB.' });
          return;
        }
        const storedName = `${crypto.randomUUID()}${ext}`;
        const targetPath = path.resolve(UPLOADS_DIR, storedName);
        if (!targetPath.startsWith(UPLOADS_DIR + path.sep)) {
          res.status(400).json({ error: 'Invalid upload path.' });
          return;
        }
        fs.writeFileSync(targetPath, fileBuffer);
        attachmentMeta = {
          storedName,
          originalName: rawName,
          sizeBytes: fileBuffer.length,
        };
      }

      const id = crypto.randomUUID();
      const referenceCode = `JJ-${new Date().getFullYear()}-${id.slice(0, 6).toUpperCase()}`;
      const newRecord: InquiryRecord = {
        id,
        referenceCode,
        fullName,
        companyName,
        email,
        whatsappNumber,
        projectType: projectType || 'Commercial / Structural Project',
        serviceRequired,
        projectDescription,
        language,
        status: 'new',
        attachment: attachmentMeta,
        createdAt: new Date().toISOString(),
      };

      const inquiries = readJsonArray<InquiryRecord>(INQUIRIES_FILE);
      inquiries.unshift(newRecord);
      writeJsonArray(INQUIRIES_FILE, inquiries);

      res.status(201).json({
        id: newRecord.id,
        referenceCode: newRecord.referenceCode,
        createdAt: newRecord.createdAt,
      });
    } catch {
      res.status(500).json({ error: 'Failed to record project inquiry. Please try again.' });
    }
  });

  // Public Approved Testimonials
  app.get('/api/testimonials', (_req, res) => {
    const items = readJsonArray<TestimonialRecord>(TESTIMONIALS_FILE).filter(
      (item) => item.status === 'approved'
    );
    res.json({ testimonials: items });
  });

  // Public Testimonial Submission (stored as pending until verified by admin)
  app.post('/api/testimonials', (req, res) => {
    const body = req.body || {};
    const clientName = sanitizeText(body.clientName, 120);
    const companyName = sanitizeText(body.companyName, 160);
    const projectType = sanitizeText(body.projectType, 120);
    const review = sanitizeText(body.review, 1200);

    if (!clientName || !companyName || !projectType || !review || review.length < 20) {
      res.status(400).json({
        error: 'Please complete all fields (review minimum 20 characters).',
      });
      return;
    }

    const items = readJsonArray<TestimonialRecord>(TESTIMONIALS_FILE);
    const record: TestimonialRecord = {
      id: crypto.randomUUID(),
      clientName,
      companyName,
      projectType,
      review,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    items.unshift(record);
    writeJsonArray(TESTIMONIALS_FILE, items);

    res.status(201).json({
      id: record.id,
      status: record.status,
      message: 'Review submitted for verification by J&J Engineering administration.',
    });
  });

  // Admin Auth Status (supports env passcode OR one-time first-run claim)
  app.get('/api/admin/status', (_req, res) => {
    const hasEnv = getEnvAdminPasscode().length > 0;
    const hasClaimed = readAdminFile() !== null;
    res.json({
      configured: hasEnv || hasClaimed,
      source: hasEnv ? 'env' : hasClaimed ? 'claimed' : 'unclaimed',
    });
  });

  // One-time Admin Claim (only allowed when env passcode is empty and no admin.json exists)
  app.post('/api/admin/claim', (req, res) => {
    if (getEnvAdminPasscode().length > 0 || readAdminFile() !== null) {
      res.status(403).json({ error: 'Admin passcode is already configured.' });
      return;
    }
    const passcode = typeof req.body?.passcode === 'string' ? req.body.passcode.trim() : '';
    if (passcode.length < 8 || passcode.length > 128) {
      res.status(400).json({ error: 'Admin passcode must be between 8 and 128 characters.' });
      return;
    }
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = hashPasscode(passcode, salt);
    const adminData: AdminCredentialFile = {
      salt,
      hash,
      claimedAt: new Date().toISOString(),
    };
    fs.writeFileSync(ADMIN_FILE, JSON.stringify(adminData, null, 2), { encoding: 'utf-8', flag: 'wx' });
    const token = signAdminToken();
    res.status(201).json({ token });
  });

  // Admin Login
  app.post('/api/admin/login', (req, res) => {
    const passcode = typeof req.body?.passcode === 'string' ? req.body.passcode.trim() : '';
    if (!passcode || !verifyPasscode(passcode)) {
      res.status(401).json({ error: 'Invalid admin passcode.' });
      return;
    }
    res.json({ token: signAdminToken() });
  });

  // Protected Admin Routes
  app.get('/api/inquiries', requireAdminAuth, (_req, res) => {
    const inquiries = readJsonArray<InquiryRecord>(INQUIRIES_FILE);
    res.json({ inquiries });
  });

  app.patch('/api/inquiries/:id', requireAdminAuth, (req, res) => {
    const id = sanitizeText(req.params.id, 64);
    const status = req.body?.status;
    if (!['new', 'reviewed', 'quoted', 'archived'].includes(status)) {
      res.status(400).json({ error: 'Invalid inquiry status.' });
      return;
    }
    const inquiries = readJsonArray<InquiryRecord>(INQUIRIES_FILE);
    const idx = inquiries.findIndex((i) => i.id === id);
    if (idx === -1) {
      res.status(404).json({ error: 'Inquiry not found.' });
      return;
    }
    inquiries[idx].status = status;
    writeJsonArray(INQUIRIES_FILE, inquiries);
    res.json({ inquiry: inquiries[idx] });
  });

  app.get('/api/inquiries/:id/attachment', requireAdminAuth, (req, res) => {
    const id = sanitizeText(req.params.id, 64);
    const inquiries = readJsonArray<InquiryRecord>(INQUIRIES_FILE);
    const item = inquiries.find((i) => i.id === id);
    if (!item || !item.attachment) {
      res.status(404).json({ error: 'Attachment not found.' });
      return;
    }
    const filePath = path.resolve(UPLOADS_DIR, path.basename(item.attachment.storedName));
    if (!filePath.startsWith(UPLOADS_DIR + path.sep) || !fs.existsSync(filePath)) {
      res.status(404).json({ error: 'File does not exist.' });
      return;
    }
    res.download(filePath, item.attachment.originalName);
  });

  app.get('/api/admin/testimonials', requireAdminAuth, (_req, res) => {
    const testimonials = readJsonArray<TestimonialRecord>(TESTIMONIALS_FILE);
    res.json({ testimonials });
  });

  app.patch('/api/admin/testimonials/:id', requireAdminAuth, (req, res) => {
    const id = sanitizeText(req.params.id, 64);
    const status = req.body?.status;
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      res.status(400).json({ error: 'Invalid testimonial status.' });
      return;
    }
    const testimonials = readJsonArray<TestimonialRecord>(TESTIMONIALS_FILE);
    const idx = testimonials.findIndex((t) => t.id === id);
    if (idx === -1) {
      res.status(404).json({ error: 'Testimonial not found.' });
      return;
    }
    testimonials[idx].status = status;
    writeJsonArray(TESTIMONIALS_FILE, testimonials);
    res.json({ testimonial: testimonials[idx] });
  });

  const httpServer = http.createServer(app);

  // Frontend Vite Dev / Production Static Serving
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        ws: { server: httpServer },
        hmr: { server: httpServer },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir, { index: false }));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distDir, 'index.html'));
    });
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`J&J BIM & Structure Engineering server running on http://0.0.0.0:${PORT}`);
  });
}

createServer();
