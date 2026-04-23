import React from 'react';
import { ZLogo } from './icons.jsx';

export default function BackgroundDecor() {
  return (
    <>
      {/* 科技感快門與觀景窗線條背景 */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
        <svg viewBox="0 0 1000 1000" className="w-[150vw] h-[150vw] max-w-[1200px] max-h-[1200px] text-white" fill="none" stroke="currentColor">
          <line x1="333" y1="0" x2="333" y2="1000" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="666" y1="0" x2="666" y2="1000" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="333" x2="1000" y2="333" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="666" x2="1000" y2="666" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="500" cy="500" r="450" strokeWidth="1" />
          <circle cx="500" cy="500" r="430" strokeWidth="2" strokeDasharray="2 10" />
          <circle cx="500" cy="500" r="300" strokeWidth="1" />
          <polygon points="500,200 760,350 760,650 500,800 240,650 240,350" strokeWidth="2" />
          <line x1="500" y1="200" x2="1000" y2="200" strokeWidth="1.5" />
          <line x1="760" y1="350" x2="933" y2="0" strokeWidth="1.5" />
          <line x1="760" y1="650" x2="1000" y2="850" strokeWidth="1.5" />
          <line x1="500" y1="800" x2="0" y2="800" strokeWidth="1.5" />
          <line x1="240" y1="650" x2="67" y2="1000" strokeWidth="1.5" />
          <line x1="240" y1="350" x2="0" y2="150" strokeWidth="1.5" />
          <path d="M480 500 L520 500 M500 480 L500 520" stroke="#FFE100" strokeWidth="3" />
          <path d="M450 450 L430 450 L430 470 M550 450 L570 450 L570 470 M450 550 L430 550 L430 530 M550 550 L570 550 L570 530" strokeWidth="2" />
          <circle cx="500" cy="500" r="150" strokeWidth="1" strokeDasharray="10 20" />
        </svg>
      </div>

      {/* 沉浸式 Z 浮水印背景 */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-5">
        <ZLogo className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] text-white" />
      </div>
    </>
  );
}
