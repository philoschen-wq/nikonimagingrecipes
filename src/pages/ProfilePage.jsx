import React, { useState, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { profiles } from '../data/recipes.js';
import { ProfileIcon } from '../components/iconMap.jsx';
import {
  Share2, Check, Info, Film, Sliders, Maximize2,
  FilledCameraIcon, FilledLensIcon, Lock,
} from '../components/icons.jsx';
import SettingValue from '../components/SettingValue.jsx';
import CameraTipAccordion from '../components/CameraTipAccordion.jsx';
import ToneCurveGraph from '../components/ToneCurveGraph.jsx';
import WaitlistForm from '../components/WaitlistForm.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useLightbox } from '../context/LightboxContext.js';

function buildTwoColMasonry(photos) {
  const verticalPhotos = photos.filter((p) => p.isVertical);
  const horizontalPhotos = photos.filter((p) => !p.isVertical);

  const cols = [[], []];
  const colHeights = [0, 0];

  let vIdx = 0;
  let hIdx = 0;
  const total = photos.length;

  for (let i = 0; i < total; i++) {
    const minCol = colHeights[0] <= colHeights[1] ? 0 : 1;
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

const SETTING_KEYS = ['wb', 'metering', 'adl', 'ev', 'pib'];
const SETTING_LABELS = {
  wb: '白平衡 (WB)',
  metering: '測光模式',
  adl: '主動式 D-Lighting',
  ev: '曝光補償 (EV)',
  pib: '人像印象平衡',
};
const DETAIL_LABELS = { clarity: '清晰度', mid: '中範圍銳化', sharp: '銳化', quick: '快速銳化' };

export default function ProfilePage() {
  const { id } = useParams();
  const activeProfile = profiles.find((p) => p.id === id);
  const [copied, setCopied] = useState(false);
  const { openLightbox } = useLightbox();

  const profilePhotos = useMemo(() => {
    if (!activeProfile?.gallery) return [];
    return buildTwoColMasonry([...activeProfile.gallery]);
  }, [activeProfile]);

  if (!activeProfile) return <Navigate to="/" replace />;

  const handleShare = () => {
    const url = window.location.href;
    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // no-op
    }
    document.body.removeChild(textArea);
  };

  const heroExif = activeProfile.gallery?.[0]?.exif;

  return (
    <div className="max-w-5xl mx-auto animate-in duration-500 pb-12">
      <header className="mb-12 border-b border-white/10 pb-10 relative z-10">
        <div className="flex items-center gap-4 mb-6 text-zinc-500">
          <ProfileIcon name={activeProfile.iconName} />
          <span className="text-xs tracking-[0.2em] uppercase font-mono">{activeProfile.id}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 md:gap-4 mb-4">
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-widest font-mono uppercase break-all md:break-words whitespace-normal">
            {activeProfile.name}
          </h2>
          <button
            onClick={handleShare}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2 bg-[#111111] hover:bg-[#1a1a1a] border border-white/10 rounded-lg transition-colors group shrink-0"
            title="複製專屬網址"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4 text-zinc-400 group-hover:text-[#FFE100]" />}
            <span className={`text-xs tracking-widest ${copied ? 'text-green-500' : 'text-zinc-400 group-hover:text-[#FFE100]'}`}>
              {copied ? '已複製連結' : '分享配方'}
            </span>
          </button>
        </div>
        <h3 className="text-lg text-[#FFE100] font-medium mb-6 tracking-wide">{activeProfile.style}</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {activeProfile.scenes.map((scene) => (
            <span key={scene} className="text-xs px-2.5 py-1 rounded border border-white/10 bg-[#1A1A1A] text-zinc-300 tracking-widest">
              {scene}
            </span>
          ))}
        </div>
        <p className="text-zinc-400 leading-relaxed max-w-3xl text-sm tracking-wide">{activeProfile.desc}</p>
      </header>

      {activeProfile.gallery && activeProfile.gallery.length > 0 && (
        <div className="mb-16 relative z-10 animate-in duration-700">
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-8 bg-[#050505] shadow-2xl flex items-center justify-center">
            <img
              src={activeProfile.gallery[0].full}
              alt={`${activeProfile.name} 首圖`}
              className="w-full max-h-[60vh] md:max-h-[85vh] object-contain animate-in duration-1000"
              loading="lazy"
            />
          </div>

          {heroExif && (
            <div className="bg-[#111111]/80 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-8 tracking-widest">拍攝資訊</h3>

              <div className="bg-[#1A1A1A] rounded-xl p-5 mb-8 border border-white/5">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pb-5 border-b border-white/5">
                    <div className="flex items-center gap-3 min-w-[140px]">
                      <FilledCameraIcon className="w-8 h-8 text-zinc-500" />
                      <span className="text-white font-bold text-lg whitespace-nowrap">{heroExif.camera}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FilledLensIcon className="w-8 h-8 text-zinc-500" />
                      <span className="text-white font-bold text-lg whitespace-nowrap">{heroExif.lens}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-400 text-sm tracking-widest">拍攝日期：</span>
                      <span className="text-white font-medium text-sm">{heroExif.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-400 text-sm tracking-widest">焦距：</span>
                      <span className="text-white font-medium text-sm">{heroExif.focalLength}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="space-y-1">
                  {[
                    ['數位可變程式', heroExif.mode],
                    ['ISO 感光度', heroExif.iso],
                    ['快門速度', heroExif.shutter],
                    ['光圈', heroExif.aperture],
                    ['曝光補償', heroExif.ev],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                      <span className="text-zinc-400 font-light tracking-widest">{label}</span>
                      <span className="text-white font-bold">{value}</span>
                    </div>
                  ))}

                  <div className="pt-5 pb-2">
                    <div className="text-zinc-400 text-sm mb-3 font-light tracking-widest">AF 設定</div>
                    <div className="pl-5 border-l border-white/10 space-y-1">
                      {[
                        ['對焦模式', heroExif.focusMode],
                        ['AF 優先', heroExif.focusPriority],
                        ['AF 區域模式', heroExif.afArea],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between items-center text-sm py-1.5">
                          <span className="text-zinc-400 font-light tracking-widest">{label}</span>
                          <span className="text-white font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  {[
                    ['主動式 D-Lighting', heroExif.adl],
                    ['測光', heroExif.metering],
                    ['白平衡', heroExif.wb],
                    ['柔化肌膚', heroExif.skinSoftening],
                    ['人像印象平衡', heroExif.pib],
                    ['閃光', heroExif.flash],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                      <span className="text-zinc-400 font-light tracking-widest">{label}</span>
                      <span className="text-white font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <section className="mb-12 relative z-10">
        <h4 className="text-sm font-medium text-white tracking-widest uppercase mb-6 flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-white rounded-full" /> 實戰機身設定
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {SETTING_KEYS.map((key) => (
            <div key={key} className="bg-[#0A0A0A]/90 backdrop-blur-sm p-5 rounded-xl border border-white/10">
              <div className="text-[10px] text-zinc-500 mb-2 tracking-widest uppercase">{SETTING_LABELS[key]}</div>
              <div className="text-white">
                <SettingValue value={activeProfile.camera[key]} highlight={key === 'ev'} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {activeProfile.cameraTips.z8 && <CameraTipAccordion type="z8" tipText={activeProfile.cameraTips.z8} />}
          {activeProfile.cameraTips.zf && (
            <CameraTipAccordion type="zf" tipText={activeProfile.cameraTips.zf} zfGrain={activeProfile.zfGrain} />
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative z-10">
        <section className="flex flex-col">
          <h4 className="text-sm font-medium text-white tracking-widest uppercase mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#FFE100] rounded-full" /> 色調曲線
          </h4>
          <div className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-10 flex-1 flex flex-col items-center justify-center hover:border-[#FFE100]/30 transition-colors h-full">
            <div className="w-full max-w-sm">
              <ToneCurveGraph points={activeProfile.curve} />
            </div>
            <div className="mt-8 text-[10px] text-zinc-500 tracking-widest font-mono uppercase">Luma Curve Visualization</div>
          </div>
        </section>
        <div className="flex flex-col gap-8">
          <section className="flex flex-col flex-1">
            <h4 className="text-sm font-medium text-white tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full" /> 色彩混合器
            </h4>
            <div className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-xl border border-white/10 p-6 flex-1 flex flex-col items-center justify-center min-h-[180px] hover:border-[#FFE100]/30 transition-colors group">
              <div className="w-12 h-12 bg-[#141414]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFE100]/40 mb-4 shadow-[0_0_20px_rgba(255,225,0,0.15)] group-hover:border-[#FFE100]/70 transition-colors duration-500">
                <Sliders className="w-5 h-5 text-[#FFE100]" />
              </div>
              <div className="text-sm font-bold text-white tracking-widest mb-1.5">Philos 客製參數調整</div>
              <div className="text-[10px] text-zinc-400 tracking-widest uppercase font-mono">Exclusive HSL Formula</div>
            </div>
          </section>
          <section className="flex flex-col flex-1">
            <h4 className="text-sm font-medium text-white tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#FFE100] rounded-full" /> 色彩分級
            </h4>
            <div className="rounded-xl border border-white/10 group bg-[#0A0A0A]/90 backdrop-blur-sm p-6 flex-1 flex flex-col items-center justify-center min-h-[180px] hover:border-white/30 transition-colors">
              <div className="w-12 h-12 bg-[#141414]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 mb-4 shadow-xl group-hover:border-white/40 transition-colors duration-500">
                <Film className="w-5 h-5 text-zinc-300" />
              </div>
              <div className="text-sm font-bold text-white tracking-widest mb-1.5">Philos 客製色彩渲染</div>
              <div className="text-[10px] text-zinc-400 tracking-widest uppercase font-mono">Cinematic Color Grading</div>
            </div>
          </section>
        </div>
      </div>

      <section className="mb-10 relative z-10">
        <h4 className="text-sm font-medium text-white tracking-widest uppercase mb-6 flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-white rounded-full" /> 銳化與細節{' '}
          <span className="text-zinc-600 font-mono text-[10px]">(-5.0 ~ 5.0)</span>
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(activeProfile.details).map(([key, val]) => (
            <div
              key={key}
              className="bg-[#0A0A0A]/90 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:border-[#FFE100]/30 transition-colors"
            >
              <div className="text-[10px] text-zinc-500 mb-3 tracking-widest uppercase">{DETAIL_LABELS[key]}</div>
              <div
                className={`font-mono text-xl ${
                  val.includes('-') ? 'text-zinc-400' : val === '0.00' ? 'text-zinc-600' : 'text-white'
                }`}
              >
                {val}
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeProfile.gallery && activeProfile.gallery.length > 0 && (
        <section className="mb-10 relative z-10">
          <h4 className="text-sm font-medium text-white tracking-widest uppercase mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#FFE100] rounded-full" /> Gallery
          </h4>
          <div className="columns-1 sm:columns-2 gap-4 space-y-4">
            {profilePhotos.map((item, idx) => (
              <div
                key={idx}
                className="break-inside-avoid relative group overflow-hidden rounded-xl border border-white/10 cursor-pointer bg-[#111]"
                onClick={() => openLightbox(item)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src={item.thumb}
                  alt={`${activeProfile.name} 範例`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-700 animate-in"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/60 p-2.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="relative mt-16 mb-8 overflow-hidden rounded-2xl border border-[#FFE100]/30 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-8 md:p-10 shadow-[0_0_30px_rgba(255,225,0,0.05)] group z-10 animate-in duration-1000">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFE100]/10 blur-3xl rounded-full pointer-events-none group-hover:bg-[#FFE100]/20 transition-colors duration-700" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE100]/10 border border-[#FFE100]/20 text-[#FFE100] text-[10px] font-bold tracking-widest uppercase mb-4">
              <Lock className="w-3 h-3" /> Coming Soon
            </div>
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-widest mb-3">
              喜歡 <span className="font-bold font-mono">{activeProfile.name}</span> 這個成像配方嗎？
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed tracking-wide max-w-xl mx-auto md:mx-0">
              我正在籌備完整支援靈活色彩的成像配方 <strong>.NP3 </strong>，並規劃透過購買的方式取得支持創作者。若您喜觀 Philos 建立的這些配方，輸入 Email 加入名單，讓我評估是否開放購買下載！
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-3 mt-4 md:mt-0">
            <WaitlistForm profileName={activeProfile.name} />
            <span className="text-[10px] text-zinc-500 tracking-widest">
              目前已有 <span className="text-white font-mono">128</span> 人敲碗許願
            </span>
          </div>
        </div>
      </div>

      {activeProfile.extra && (
        <div className="bg-[#111]/90 backdrop-blur-sm border border-[#FFE100]/30 p-5 rounded-xl text-sm text-zinc-300 flex items-start gap-4 relative z-10">
          <Info className="w-5 h-5 shrink-0 mt-0.5 text-[#FFE100]" />
          <p className="leading-relaxed tracking-wide">{activeProfile.extra}</p>
        </div>
      )}
      <SiteFooter />
    </div>
  );
}
