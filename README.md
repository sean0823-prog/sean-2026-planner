# SEAN HSIEH 2026 生涯藍圖 App

個人生涯規劃應用程式，支援 PWA 離線使用與資料自動儲存。

## 🚀 快速部署到 Vercel

### 步驟一：準備 GitHub

1. 登入 [GitHub](https://github.com)
2. 點擊右上角 `+` → `New repository`
3. 命名為 `sean-2026-planner`
4. 設為 `Public` 或 `Private`
5. 點擊 `Create repository`

### 步驟二：上傳專案檔案

**方法 A：使用 GitHub 網頁介面（最簡單）**

1. 在新建的 repository 頁面，點擊 `uploading an existing file`
2. 將此資料夾內的所有檔案拖曳上傳
3. 點擊 `Commit changes`

**方法 B：使用 Git 指令**

```bash
cd sean-2026-planner
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sean-2026-planner.git
git push -u origin main
```

### 步驟三：部署到 Vercel

1. 前往 [Vercel](https://vercel.com) 並用 GitHub 帳號登入
2. 點擊 `Add New...` → `Project`
3. 找到並選擇 `sean-2026-planner`
4. 點擊 `Deploy`
5. 等待 1-2 分鐘部署完成
6. 獲得網址如：`https://sean-2026-planner.vercel.app`

## 📱 加到手機主畫面

### iPhone (Safari)
1. 用 Safari 開啟網址
2. 點擊下方「分享」圖示
3. 選擇「加入主畫面」
4. 點擊「新增」

### Android (Chrome)
1. 用 Chrome 開啟網址
2. 點擊右上角選單 (⋮)
3. 選擇「加入主畫面」
4. 點擊「新增」

## ✨ 功能特色

- 📊 **六大維度追蹤**：工作、學術、創業、理財、家庭、健康
- 🎯 **專案管理**：追蹤執行中的專案與進度
- 🧠 **技能學習**：記錄學習成長的技術與資源
- 📚 **書籍閱讀**：管理閱讀清單與筆記
- 📅 **季度時間軸**：Q1-Q4 行動規劃
- 💾 **自動儲存**：所有變更即時儲存
- 📤 **匯出/匯入**：備份與還原資料
- 📱 **PWA 支援**：可離線使用、加到主畫面

## 🔒 隱私說明

所有資料僅儲存在您的瀏覽器 localStorage 中，不會上傳至任何伺服器。

## 📁 專案結構

```
sean-2026-planner/
├── app/
│   ├── globals.css      # 全域樣式
│   ├── layout.js        # 根佈局與 PWA 設定
│   └── page.js          # 主頁面
├── components/
│   └── Planner.jsx      # 主要應用程式元件
├── public/
│   ├── manifest.json    # PWA 設定檔
│   ├── icon-192x192.png # App 圖示 (需自行新增)
│   └── icon-512x512.png # App 圖示 (需自行新增)
├── next.config.js       # Next.js 與 PWA 設定
├── package.json         # 專案依賴
└── README.md            # 說明文件
```

## 🖼️ 新增 App 圖示

請在 `public/` 資料夾中新增兩個 PNG 圖片：
- `icon-192x192.png` (192x192 像素)
- `icon-512x512.png` (512x512 像素)

推薦使用你喜歡的圖示，或使用 emoji 轉圖片工具製作。

## 🛠️ 本機開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 啟動生產伺服器
npm start
```

---

Made with ❤️ for SEAN HSIEH's 2026 Journey
