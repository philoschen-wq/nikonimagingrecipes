import React from 'react';

export default function SettingValue({ value, highlight = false }) {
  if (!value) return null;
  const colorClass = highlight ? 'text-[#FFE100]' : 'text-white';
  const parts = value.split(' (');
  if (parts.length === 2) {
    return (
      <div className="flex flex-col gap-1.5 mt-0.5">
        <span className={`font-medium ${colorClass} text-sm tracking-wide leading-none`}>{parts[0]}</span>
        <span className="text-[11px] text-zinc-500 tracking-wide leading-tight">({parts[1]}</span>
      </div>
    );
  }
  return <div className={`font-medium ${colorClass} text-sm tracking-wide mt-0.5`}>{value}</div>;
}
