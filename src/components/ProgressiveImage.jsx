import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle } from './icons.jsx';

export default function ProgressiveImage({ src, alt, className, wrapperClass }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth === 0) setHasError(true);
      setIsLoaded(true);
    }
  }, [src]);

  const finalWrapperClass = wrapperClass || 'absolute inset-0';

  return (
    <div className={`${finalWrapperClass} overflow-hidden bg-[#1A1A1A]`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-[#222]" />
      )}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] p-4 z-50 text-center">
          <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
          <span className="text-red-500 text-xs font-bold mb-1">圖片載入失敗</span>
          <span className="text-zinc-500 text-[9px] break-all">{src}</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setHasError(true);
        }}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded && !hasError ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105'
        } ${className || ''}`}
      />
    </div>
  );
}
