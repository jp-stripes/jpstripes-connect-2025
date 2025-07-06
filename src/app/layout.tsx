import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JP_Stripes Connect 2025 - 理論と実践、そして未来",
  description: "JP_Stripes Connect 2025 - 理論と実践、そして未来。今さら聞けないを、今こそ聞ける。",
  keywords: ["Stripe", "決済", "フィンテック", "開発", "エンジニア", "カンファレンス"],
  authors: [{ name: "JP_Stripes" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "JP_Stripes Connect 2025 - 理論と実践、そして未来",
    description: "JP_Stripes Connect 2025 - 理論と実践、そして未来。今さら聞けないを、今こそ聞ける。",
    type: "website",
    locale: "ja_JP",
    siteName: "JP_Stripes Connect 2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "JP_Stripes Connect 2025 - 理論と実践、そして未来",
    description: "JP_Stripes Connect 2025 - 理論と実践、そして未来。今さら聞けないを、今こそ聞ける。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
