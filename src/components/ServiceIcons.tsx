import React from 'react';
import { ServiceDetail } from '../types';

interface IconProps {
  className?: string;
}

export function ServiceLineIcon({
  type,
  className = 'w-8 h-8',
}: {
  type: ServiceDetail['iconKey'];
  className?: string;
}) {
  switch (type) {
    case 'bim':
    case 'revit':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <path
            d="M18 4L31 11.5V24.5L18 32L5 24.5V11.5L18 4Z"
            stroke="#292019"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path d="M18 4V18M18 18L31 11.5M18 18L5 11.5M18 18V32" stroke="#C6A477" strokeWidth="1.35" />
          <path d="M11.5 14.8V21.2L18 24.8L24.5 21.2V14.8" stroke="#292019" strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      );
    case 'shopdrawing':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <rect x="5" y="7" width="26" height="22" rx="1.5" stroke="#292019" strokeWidth="1.4" />
          <path d="M10 13H22M10 18H18M10 23H26" stroke="#C6A477" strokeWidth="1.35" strokeLinecap="round" />
          <path d="M22 20L27 15L29 17L24 22H22V20Z" stroke="#292019" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      );
    case 'rebar':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <rect x="7" y="7" width="22" height="22" rx="1" stroke="#292019" strokeWidth="1.4" />
          <path d="M12 7V29M24 7V29M7 12H29M7 24H29" stroke="#C6A477" strokeWidth="1.35" />
          <circle cx="12" cy="12" r="1.6" fill="#292019" />
          <circle cx="24" cy="12" r="1.6" fill="#292019" />
          <circle cx="12" cy="24" r="1.6" fill="#292019" />
          <circle cx="24" cy="24" r="1.6" fill="#292019" />
        </svg>
      );
    case 'coordination':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <rect x="6" y="10" width="15" height="15" rx="1.5" stroke="#292019" strokeWidth="1.4" />
          <rect x="15" y="6" width="15" height="15" rx="1.5" stroke="#C6A477" strokeWidth="1.4" />
          <path d="M15 25V30H30V15H25" stroke="#292019" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="15" r="2" stroke="#292019" strokeWidth="1.3" />
        </svg>
      );
    case 'qto':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <path d="M8 28V8H28" stroke="#292019" strokeWidth="1.4" strokeLinecap="round" />
          <rect x="12" y="16" width="5" height="12" stroke="#C6A477" strokeWidth="1.4" />
          <rect x="20" y="11" width="5" height="17" stroke="#292019" strokeWidth="1.4" />
          <path d="M12 11H17M14.5 8.5V13.5" stroke="#C6A477" strokeWidth="1.35" strokeLinecap="round" />
        </svg>
      );
    case 'rab':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <rect x="8" y="5" width="20" height="26" rx="2" stroke="#292019" strokeWidth="1.4" />
          <rect x="12" y="9" width="12" height="5" stroke="#C6A477" strokeWidth="1.35" />
          <path d="M12 19H15M20 19H24M12 24H15M20 24H24" stroke="#292019" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'structural':
    case 'tekla':
    default:
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          <path d="M5 29H31" stroke="#292019" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M9 29V9L18 5L27 9V29" stroke="#292019" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M9 15H27M9 22H27M18 5V29" stroke="#C6A477" strokeWidth="1.35" />
          <path d="M9 15L18 22L27 15" stroke="#292019" strokeWidth="1.15" />
        </svg>
      );
  }
}

export function AdvantageLineIcon({ index, className = 'w-7 h-7' }: { index: number; className?: string }) {
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M16 4L27 10V22L16 28L5 22V10L16 4Z" stroke="#292019" strokeWidth="1.4" />
          <path d="M11 16L14.5 19.5L21.5 12.5" stroke="#C6A477" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <circle cx="16" cy="16" r="10" stroke="#292019" strokeWidth="1.4" />
          <circle cx="16" cy="16" r="4" stroke="#C6A477" strokeWidth="1.4" />
          <path d="M16 3V7M16 25V29M3 16H7M25 16H29" stroke="#292019" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <circle cx="16" cy="17" r="10" stroke="#292019" strokeWidth="1.4" />
          <path d="M16 11V17L20 19.5" stroke="#C6A477" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 4H19" stroke="#292019" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <rect x="5" y="7" width="22" height="18" rx="2" stroke="#292019" strokeWidth="1.4" />
          <path d="M10 13H22M10 19H17" stroke="#C6A477" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="21.5" cy="19" r="2" stroke="#292019" strokeWidth="1.3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M6 25V12C6 7.5 10.5 5 16 5C21.5 5 26 7.5 26 12V20" stroke="#292019" strokeWidth="1.4" strokeLinecap="round" />
          <rect x="4" y="15" width="4" height="8" rx="1.5" stroke="#C6A477" strokeWidth="1.4" />
          <rect x="24" y="15" width="4" height="8" rx="1.5" stroke="#C6A477" strokeWidth="1.4" />
          <path d="M14 26H19" stroke="#292019" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
  }
}

export function JJLogoMark({ className = 'w-9 h-9' }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="1.5" y="1.5" width="37" height="37" rx="4" stroke="#C6A477" strokeWidth="1.5" fill="#171513" />
      <path d="M13 10V23C13 26.2 10.8 28 8 28" stroke="#F8F0E5" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M27 10V23C27 26.2 24.8 28 22 28" stroke="#C6A477" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M17 18.5H23" stroke="#C6A477" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 33H33" stroke="#C6A477" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
}

export function JJWordmark({
  variant = 'dark',
  className = 'h-4 w-auto',
}: {
  variant?: 'dark' | 'light';
  className?: string;
}) {
  const letterColor = variant === 'light' ? '#F8F0E5' : '#171513';
  const ampColor = '#C6A477';
  return (
    <svg
      viewBox="0 0 86 22"
      fill="none"
      className={className}
      role="img"
      aria-label="J&J"
    >
      {/* Geometric J (left) */}
      <path
        d="M17 3V13.5C17 16.9 14.6 19 11.1 19C8.3 19 6.2 17.6 5.2 15.5"
        stroke={letterColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M13.5 3H19.5" stroke={letterColor} strokeWidth="2" strokeLinecap="round" />

      {/* Architectural Geometric & */}
      <path
        d="M49.5 18.5L38.2 7.2C36.9 5.9 37.3 3.2 40.3 3.2C42.9 3.2 44.3 4.8 44.3 6.7C44.3 8.9 42.1 10.1 39.2 11.4C36.6 12.6 35.1 14 35.1 16C35.1 17.9 36.8 19 39.4 19C42.4 19 45.2 17.3 47.4 14.5"
        stroke={ampColor}
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Geometric J (right) */}
      <path
        d="M78 3V13.5C78 16.9 75.6 19 72.1 19C69.3 19 67.2 17.6 66.2 15.5"
        stroke={letterColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M74.5 3H80.5" stroke={letterColor} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
