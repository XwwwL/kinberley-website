import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yongjia Jinbolli Hardware Co., Ltd. — Custom Hardware Buckles & Clothing Accessories",
    template: "%s — Jinbolli Hardware",
  },
  description:
    "Yongjia Jinbolli Hardware Co., Ltd. specializes in hardware decorative buckles, clothing buttons, shoe buckles, bag hardware, brooches and customized metal accessories.",
  openGraph: {
    type: "website",
    siteName: "Jinbolli Hardware",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
