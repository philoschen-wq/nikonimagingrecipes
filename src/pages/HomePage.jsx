import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { profiles } from '../data/recipes.js';
import { ProfileIcon } from '../components/iconMap.jsx';
import { ChevronRight, Grid, Maximize2, FilledCameraIcon, FilledLensIcon } from '../components/icons.jsx';
import ProgressiveImage from '../components/ProgressiveImage.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useLightbox } from '../context/LightboxContext.js';

function shufflePhotos(photos) {
  const arr = [...photos];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildMasonry(photos, colCount = 3) {
  const shuffled = shufflePhotos(photos);
  const verticalPhotos = shuffled.filter((p) => p.isVertical);
  const horizontalPhotos = shuffled.filter((p) => !p.isVertical);

  const cols = Array.from({ length: colCount }, () => []);
  const colHeights = Array(colCount).fill(0);

  let vIdx = 0;
  let hIdx = 0;
  const total = shuffled.length;

  for (let i = 0; i < total; i++) {
    let minCol = 0;
    for (let c = 1; c < colCount; c++) {
      if (colHeights[c] < colHeights[minCol]) minCol = c;
    }
    const rowIdx = cols[minCol].length;
    const wantH = (minCol + rowIdx) % 2 === 0;

    let selectedPhoto = null;
    let addedHeight = 0;

    if (wantH && hIdx < horizontalPhotos.length) {
      selectedPhoto = horizontalPhotos[hIdx++];
      addedHeight = 1;
    } else if (!wantH && vIdx < verticalPhotos.length) {
      selectedPhoto = verticalPhotos[vIdx++];
      addedHeight = 2;
    } else if (hIdx < horizontalPhotos.length) {
      selectedPhoto = horizontalPhotos[hIdx++];
      addedHeight = 1;
    } else if (vIdx < verticalPhotos.length) {
      selectedPhoto = verticalPhotos[vIdx++];
      addedHeight = 2;
    }

    if (selectedPhoto) {
      cols[minCol].push(selectedPhoto);
      colHeights[minCol] += addedHeight;
    }
  }

  return cols.flat();
}

export default function HomePage() {
  const navigate = useNavigate();
  const { openLightbox } = useLightbox();
  const [activeFilter, setActiveFilter] = useState('全部');

  const allScenes = ['全部', ...Array.from(new Set(profiles.flatMap((p) => p.scenes)))];

  const filteredProfiles = activeFilter === '全部' ? profiles : profiles.filter((p) => p.scenes.includes(activeFilter));

  const allPhotos = useMemo(() => {
    const photos = profiles.flatMap((profile) =>
      (profile.gallery || []).map((photo) => ({
        ...photo,
        profileName: profile.name,
        profileId: profile.id,
      }))
    );
    return buildMasonry(photos, 3);
  }, []);

  return (
    <div className="max-w-6xl mx-auto animate-in duration-500 pb-12">
      <header className="mb-8 border-b border-white/10 pb-10">
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-widest mb-4 uppercase">
          Nikon Imaging <span className="font-black text-[#FFE100] italic">RECIPES</span>
        </h2>
        <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm tracking-wide mb-8">
          探索 9 款專為 Nikon Z 系列與 NX Studio 打造的專屬靈活色彩成像配方。從日系空氣感、電影青橙到極致黑白，選擇一個配方以查看完整的相機設定與參數。
        </p>
        <div className="flex flex-wrap gap-2">
          {allScenes.map((scene) => (
            <button
              key={scene}
              onClick={() => setActiveFilter(scene)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-widest transition-all duration-300 ${
                activeFilter === scene
                  ? 'bg-[#FFE100] text-black shadow-[0_0_15px_rgba(255,225,0,0.3)]'
                  : 'bg-[#111111] text-zinc-400 border border-white/10 hover:text-white hover:border-[#FFE100]/30'
              }`}
            >
              {scene}
            </button>
          ))}
        </div>
      </header>

      <div key={activeFilter} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 relative z-10 animate-in duration-500">
        {filteredProfiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => navigate(`/recipe/${profile.id}`)}
            className="group relative flex flex-col text-left overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-[#FFE100]/50 shadow-lg aspect-[3/4] md:aspect-[4/5] min-h-[420px] bg-[#0A0A0A]"
          >
            {profile.gallery && profile.gallery.length > 0 && (
              <ProgressiveImage src={profile.gallery[0].thumb} alt={profile.name} className="group-hover:scale-110" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 w-full overflow-hidden">
              <h3 className="text-xl md:text-3xl font-mono font-bold text-white mb-2 tracking-widest uppercase drop-shadow-md break-words leading-tight">
                {profile.name}
              </h3>
              <div className="text-sm font-medium text-[#FFE100] tracking-widest drop-shadow-md flex items-center gap-2">
                <ProfileIcon name={profile.iconName} /> {profile.style}
              </div>
            </div>

            <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col p-6 md:p-8 z-20">
              <div className="flex items-center gap-4 mb-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#FFE100]/30 flex items-center justify-center text-[#FFE100] shrink-0 shadow-[0_0_15px_rgba(255,225,0,0.15)]">
                  <ProfileIcon name={profile.iconName} />
                </div>
                <div className="overflow-hidden flex-1">
                  <h3 className="text-lg sm:text-xl font-mono font-bold text-white tracking-widest uppercase break-words leading-tight">
                    {profile.name}
                  </h3>
                  <div className="text-[11px] font-medium text-[#FFE100] tracking-widest mt-1">{profile.style}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {profile.scenes.map((scene) => (
                  <span
                    key={scene}
                    className="text-[10px] px-2.5 py-1 rounded border border-white/20 bg-white/5 text-zinc-300 tracking-widest whitespace-nowrap"
                  >
                    {scene}
                  </span>
                ))}
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 md:line-clamp-3 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {profile.desc}
              </p>

              <div className="mt-auto self-start sm:self-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full sm:w-auto">
                <div className="flex justify-center items-center gap-2 text-[#FFE100] text-xs font-bold tracking-widest uppercase bg-[#FFE100]/10 px-4 py-3 sm:py-2 rounded-full border border-[#FFE100]/20 w-full">
                  查看配方參數 <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </button>
        ))}

        {filteredProfiles.length === 0 && (
          <div className="col-span-full py-12 text-center text-zinc-500 tracking-widest">沒有找到符合此情境的配方</div>
        )}
      </div>

      {allPhotos.length > 0 && activeFilter === '全部' && (
        <section className="mt-20 relative z-10 animate-in duration-700 border-t border-white/10 pt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-widest uppercase flex items-center gap-3">
              <Grid className="w-6 h-6 md:w-8 md:h-8 text-[#FFE100]" />
              Inspiration Gallery
            </h3>
            <div className="bg-[#1A1A1A] border border-white/10 text-zinc-400 text-xs px-4 py-1.5 rounded-full tracking-widest uppercase">
              {allPhotos.length} Shots
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {allPhotos.map((photo, idx) => (
              <div
                key={`global-photo-${idx}`}
                className="break-inside-avoid relative group overflow-hidden rounded-xl border border-white/10 cursor-pointer bg-[#111]"
                onClick={() => openLightbox(photo)}
              >
                <img
                  src={photo.thumb}
                  alt={`${photo.profileName} 範例`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 animate-in"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-5">
                  <div className="absolute top-4 right-4 bg-black/60 p-2.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-center transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[#FFE100] font-mono font-bold text-xs tracking-widest uppercase mb-2 drop-shadow-md">
                      {photo.profileName}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="text-white text-xs flex items-center gap-2 drop-shadow-md font-medium">
                        <FilledCameraIcon className="w-3.5 h-3.5 text-zinc-400" />
                        {photo.exif?.camera || 'Nikon Camera'}
                      </div>
                      <div className="text-zinc-300 text-[10px] flex items-center gap-2 drop-shadow-md">
                        <FilledLensIcon className="w-3.5 h-3.5 text-zinc-400" />
                        <span className="truncate pr-2">{photo.exif?.lens || 'Nikkor Lens'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
