import React, { useState } from 'react';
import { Z8Icon, ZfIcon, Z8DetailedSvg, ZfDetailedSvg, ZLogo, ChevronDown, Film } from './icons.jsx';

export default function CameraTipAccordion({ type, tipText, zfGrain }) {
  const [isOpen, setIsOpen] = useState(false);
  const isZ8 = type === 'z8';

  const bgStyle = isZ8
    ? 'bg-[#0A0A0A]/90 border-white/10 hover:border-[#FFE100]/30'
    : 'bg-[#0A0A0A]/90 border-white/10 hover:border-zinc-400/40';

  const activeBgStyle = isZ8
    ? 'bg-gradient-to-br from-[#141414] to-[#1A1A1A] border-[#FFE100]/40 shadow-[0_0_20px_rgba(255,225,0,0.05)]'
    : 'bg-gradient-to-br from-[#18181B] to-[#111111] border-zinc-400/40 shadow-[0_0_20px_rgba(255,255,255,0.03)]';

  const badgeBorder = isZ8 ? 'border-[#FFE100]/30 text-[#FFE100]' : 'border-zinc-400/40 text-zinc-300';

  return (
    <div className={`rounded-xl border backdrop-blur-sm transition-all duration-300 overflow-hidden ${isOpen ? activeBgStyle : bgStyle}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left focus:outline-none">
        <div className="flex items-center gap-4">
          <div className="shrink-0 drop-shadow-md">
            {isZ8 ? <Z8Icon className="w-7 h-auto opacity-90" /> : <ZfIcon className="w-7 h-auto opacity-90" />}
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-2">
              <span className="uppercase">Nikon</span>{' '}
              <span className="flex items-center normal-case">
                <ZLogo className="w-3.5 h-3.5 shrink-0 mr-1" />
                {isZ8 ? '8' : 'f'}
              </span>
              <span className={`text-[9px] px-2 py-0.5 rounded border ${badgeBorder} uppercase`}>Exclusive</span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">
              {isZ8 ? '旗艦機身實戰優化設定' : '復古機身盲操與底片設定'}
            </div>
          </div>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </div>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-12 md:pb-20 pt-6 border-t border-white/5 flex flex-col md:flex-row relative">
            <div className="relative z-10 w-full md:w-2/3 pr-4">
              <p className={`text-sm text-zinc-300 leading-relaxed ${!isZ8 && zfGrain ? 'mb-8' : 'mb-4'}`}>{tipText}</p>
              {!isZ8 && zfGrain && (
                <div className="inline-flex flex-wrap items-center gap-3 bg-black/40 border border-zinc-500/30 px-3.5 py-2.5 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-zinc-300 border-r border-white/10 pr-3">
                    <Film className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">底片顆粒設定</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-zinc-500">顆粒量:</span>
                    <span className={`font-medium ${zfGrain.amount === '關閉' ? 'text-zinc-500' : 'text-white'}`}>{zfGrain.amount}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-zinc-500">粗細:</span>
                    <span className={`font-medium ${zfGrain.size === '-' ? 'text-zinc-500' : 'text-white'}`}>{zfGrain.size}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden md:flex absolute right-0 bottom-0 top-0 w-1/3 items-center justify-end pr-4 pointer-events-none opacity-40">
              {isZ8 ? <Z8DetailedSvg className="w-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" /> : <ZfDetailedSvg className="w-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
