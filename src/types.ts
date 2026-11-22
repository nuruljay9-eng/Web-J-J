export type Language = 'id' | 'en';

export type PortfolioCategory =
  | 'All'
  | 'BIM Structural Modeling'
  | 'Architectural BIM Modeling'
  | 'Revit Modeling'
  | 'Tekla Structures'
  | 'Shop Drawing'
  | 'Rebar Detailing'
  | 'BIM Coordination'
  | 'Structural Analysis'
  | 'Quantity Take Off';

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  number: string;
  slugId: string;
  slugEn: string;
  iconKey:
    | 'bim'
    | 'shopdrawing'
    | 'rebar'
    | 'coordination'
    | 'qto'
    | 'rab'
    | 'structural'
    | 'revit'
    | 'tekla';
  cardTitle: { id: string; en: string };
  cardDescription: { id: string; en: string };
  seoLanding?: {
    slug: string;
    primaryKeyword: { id: string; en: string };
    supportingKeywords: { id: string[]; en: string[] };
    seoTitle: { id: string; en: string };
    metaDescription: { id: string; en: string };
    h1: { id: string; en: string };
    intro: { id: string; en: string };
    serviceDescription: { id: string[]; en: string[] };
    benefits: { id: string[]; en: string[] };
    deliverables: { id: string[]; en: string[] };
    softwareStack: string[];
    faqs: { id: ServiceFaqItem[]; en: ServiceFaqItem[] };
    image: string;
    imageAlt: { id: string; en: string };
    relatedSlugs: string[];
  };
}

export interface PortfolioItem {
  id: string;
  name: { id: string; en: string };
  category: Exclude<PortfolioCategory, 'All'>;
  description: { id: string; en: string };
  softwareUsed: string[];
  image: string;
  galleryImages?: Array<{ src: string; caption: { id: string; en: string } }>;
  imageAlt: { id: string; en: string };
  scopeOfWork: { id: string[]; en: string[] };
  lodLevel: string;
}

export interface BlogArticle {
  slug: string;
  topicTag: { id: string; en: string };
  seoTitle: { id: string; en: string };
  metaDescription: { id: string; en: string };
  h1: { id: string; en: string };
  excerpt: { id: string; en: string };
  author: string;
  publishedDate: string;
  readTime: string;
  featuredImage: string;
  imageAlt: { id: string; en: string };
  sections: {
    id: Array<{ h2: string; paragraphs: string[]; subheadings?: Array<{ h3: string; text: string }> }>;
    en: Array<{ h2: string; paragraphs: string[]; subheadings?: Array<{ h3: string; text: string }> }>;
  };
  faqs: {
    id: ServiceFaqItem[];
    en: ServiceFaqItem[];
  };
  internalServiceSlugs: string[];
  relatedArticleSlugs: string[];
}

export interface VerifiedTestimonial {
  id: string;
  clientName: string;
  companyName: string;
  projectType: string;
  review: string;
  createdAt: string;
}
