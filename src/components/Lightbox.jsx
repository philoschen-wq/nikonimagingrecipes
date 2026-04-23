import React from 'react';
import { Info, X } from './icons.jsx';
import ExifOverlay from './ExifOverlay.jsx';

export default function Lightbox({ data, showExif, setShowExif, onClose }) {
  if (!data) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in duration-200"
      onClick={() => {
        onClose();
        setShowExif(false);
      }}
    >
      <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowExif(!showExif);
          }}
          className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            showExif
              ? 'bg-white text-black'
              : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/80 border border-white/10'
          }`}
          title="顯示拍攝資訊"
        >
          <Info className="w-6 h-6" />
        </button>
        <button
          onClick={() => {
            onClose();
            setShowExif(false);
          }}
          className="p-2.5 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 backdrop-blur-md border border-white/10 transition-colors"
          title="關閉"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <img
        src={data.full}
        alt="Gallery Enlarged"
        className={`max-w-[95vw] max-h-[90vh] object-contain shadow-2xl rounded-sm transition-all duration-500 ${
          showExif ? 'md:max-w-[calc(95vw-480px)] md:mr-[480px]' : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      />

      {showExif && <ExifOverlay exif={data.exif} />}
    </div>
  );
}
