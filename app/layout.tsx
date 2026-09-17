import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BarPro — выездной бар в Москве",
  description: "Выездной бар и барный кейтеринг для мероприятий в Москве и области.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
