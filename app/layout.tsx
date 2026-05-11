import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pride Auto — Автомобили из Китая под ключ",
  description:
    "Импорт автомобилей из Китая в Россию: поиск, доставка, таможня и документы. prideauto.ru",
  metadataBase: new URL("https://prideauto.ru"),
  openGraph: {
    title: "Pride Auto — Автомобили из Китая под ключ",
    description:
      "Берём на себя всё: поиск, доставку, таможню и документы. Вы просто получаете ключи.",
    url: "https://prideauto.ru",
    siteName: "Pride Auto",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0A0A0A] text-white touch-manipulation`}
      >
        <div className="geo-pattern" aria-hidden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
