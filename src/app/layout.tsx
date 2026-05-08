import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://connect2025.jpstripes.com";

export const metadata: Metadata = {
  title: "JP_Stripes Connect 2025 - アーカイブ公開中 | 理論と実践、そして未来",
  description: "JP_Stripes Connect 2025 のセッション映像アーカイブを YouTube プレイリストで公開中。理論と実践、そして未来 — 今さら聞けないを、今こそ聞ける。",
  keywords: ["Stripe", "決済", "フィンテック", "開発", "エンジニア", "カンファレンス", "アーカイブ", "YouTube", "JP_Stripes"],
  authors: [{ name: "JP_Stripes" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "JP_Stripes Connect 2025 - アーカイブ公開中",
    description: "JP_Stripes Connect 2025 のセッション映像アーカイブを YouTube プレイリストで公開中。理論と実践、そして未来。",
    type: "website",
    locale: "ja_JP",
    siteName: "JP_Stripes Connect 2025",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "JP_Stripes Connect 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JP_Stripes Connect 2025 - アーカイブ公開中",
    description: "JP_Stripes Connect 2025 のセッション映像アーカイブを YouTube プレイリストで公開中。理論と実践、そして未来。",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "JP_Stripes Connect 2025",
    "description": "理論と実践、そして未来。今さら聞けないを、今こそ聞ける。Stripeを使いこなす仲間と、知恵と経験を持ち寄る1日",
    "image": `${siteUrl}/og-image.png`,
    "startDate": "2025-11-23T12:30:00+09:00",
    "endDate": "2025-11-23T18:00:00+09:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "recordedIn": {
      "@type": "VideoObject",
      "name": "JP_Stripes Connect 2025 セッションアーカイブ",
      "description": "JP_Stripes Connect 2025 の全セッションアーカイブを収録した YouTube プレイリスト",
      "uploadDate": "2026-05-08",
      "url": "https://www.youtube.com/playlist?list=PLr8gucIRpGCH9HRuWLCAgIjiNyWUQBpO0",
      "embedUrl": "https://www.youtube.com/embed/videoseries?list=PLr8gucIRpGCH9HRuWLCAgIjiNyWUQBpO0",
      "thumbnailUrl": `${siteUrl}/og-image.png`
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "TECH HUB YOKOHAMA",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "みなとみらい2-2-1 横浜ランドマークタワー敷地内",
        "addressLocality": "横浜市",
        "addressRegion": "神奈川県",
        "postalCode": "220-0012",
        "addressCountry": "JP"
      },
      "url": "https://techhub-yokohama.com/"
    },
    "organizer": {
      "@type": "Organization",
      "name": "JP_Stripes",
      "url": siteUrl
    },
    "offers": {
      "@type": "Offer",
      "url": "https://jpstripes.connpass.com/event/365652/",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "inLanguage": "ja",
    "keywords": "Stripe, 決済, フィンテック, 開発, エンジニア, カンファレンス"
  };

  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
