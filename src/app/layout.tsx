import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import "./globals.css";

const displayFont = Geist({
  variable: "--font-display",
  fallback: ["sans-serif"],
  preload: true,
});

const sansFont = Inter({
  variable: "--font-text",
  fallback: ["sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "WishLab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${sansFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
