import React from 'react';
import {
  Lightbulb,
  Zap,
  Aperture,
  Film,
  Sliders,
  Contrast,
  User,
  ZLogo,
  Z8DetailedSvg,
  ZfDetailedSvg,
} from '../components/icons.jsx';
import SiteFooter from '../components/SiteFooter.jsx';

export default function TroubleshootPage() {
  return (
    <div className="max-w-5xl mx-auto animate-in duration-500 pb-12">
      <div className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10">
        <div className="flex items-center gap-4 mb-8 md:pr-80">
          <div className="w-10 h-10 bg-[#FFE100] rounded-lg flex items-center justify-center text-black">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-widest">實戰Tips</h2>
        </div>
        <p className="text-zinc-400 leading-relaxed mb-12 text-sm tracking-wide md:pr-80">
          專為 Nikon Z 系列打造的進階實戰指南。從 Z8 旗艦效能到 Zf 復古盲操，並完整解析「測光模式」、「曝光補償」與「人像印象平衡 (PIB)」的黃金運用邏輯，助您精準掌握光影與色彩。
        </p>

        <div className="space-y-6">
          {/* Z8 旗艦機身優化 */}
          <div className="flex flex-col md:flex-row bg-[#111111] rounded-xl overflow-hidden border border-white/5 group hover:border-white/10 transition-colors">
            <div className="md:w-1/3 relative bg-[#1A1A1A] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/5 group-hover:bg-[#1C1C1C] transition-colors">
              <Z8DetailedSvg className="w-full max-w-[200px] h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105 relative z-10" />
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-lg font-light text-white mb-6 flex items-center gap-3 tracking-widest uppercase">
                <span className="text-[#FFE100] font-bold flex items-center gap-1 normal-case">
                  <ZLogo className="w-4 h-4 shrink-0" />8
                </span>
                旗艦機身優化
              </h3>
              <ul className="space-y-6 text-sm text-zinc-400 tracking-wide">
                <li className="flex gap-4">
                  <Zap className="w-4 h-4 text-[#FFE100] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-zinc-200 font-medium">快捷鍵指派：</strong>
                    {' '}強烈建議將鏡頭旁的 <code className="bg-[#222] px-1.5 py-0.5 rounded text-zinc-300">Fn1</code> 或 <code className="bg-[#222] px-1.5 py-0.5 rounded text-zinc-300">Fn2</code> 指派為「人像印象平衡 (PIB)」。在套用配方拍攝人像時，能一鍵叫出選單即時微調膚色亮度。
                  </p>
                </li>
                <li className="flex gap-4">
                  <Zap className="w-4 h-4 text-[#FFE100] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-zinc-200 font-medium">高光偏重測光：</strong>
                    {' '}針對高反差配方，可利用 Z8 的自訂控制環快速切換至「高光偏重測光」，死守高光，把暗部交給 Z8 的優異寬容度。
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Zf 復古盲操美學 */}
          <div className="flex flex-col md:flex-row bg-[#111111] rounded-xl overflow-hidden border border-white/5 group hover:border-white/10 transition-colors">
            <div className="md:w-1/3 relative bg-[#1A1A1A] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/5 group-hover:bg-[#1C1C1C] transition-colors">
              <ZfDetailedSvg className="w-full max-w-[210px] h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105 relative z-10" />
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-lg font-light text-white mb-6 flex items-center gap-3 tracking-widest uppercase">
                <span className="text-[#FFE100] font-bold flex items-center gap-1 normal-case">
                  <ZLogo className="w-4 h-4 shrink-0" />f
                </span>
                復古盲操美學
              </h3>
              <ul className="space-y-6 text-sm text-zinc-400 tracking-wide">
                <li className="flex gap-4">
                  <Aperture className="w-4 h-4 text-[#FFE100] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-zinc-200 font-medium">專屬撥桿綁定：</strong>
                    {' '}將機頂的 B&W 撥桿直接連動到 <code className="bg-[#222] px-1.5 py-0.5 rounded text-zinc-300">PH_BlackWhite</code> 配方！街拍時只要拇指一撥，瞬間進入充滿結構張力的純粹幾何黑白世界。
                  </p>
                </li>
                <li className="flex gap-4">
                  <Aperture className="w-4 h-4 text-[#FFE100] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-zinc-200 font-medium">實體轉盤介入：</strong>
                    {' '}套用日系配方需要強制提亮 (+0.7 EV) 時，請享受轉動實體黃銅轉盤的喀答聲，將注意力放回觀景窗內的構圖。
                  </p>
                </li>
                <li className="flex gap-4">
                  <Film className="w-4 h-4 text-[#FFE100] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-zinc-200 font-medium">底片顆粒連動：</strong>
                    {' '}Zf 獨有的「底片顆粒」設定能完美賦予照片銀鹽質感，本配方庫已針對所有風格提供對應的「顆粒量」與「粗細」最佳化參數。
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* 測光與曝光補償 */}
          <div className="pt-10 mt-10 border-t border-white/10">
            <h3 className="text-lg font-light text-white mb-8 tracking-widest uppercase flex items-center gap-3">
              <Sliders className="w-5 h-5 text-[#FFE100]" />
              測光與曝光補償實戰指南
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-[#FFE100]/30 transition-colors">
                <h4 className="text-[#FFE100] font-bold tracking-wide mb-4 flex items-center gap-2">
                  <Aperture className="w-4 h-4" /> 測光模式運用
                </h4>
                <div className="space-y-5">
                  <div>
                    <div className="text-zinc-200 text-sm font-medium mb-1">矩陣測光 (Matrix Metering)</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      全能大管家，適合 80% 的日常與順光場景。因為系統會平均計算全域亮度，最需要搭配「曝光補償 (EV)」來主動介入修正明暗。
                    </p>
                  </div>
                  <div>
                    <div className="text-zinc-200 text-sm font-medium mb-1">偏重中央測光 (Center-Weighted Metering)</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      經典主體先決。著重計算畫面中央區域的亮度，忽略邊緣極端光線的干擾。非常適合主體置中的人像特寫、街頭紀實，或是搭配復古手動老鏡時使用。
                    </p>
                  </div>
                  <div>
                    <div className="text-zinc-200 text-sm font-medium mb-1">點測光 (Spot Metering)</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      光影手術刀。針對極小區域測光並與對焦點連動，完全不理會背景亮度。極度適合逆光人像、舞台攝影或微距特寫。
                    </p>
                  </div>
                  <div>
                    <div className="text-zinc-200 text-sm font-medium mb-1">高光偏重測光 (Highlight-weighted)</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      保護高光不死白。適合高反差的城市光影、夕陽剪影 (如 PH_CityLight, PH_WarmCine)。暗部細節則交給 Z 系列強大的 RAW 檔寬容度處理。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-[#FFE100]/30 transition-colors">
                <h4 className="text-[#FFE100] font-bold tracking-wide mb-4 flex items-center gap-2">
                  <Contrast className="w-4 h-4" /> 曝光補償 (EV) 秘訣
                </h4>
                <div className="space-y-5">
                  <div>
                    <div className="text-zinc-200 text-sm font-medium mb-1">白加黑減黃金法則</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      相機測光總是傾向將畫面拍成「中性灰」。拍攝大面積白雪 (如 PH_BlueSky) 或白牆時，必須手動加 EV (+0.7~+1.3) 才能恢復潔白；拍攝大面積深色場景則需要減 EV 避免畫面發灰。
                    </p>
                  </div>
                  <div>
                    <div className="text-zinc-200 text-sm font-medium mb-1">日系通透感的秘密</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      套用日系清新配方 (如 PH_SoftPortrait、PH_KamakuraCyan) 時，無論測光給出什麼數值，習慣性地往上加 +0.3 到 +0.7 EV，這是消除畫面灰濁感、獲得空氣感的最快捷徑。
                    </p>
                  </div>
                  <div>
                    <div className="text-zinc-200 text-sm font-medium mb-1">善用實體轉盤與 Fn 鍵</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Zf 用戶請直接轉動機頂黃銅 EV 轉盤享受盲操；Z8/Z9 用戶建議將鏡頭控制環或 Fn 鍵設為曝光補償，讓你的眼睛不用離開觀景窗即可控制光影。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PIB 實戰應用 */}
          <div className="pt-10 mt-10 border-t border-white/10">
            <h3 className="text-lg font-light text-white mb-8 tracking-widest uppercase flex items-center gap-3">
              <User className="w-5 h-5 text-[#FFE100]" />
              人像印象平衡 (PIB) 實戰應用
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-[#FFE100]/30 transition-colors flex flex-col h-full">
                <h4 className="text-white font-bold tracking-wide mb-2 flex items-center gap-2">🌸 日系通透白皙</h4>
                <div className="text-[#FFE100] font-mono text-xs mb-4 pb-4 border-b border-white/10">M-Y 軸: M +0.5 / 亮度: +0.5</div>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6 flex-1">
                  為亞洲人膚色注入微量的洋紅去黃，並同時提亮臉部，是創造「日系空氣感」與「白裡透紅」肌膚的最強萬用設定。
                </p>
                <div className="mt-auto">
                  <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1.5">適用配方</div>
                  <div className="text-xs text-zinc-400 font-mono">SoftPortrait, OutdoorPortrait, UrbanFilm</div>
                </div>
              </div>

              <div className="bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-[#FFE100]/30 transition-colors flex flex-col h-full">
                <h4 className="text-white font-bold tracking-wide mb-2 flex items-center gap-2">🎞️ 保留環境氛圍</h4>
                <div className="text-[#FFE100] font-mono text-xs mb-4 pb-4 border-b border-white/10">M-Y 軸: 0 / 亮度: +0.5</div>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6 flex-1">
                  在夕陽暖光或強烈的環境色中，若不想破壞光線對膚色的真實渲染，只需單純提亮臉部立體感，維持電影感氛圍。
                </p>
                <div className="mt-auto">
                  <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1.5">適用配方</div>
                  <div className="text-xs text-zinc-400 font-mono">WarmCine, KamakuraCyan</div>
                </div>
              </div>

              <div className="bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-[#FFE100]/30 transition-colors flex flex-col h-full">
                <h4 className="text-white font-bold tracking-wide mb-2 flex items-center gap-2">❄️ 冷調去黃校正</h4>
                <div className="text-[#FFE100] font-mono text-xs mb-4 pb-4 border-b border-white/10">M-Y 軸: M +0.5 / 亮度: 0</div>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6 flex-1">
                  在雪地或陰天等高色溫的冷藍色環境中，膚色容易顯得蠟黃。單純加入洋紅修正色偏，不額外提亮以免臉部死白。
                </p>
                <div className="mt-auto">
                  <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1.5">適用配方</div>
                  <div className="text-xs text-zinc-400 font-mono">BlueSky</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
