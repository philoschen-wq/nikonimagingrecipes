# Nikon Imaging Recipes

> Nikon Z 系列靈活色彩 (Flexible Picture Control) 成像配方展示站 — by Philos

## 架構

從原本單檔 `index.html` + Babel CDN 版本，重構為標準 **Vite + React** 專案。

- **Vite 5** — 開發伺服器 / 打包
- **React 18** — UI 框架
- **React Router 6** — `/`、`/recipe/:id`、`/tips` 三條路由
- **Tailwind CSS 3** — 樣式（取代原本 CDN 版本）
- **純 JavaScript**（未採用 TypeScript，維持最精簡）

## 目錄結構

```
.
├── index.html               # Vite 入口 HTML
├── index.legacy.html        # 原始單檔版本（保留作為參照）
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── og-image.jpg
│   └── images/
│       ├── thumb/           # 縮圖 AVIF
│       └── full/            # 原圖 AVIF
└── src/
    ├── main.jsx             # 入口：掛載 BrowserRouter + App
    ├── App.jsx              # Router 設定
    ├── index.css            # Tailwind 指令 + 全域樣式
    ├── layouts/
    │   └── MainLayout.jsx   # Sidebar + Mobile Header + Lightbox Context
    ├── pages/
    │   ├── HomePage.jsx         # 首頁：配方清單 + Inspiration Gallery
    │   ├── ProfilePage.jsx      # /recipe/:id 單一配方詳細頁
    │   └── TroubleshootPage.jsx # /tips 實戰 Tips
    ├── components/
    │   ├── icons.jsx            # 所有手刻 SVG 圖示 + Z8/Zf 機身圖
    │   ├── iconMap.jsx          # 以 iconName 字串對應元件
    │   ├── Sidebar.jsx
    │   ├── MobileHeader.jsx
    │   ├── BackgroundDecor.jsx
    │   ├── ProgressiveImage.jsx
    │   ├── Lightbox.jsx
    │   ├── ExifOverlay.jsx
    │   ├── ToneCurveGraph.jsx
    │   ├── SettingValue.jsx
    │   ├── CameraTipAccordion.jsx
    │   ├── WaitlistForm.jsx
    │   └── SiteFooter.jsx
    ├── context/
    │   └── LightboxContext.js   # 全站共用 Lightbox 開啟函式
    └── data/
        └── recipes.js           # 9 個 profile 資料 + defaultExif
```

## 開始使用

需要 Node.js 18+。

```bash
# 1. 安裝依賴
npm install

# 2. 啟動開發伺服器（預設 http://localhost:5173）
npm run dev

# 3. 打包產出 dist/
npm run build

# 4. 本地預覽打包結果
npm run preview
```

## 從單檔版本搬遷的重點

| 項目 | 原版（`index.legacy.html`） | 新版 |
| --- | --- | --- |
| 執行方式 | 瀏覽器直接開啟，用 Babel Standalone 即時編譯 | Vite 打包成 ES modules |
| 樣式 | Tailwind Play CDN | 本機安裝 Tailwind + PostCSS，只產出用到的 class |
| 路由 | `window.location.hash` + 手刻狀態機 | `react-router-dom` (`/`, `/recipe/:id`, `/tips`) |
| 圖示 JSX | 直接寫在 `profiles` 陣列裡 | 以字串 `iconName` 存資料，經由 `iconMap` 查找 |
| 狀態共享 | 所有狀態在單一大元件內 | `LightboxContext` 把開啟燈箱的 API 下放給頁面 |
| 圖片路徑 | `./images/...` | `/images/...`（Vite 自動從 `public/` 上架） |

## 許願池表單

許願池提交送往 Formspree 端點 `https://formspree.io/f/maqalllg`，定義於 `src/components/WaitlistForm.jsx`。要改換端點直接改該檔 `FORMSPREE_ENDPOINT` 常數即可。

## 品牌色

`#FFE100`（Nikon Yellow），在 `tailwind.config.js` 中以 `nikon` 命名登錄成 Tailwind 主題色，也可直接用 `bg-[#FFE100]`。

## 授權

配方內容與文案 © Philos / PHOTOTRAVEL.tw。
