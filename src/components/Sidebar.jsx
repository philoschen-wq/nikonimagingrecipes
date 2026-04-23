import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Grid, ChevronRight, Lightbulb, X, ZLogo } from './icons.jsx';
import { ProfileIcon } from './iconMap.jsx';
import { profiles } from '../data/recipes.js';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const isTips = location.pathname === '/tips';
  const activeId = location.pathname.startsWith('/recipe/') ? location.pathname.split('/')[2] : null;

  const go = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-[85%] max-w-[320px] bg-[#0A0A0A] border-r border-white/10 flex flex-col shrink-0
        transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:w-80
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="p-6 pb-5 border-b border-white/10 relative">
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={() => go('/')}
          className="flex flex-col items-start focus:outline-none group text-left w-full"
          title="回首頁"
        >
          <div className="flex items-center gap-3 mb-1.5 mt-2">
            <div className="bg-[#FFE100] px-2 py-0.5 group-hover:bg-white transition-colors duration-300">
              <span
                className="text-black font-black text-xl tracking-widest italic"
                style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}
              >
                Nikon
              </span>
            </div>
            <h1 className="text-xl font-light tracking-widest uppercase text-white flex items-center gap-2">
              <ZLogo className="w-6 h-6 shrink-0 text-[#FFE100] group-hover:text-white transition-colors duration-300" />
            </h1>
          </div>
          <p className="text-xs text-zinc-500 tracking-wide mt-2 group-hover:text-zinc-300 transition-colors duration-300">
            Nikon Z 成像配方
          </p>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar flex flex-col gap-1 px-4 relative z-10">
        <button
          onClick={() => go('/')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 mb-2 ${
            isHome
              ? 'bg-[#1a1a1a] border border-[#FFE100]/30 text-white font-medium'
              : 'text-zinc-500 hover:text-white hover:bg-[#111111] border border-transparent'
          }`}
        >
          <Grid className={`w-4 h-4 ${isHome ? 'text-[#FFE100]' : ''}`} />
          <span className="tracking-widest text-sm">首頁總覽</span>
        </button>

        <div className="text-[10px] text-zinc-600 font-medium tracking-widest uppercase mb-2 mt-2 px-2">
          Imaging Recipes
        </div>

        {profiles.map((profile) => {
          const isActive = activeId === profile.id;
          return (
            <button
              key={profile.id}
              onClick={() => go(`/recipe/${profile.id}`)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition-all duration-200 group ${
                isActive ? 'bg-[#141414] border border-[#FFE100]/30' : 'border border-transparent hover:bg-[#111111]'
              }`}
            >
              <div
                className={`${
                  isActive ? 'text-[#FFE100]' : 'text-zinc-600 group-hover:text-zinc-400 transition-colors'
                }`}
              >
                <ProfileIcon name={profile.iconName} />
              </div>
              <div className="flex-1 overflow-hidden">
                <div
                  className={`font-mono text-sm tracking-wide break-words whitespace-normal leading-tight ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-400'
                  }`}
                >
                  {profile.name}
                </div>
                <div className="text-[11px] text-zinc-500 mt-1 whitespace-normal">{profile.style}</div>
              </div>
              {isActive && <ChevronRight className="w-4 h-4 text-[#FFE100] opacity-80" />}
            </button>
          );
        })}
      </div>

      <div className="p-5 border-t border-white/10 bg-[#0A0A0A] relative z-10">
        <button
          onClick={() => go('/tips')}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm transition-all duration-200 tracking-wide ${
            isTips
              ? 'bg-[#FFE100] text-black font-bold shadow-[0_0_15px_rgba(255,225,0,0.3)]'
              : 'bg-[#111111] text-zinc-400 border border-white/10 hover:text-white hover:bg-[#1A1A1A]'
          }`}
        >
          <Lightbulb className={`w-4 h-4 ${isTips ? '' : 'opacity-70'}`} />
          實戰Tips
        </button>
      </div>
    </aside>
  );
}
