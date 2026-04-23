import React, { useState } from 'react';
import { Check, Bell } from './icons.jsx';

// Formspree endpoint — 請替換為你自己的 ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqalllg';

export default function WaitlistForm({ profileName }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData();
    formData.append('email', email);
    formData.append('許願配方', profileName);
    formData.append('_subject', `有人許願了 ${profileName} 的原始檔！`);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-6 py-4 rounded-xl border border-green-400/20 text-sm tracking-widest font-bold animate-in duration-500 w-full justify-center">
        <Check className="w-5 h-5" /> 謝謝你的回饋！
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="輸入您的 Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-w-[240px] bg-[#111] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFE100]/50 transition-colors tracking-wide"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex items-center justify-center gap-2 bg-[#FFE100] text-black px-6 py-3 rounded-xl font-bold tracking-widest hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-[0_10px_20px_rgba(255,225,0,0.15)] hover:shadow-[0_10px_25px_rgba(255,255,255,0.25)]"
        >
          {status === 'loading' ? (
            '傳送中...'
          ) : (
            <>
              <Bell className="w-4 h-4" /> 敲碗通知
            </>
          )}
        </button>
      </form>
      {status === 'error' && (
        <div className="text-red-500 text-xs mt-2 w-full text-center">
          傳送失敗，請確認您的 ID 參數或網路連線。
        </div>
      )}
    </div>
  );
}
