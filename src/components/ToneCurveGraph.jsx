import React from 'react';
import { NIKON_YELLOW } from './icons.jsx';

function catmullRom2bezier(points) {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y} `;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i === 0 ? points[0] : points[i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i + 2 < points.length ? points[i + 2] : p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
  }
  return d;
}

export default function ToneCurveGraph({ points }) {
  const mappedPoints = points.map((p) => ({ x: p.in, y: 255 - p.out }));
  const pathD = catmullRom2bezier(mappedPoints);
  return (
    <div className="relative w-full aspect-square bg-[#111111] rounded-lg border border-white/5 p-4 flex items-center justify-center">
      <svg viewBox="0 0 255 255" className="w-full h-full overflow-visible drop-shadow-[0_0_12px_rgba(255,225,0,0.2)]">
        {[64, 128, 192].map((val) => (
          <g key={val}>
            <line x1={val} y1="0" x2={val} y2="255" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line x1="0" y1={val} x2="255" y2={val} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </g>
        ))}
        <line x1="0" y1="255" x2="255" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d={pathD} fill="none" stroke={NIKON_YELLOW} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        {mappedPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4.5" fill={NIKON_YELLOW} stroke="#111111" strokeWidth="2" />
        ))}
      </svg>
    </div>
  );
}
