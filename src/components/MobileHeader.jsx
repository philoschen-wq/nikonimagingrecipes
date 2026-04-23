import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, ZLogo } from './icons.jsx';

export default function MobileHeader({ setIsSidebarOpen }) {
  const navigate = useNavigate();
  return (
    <div className="md:hidden shrink-0 flex flex-col border-b border-white/10 bg-[#0A0A0A] z-40 relative shadow-md">
      <div className="flex items-center justify-between p-4">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 focus:outline-none group">
          <div className="bg-[#FFE100] px-1.5 py-0.5 group-hover:bg-white transition-colors duration-300">
            <span
              className="text-black font-black text-sm tracking-widest italic"
              style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}
            >
              Nikon
            </span>
          </div>
          <span className="text-sm font-light tracking-widest uppercase text-white flex items-center gap-1.5">
            <ZLogo className="h-[18px] w-auto shrink-0 text-[#FFE100] group-hover:text-white transition-colors duration-300 mt-0.5" />
          </span>
        </button>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-zinc-400 hover:text-white p-1.5 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
