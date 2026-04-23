import React from 'react';
import { Facebook, Instagram, Threads } from './icons.jsx';

export default function SiteFooter() {
  return (
    <footer className="mt-20 pt-10 pb-8 border-t border-white/10 flex flex-col items-center gap-6 relative z-10 w-full">
      <div className="flex items-center gap-4">
        <a
          href="https://www.facebook.com/phototravel.tw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-[#FFE100] bg-[#111111] border border-white/5 hover:border-[#FFE100]/30 p-2.5 rounded-full transition-all duration-300"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="https://www.instagram.com/philoschen/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-[#FFE100] bg-[#111111] border border-white/5 hover:border-[#FFE100]/30 p-2.5 rounded-full transition-all duration-300"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="https://www.threads.com/@philoschen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-[#FFE100] bg-[#111111] border border-white/5 hover:border-[#FFE100]/30 p-2.5 rounded-full transition-all duration-300"
        >
          <Threads className="w-4 h-4" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-xs text-zinc-500 tracking-wider font-light">
          © Copyright 2026{' '}
          <a
            href="https://www.phototravel.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-[#FFE100] transition-colors font-medium border-b border-transparent hover:border-[#FFE100]/50 pb-0.5"
          >
            PHOTOTRAVEL.tw
          </a>{' '}
          All Rights Reserved.
        </div>
        <div className="flex flex-col items-center gap-1 mt-2">
          <div className="text-[10px] text-zinc-600 tracking-widest uppercase">
            Nikon Imaging Recipes Created By Philos
          </div>
          <div className="text-[9px] text-zinc-700 tracking-widest uppercase">Optimized for Z-Series</div>
        </div>
      </div>
    </footer>
  );
}
