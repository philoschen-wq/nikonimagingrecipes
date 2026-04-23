import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import MobileHeader from '../components/MobileHeader.jsx';
import BackgroundDecor from '../components/BackgroundDecor.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { LightboxContext } from '../context/LightboxContext.js';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [showExif, setShowExif] = useState(false);
  const scrollRef = useRef(null);
  const location = useLocation();

  // 路由切換時捲動回頂部
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [location.pathname]);

  const openLightbox = (photo) => {
    setLightboxData(photo);
    setShowExif(window.innerWidth >= 768);
  };
  const closeLightbox = () => setLightboxData(null);

  return (
    <div className="flex h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-[#FFE100] selection:text-black overflow-hidden relative">
      <Lightbox data={lightboxData} showExif={showExif} setShowExif={setShowExif} onClose={closeLightbox} />

      <BackgroundDecor />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        <MobileHeader setIsSidebarOpen={setIsSidebarOpen} />

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth custom-scrollbar">
          <LightboxContext.Provider value={{ openLightbox }}>
            <Outlet />
          </LightboxContext.Provider>
        </div>
      </main>
    </div>
  );
}
