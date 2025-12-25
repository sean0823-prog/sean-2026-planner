import './globals.css';

export const metadata = {
  title: 'SEAN HSIEH 2026 生涯藍圖',
  description: '2026 年度個人成長與職涯規劃應用程式',
  manifest: '/manifest.json',
  themeColor: '#1a1a2e',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: '2026規劃',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>{children}</body>
    </html>
  );
}
