// --- 手刻 Lucide 風格 SVG 圖示集 + Nikon 專屬相機/鏡頭 SVG ---
import React from 'react';

export const NIKON_YELLOW = '#FFE100';

const Icon = ({ path, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {path}
  </svg>
);

// --- 通用圖示 ---
export const Camera = (p) => (<Icon {...p} path={<><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></>} />);
export const Sliders = (p) => (<Icon {...p} path={<><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></>} />);
export const Sunset = (p) => (<Icon {...p} path={<><path d="M12 10V2" /><path d="m4.93 10.93 1.41 1.41" /><path d="M2 18h2" /><path d="M20 18h2" /><path d="m19.07 10.93-1.41 1.41" /><path d="M22 22H2" /><path d="m16 6-4 4-4-4" /><path d="M16 18a4 4 0 0 0-8 0" /></>} />);
export const Waves = (p) => (<Icon {...p} path={<><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></>} />);
export const Contrast = (p) => (<Icon {...p} path={<><circle cx="12" cy="12" r="10" /><path d="M12 18a6 6 0 0 0 0-12v12z" /></>} />);
export const Film = (p) => (<Icon {...p} path={<><rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18" /><line x1="7" x2="7" y1="2" y2="22" /><line x1="17" x2="17" y1="2" y2="22" /><line x1="2" x2="7" y1="12" y2="12" /><line x1="2" x2="7" y1="7" y2="7" /><line x1="2" x2="7" y1="17" y2="17" /><line x1="17" x2="22" y1="12" y2="12" /><line x1="17" x2="22" y1="7" y2="7" /><line x1="17" x2="22" y1="17" y2="17" /></>} />);
export const CloudFog = (p) => (<Icon {...p} path={<><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M16 17H7" /><path d="M17 21H9" /></>} />);
export const Snowflake = (p) => (<Icon {...p} path={<><line x1="2" x2="22" y1="12" y2="12" /><line x1="12" x2="12" y1="2" y2="22" /><path d="m20 16-4-4 4-4" /><path d="m4 8 4 4-4 4" /><path d="m16 4-4 4-4-4" /><path d="m8 20 4-4 4 4" /></>} />);
export const CloudSun = (p) => (<Icon {...p} path={<><path d="M12 2v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="M20 12h2" /><path d="m19.07 4.93-1.41 1.41" /><path d="M15.94 14A5 5 0 0 0 6.14 14H4a4 4 0 0 0 0 8h12a4 4 0 0 0 0-8h-1.06Z" /></>} />);
export const AiryPortrait = (p) => (<Icon {...p} path={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 8h-4" /><path d="M20 13h-4" /><path d="M21 18h-4" /></>} />);
export const FilmPortrait = (p) => (<Icon {...p} path={<><rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18" /><line x1="7" x2="7" y1="2" y2="22" /><line x1="17" x2="17" y1="2" y2="22" /><line x1="2" x2="7" y1="12" y2="12" /><line x1="2" x2="7" y1="7" y2="7" /><line x1="2" x2="7" y1="17" y2="17" /><line x1="17" x2="22" y1="12" y2="12" /><line x1="17" x2="22" y1="7" y2="7" /><line x1="17" x2="22" y1="17" y2="17" /><circle cx="12" cy="9.5" r="2.5" /><path d="M15.5 22v-1.5a3.5 3.5 0 0 0-3.5-3.5h-0a3.5 3.5 0 0 0-3.5 3.5V22" /></>} />);
export const ToriiGate = (p) => (<Icon {...p} path={<><path d="M4 6h16 M6 11h12 M8 6v14 M16 6v14 M12 6v5" /></>} />);
export const Lightbulb = (p) => (<Icon {...p} path={<><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></>} />);
export const Building2 = (p) => (<Icon {...p} path={<><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></>} />);
export const Info = (p) => (<Icon {...p} path={<><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>} />);
export const AlertTriangle = (p) => (<Icon {...p} path={<><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></>} />);
export const Zap = (p) => (<Icon {...p} path={<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />} />);
export const Aperture = (p) => (<Icon {...p} path={<><circle cx="12" cy="12" r="10" /><path d="m14.31 8 5.74 9.94" /><path d="M9.69 8h11.48" /><path d="m7.38 12 5.74-9.94" /><path d="M9.69 16 3.95 6.06" /><path d="M14.31 16H2.83" /><path d="m16.62 12-5.74 9.94" /></>} />);
export const ChevronRight = (p) => (<Icon {...p} path={<path d="m9 18 6-6-6-6" />} />);
export const ChevronDown = (p) => (<Icon {...p} path={<path d="m6 9 6 6 6-6" />} />);
export const Menu = (p) => (<Icon {...p} path={<><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></>} />);
export const X = (p) => (<Icon {...p} path={<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>} />);
export const Grid = (p) => (<Icon {...p} path={<><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></>} />);
export const User = (p) => (<Icon {...p} path={<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>} />);
export const Share2 = (p) => (<Icon {...p} path={<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></>} />);
export const Check = (p) => (<Icon {...p} path={<polyline points="20 6 9 17 4 12" />} />);
export const Maximize2 = (p) => (<Icon {...p} path={<><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></>} />);
export const Lock = (p) => (<Icon {...p} path={<><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>} />);
export const Bell = (p) => (<Icon {...p} path={<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></>} />);

// --- 社群圖示 ---
export const Facebook = (p) => (<Icon {...p} path={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />} />);
export const Instagram = (p) => (<Icon {...p} path={<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>} />);
export const Threads = (p) => (<Icon {...p} path={<><path d="M14.5 11.5v1.5c0 1.4 1 2 2 2s2-1 2-2.5V11c0-5-3.5-8-8-8-5.5 0-9.5 4.5-9.5 10s4.5 10 10.5 10c2.5 0 5-1 6.5-2.5" /><path d="M16 11.5c0 3.3-2.2 5.5-5.5 5.5-3 0-5.5-2.2-5.5-5.5S7.5 6 10.5 6c1.6 0 3 .8 4 2" /></>} />);

// --- EXIF 專屬實心相機與鏡頭圖示 ---
export const FilledCameraIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 7h-3.4l-1.4-2.1A2 2 0 0 0 13.5 4h-3a2 2 0 0 0-1.7.9L7.4 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="13" r="4" fill="#1A1A1A" />
  </svg>
);

export const FilledLensIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M4 11h2v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z" opacity="0.4" />
    <path d="M7 9h12v14H7z" opacity="0.8" />
    <rect x="8" y="9" width="1.5" height="3" fill="#1A1A1A" />
    <rect x="11.5" y="9" width="1.5" height="3" fill="#1A1A1A" />
    <rect x="15" y="9" width="1.5" height="3" fill="#1A1A1A" />
    <rect x="8" y="20" width="1.5" height="3" fill="#1A1A1A" />
    <rect x="11.5" y="20" width="1.5" height="3" fill="#1A1A1A" />
    <rect x="15" y="20" width="1.5" height="3" fill="#1A1A1A" />
    <path d="M20 10h4l2 1.5v9L24 22h-4z" opacity="0.6" />
  </svg>
);

// --- Nikon Z 品牌 Logo ---
export const ZLogo = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} fill="currentColor" preserveAspectRatio="xMidYMid meet">
    <path d="M15,95 L80,25 H25 V5 H115 V20 L50,90 H105 V110 H15 Z" />
  </svg>
);

export const Z8Icon = ({ className }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M15 35 C15 25 20 25 30 25 L40 25 C45 25 48 20 50 16 L53 10 C56 6 74 6 77 10 L80 16 C82 20 85 25 90 25 L100 25 C110 25 115 30 115 40 L115 80 C115 90 110 95 100 95 L30 95 C20 95 15 90 15 80 Z" fill="#1A1A1A" stroke="#444" strokeWidth="2" />
    <path d="M50 16 C53 10 56 6 65 6 C74 6 77 10 80 16 C82 20 85 25 90 25 L40 25 C45 25 48 20 50 16 Z" fill="#0A0A0A" />
    <path d="M15 35 C15 25 20 25 30 25 L40 25 L40 95 L30 95 C20 95 15 90 15 80 Z" fill="#111" />
    <path d="M22 35 C18 50 18 60 22 70 L25 65 C22 55 22 40 25 38 Z" fill="#E60012" />
    <circle cx="65" cy="60" r="30" fill="#0A0A0A" stroke="#333" strokeWidth="2" />
    <circle cx="65" cy="60" r="22" fill="#020617" stroke="#9CA3AF" strokeWidth="2" />
    <line x1="95" y1="35" x2="105" y2="35" stroke="#FFE100" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ZfIcon = ({ className }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="matrix(0.85, 0, 0, 0.85, 9, 10)">
      <rect x="18" y="24" width="12" height="4" rx="1" fill="#555" />
      <rect x="35" y="20" width="16" height="8" rx="2" fill="#555" />
      <rect x="85" y="20" width="16" height="8" rx="2" fill="#555" />
      <circle cx="26" cy="25" r="3" fill="#E5E7EB" />
      <rect x="15" y="28" width="90" height="18" fill="#2A2A2A" stroke="#444" strokeWidth="1.5" />
      <path d="M45 28 L52 14 L68 14 L75 28 Z" fill="#2A2A2A" stroke="#444" strokeWidth="1.5" />
      <rect x="15" y="46" width="90" height="47" rx="2" fill="#0A0A0A" stroke="#333" strokeWidth="1.5" />
      <path d="M15 46 L25 46 L25 93 L15 93 Z" fill="#111" />
      <circle cx="60" cy="65" r="25" fill="#050505" stroke="#333" strokeWidth="2" />
      <circle cx="60" cy="65" r="18" fill="#1C1917" stroke="#FBBF24" strokeWidth="1" />
      <text x="90" y="42" fill="#FFF" fontSize="10" fontWeight="bold" fontFamily="serif" fontStyle="italic">f</text>
    </g>
  </svg>
);

export const Z8DetailedSvg = ({ className }) => (
  <svg viewBox="0 -10 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="z8Body" x1="0" y1="0" x2="300" y2="260">
        <stop offset="0%" stopColor="#262626" />
        <stop offset="40%" stopColor="#1A1A1A" />
        <stop offset="100%" stopColor="#0A0A0A" />
      </linearGradient>
      <linearGradient id="z8Grip" x1="0" y1="0" x2="100" y2="260">
        <stop offset="0%" stopColor="#1A1A1A" />
        <stop offset="100%" stopColor="#050505" />
      </linearGradient>
      <radialGradient id="lensGlassZ8" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="70%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#020617" />
      </radialGradient>
      <linearGradient id="metalRingZ8" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#D4D4D8" />
        <stop offset="50%" stopColor="#71717A" />
        <stop offset="100%" stopColor="#3F3F46" />
      </linearGradient>
    </defs>
    <path d="M35,100 C35,70 45,65 70,65 L100,65 C108,65 112,58 116,48 L122,35 C126,26 135,22 150,22 C165,22 174,26 178,35 L184,48 C188,58 192,65 200,65 L230,65 C255,65 265,70 265,100 L265,200 C265,225 255,230 230,230 L70,230 C45,230 35,225 35,200 Z" fill="url(#z8Body)" stroke="#333" strokeWidth="2" />
    <path d="M100,65 C108,65 112,58 116,48 L122,35 C126,26 135,22 150,22 C165,22 174,26 178,35 L184,48 C188,58 192,65 200,65 Z" fill="#141414" stroke="#333" strokeWidth="2" />
    <path d="M35,100 C35,70 45,65 70,65 L90,65 L90,230 L70,230 C45,230 35,225 35,200 Z" fill="url(#z8Grip)" />
    <path d="M52,85 C46,110 46,130 52,150 L58,145 C53,125 53,105 58,88 Z" fill="#E60012" />
    <rect x="135" y="15" width="30" height="8" rx="2" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
    <text x="150" y="50" fill="#FFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">Nikon</text>
    <text x="228" y="95" fill="#FFF" fontSize="16" fontWeight="900" fontFamily="sans-serif" fontStyle="italic" letterSpacing="1">Z 8</text>
    <circle cx="235" cy="115" r="10" fill="#111" stroke="#333" strokeWidth="1.5" />
    <circle cx="235" cy="115" r="5" fill="#050505" />
    <circle cx="225" cy="155" r="8" fill="#1A1A1A" stroke="#444" strokeWidth="1.5" />
    <circle cx="225" cy="155" r="4" fill="#111" />
    <rect x="220" y="195" width="12" height="18" rx="3" fill="#1A1A1A" stroke="#333" strokeWidth="1.5" />
    <circle cx="150" cy="140" r="75" fill="#0A0A0A" stroke="#1A1A1A" strokeWidth="6" />
    <circle cx="150" cy="140" r="62" fill="transparent" stroke="url(#metalRingZ8)" strokeWidth="8" />
    <circle cx="150" cy="140" r="50" fill="#050505" stroke="#222" strokeWidth="2" />
    <circle cx="150" cy="140" r="42" fill="url(#lensGlassZ8)" stroke="#000" strokeWidth="2" />
    <path d="M115,110 C135,90 165,90 185,110" stroke="#60A5FA" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
    <path d="M125,160 C140,175 160,175 175,160" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
    <circle cx="135" cy="125" r="12" fill="#93C5FD" opacity="0.2" />
    <circle cx="165" cy="155" r="6" fill="#FFF" opacity="0.15" />
  </svg>
);

export const ZfDetailedSvg = ({ className }) => (
  <svg viewBox="0 -20 300 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="zfTop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2A2A2A" />
        <stop offset="100%" stopColor="#111111" />
      </linearGradient>
      <linearGradient id="zfBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1A1A1A" />
        <stop offset="100%" stopColor="#050505" />
      </linearGradient>
      <linearGradient id="brassDial" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#B45309" />
        <stop offset="50%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#78350F" />
      </linearGradient>
      <radialGradient id="lensGlassZf" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#451A03" />
        <stop offset="70%" stopColor="#1C1917" />
        <stop offset="100%" stopColor="#000000" />
      </radialGradient>
    </defs>
    <g transform="matrix(0.85, 0, 0, 0.85, 22.5, 21)">
      <rect x="20" y="50" width="30" height="10" rx="2" fill="url(#brassDial)" stroke="#333" strokeWidth="1" />
      <rect x="55" y="45" width="45" height="15" rx="3" fill="url(#brassDial)" stroke="#333" strokeWidth="1" />
      <rect x="210" y="45" width="45" height="15" rx="3" fill="url(#brassDial)" stroke="#333" strokeWidth="1" />
      <circle cx="77.5" cy="40" r="6" fill="#E5E7EB" stroke="#4B5563" strokeWidth="2" />
      <rect x="30" y="60" width="250" height="140" rx="6" fill="url(#zfBody)" stroke="#333" strokeWidth="2" />
      <rect x="35" y="80" width="240" height="115" rx="4" fill="#0A0A0A" />
      <path d="M45 80 L60 80 L60 195 L45 195 Z" fill="#050505" />
      <path d="M110 60 L125 25 L175 25 L190 60 Z" fill="#1A1A1A" stroke="#444" strokeWidth="2" />
      <path d="M125 25 L150 40 L175 25" stroke="#555" strokeWidth="2" fill="none" />
      <rect x="135" y="15" width="30" height="8" rx="1" fill="#000" />
      <text x="150" y="52" fill="#FFF" fontSize="14" fontWeight="bold" fontFamily="serif" textAnchor="middle" letterSpacing="1.5">Nikon</text>
      <circle cx="150" cy="130" r="65" fill="#050505" stroke="#222" strokeWidth="4" />
      <circle cx="150" cy="130" r="55" fill="transparent" stroke="url(#brassDial)" strokeWidth="4" />
      <circle cx="150" cy="130" r="40" fill="url(#lensGlassZf)" stroke="#000" strokeWidth="2" />
      <path d="M125 105 Q150 90 170 110" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
      <circle cx="140" cy="115" r="8" fill="#F59E0B" opacity="0.3" />
      <text x="245" y="95" fill="#FFF" fontSize="18" fontWeight="bold" fontFamily="serif" fontStyle="italic">Z f</text>
    </g>
  </svg>
);
