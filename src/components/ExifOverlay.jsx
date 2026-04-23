import React from 'react';
import { FilledCameraIcon, FilledLensIcon } from './icons.jsx';

const ExifRow = ({ label, value }) => (
  <div className="flex justify-between items-center text-sm py-1.5">
    <span className="text-zinc-400 font-light tracking-widest">{label}</span>
    <span className="text-white font-bold">{value}</span>
  </div>
);

export default function ExifOverlay({ exif }) {
  if (!exif) return null;
  return (
    <div
      className="absolute top-0 left-0 right-0 md:bottom-0 md:left-auto md:w-[480px] md:h-full max-h-[85vh] md:max-h-none bg-[#111111]/95 backdrop-blur-2xl border-b md:border-b-0 md:border-l border-white/10 p-6 md:p-8 pt-24 md:pt-8 pb-8 rounded-b-3xl md:rounded-none overflow-y-auto animate-in duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)] md:shadow-2xl z-40 custom-scrollbar"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-xl font-bold text-white mb-6 tracking-widest flex items-center gap-3">拍攝資訊</h3>

      <div className="bg-[#1A1A1A] rounded-2xl p-5 mb-8 border border-white/5 shadow-inner">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pb-5 border-b border-white/5">
            <div className="flex items-center gap-3 min-w-[140px]">
              <FilledCameraIcon className="w-8 h-8 text-zinc-500" />
              <span className="text-white font-bold text-lg whitespace-nowrap">{exif.camera}</span>
            </div>
            <div className="flex items-center gap-3">
              <FilledLensIcon className="w-8 h-8 text-zinc-500" />
              <span className="text-white font-bold text-lg whitespace-nowrap">{exif.lens}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-1">
            <div className="flex items-center gap-3">
              <span className="text-zinc-400 text-sm tracking-widest">拍攝日期：</span>
              <span className="text-white font-medium text-sm">{exif.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-zinc-400 text-sm tracking-widest">焦距：</span>
              <span className="text-white font-medium text-sm">{exif.focalLength}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-10 gap-y-6">
        <div className="space-y-2">
          <ExifRow label="數位可變程式" value={exif.mode} />
          <ExifRow label="ISO 感光度" value={exif.iso} />
          <ExifRow label="快門速度" value={exif.shutter} />
          <ExifRow label="光圈" value={exif.aperture} />
          <ExifRow label="曝光補償" value={exif.ev} />

          <div className="pt-5 pb-2">
            <div className="text-zinc-400 text-sm mb-3 font-light tracking-widest">AF 設定</div>
            <div className="pl-5 border-l border-white/10 space-y-2">
              <ExifRow label="對焦模式" value={exif.focusMode} />
              <ExifRow label="AF 優先" value={exif.focusPriority} />
              <ExifRow label="AF 區域模式" value={exif.afArea} />
            </div>
          </div>
        </div>

        <div className="space-y-2 md:pt-6 md:border-t md:border-white/10">
          <ExifRow label="主動式 D-Lighting" value={exif.adl} />
          <ExifRow label="測光" value={exif.metering} />
          <ExifRow label="白平衡" value={exif.wb} />
          <ExifRow label="柔化肌膚" value={exif.skinSoftening} />
          <ExifRow label="人像印象平衡" value={exif.pib} />
          <ExifRow label="閃光" value={exif.flash} />
        </div>
      </div>
    </div>
  );
}
