import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hi, I'm Luka.",
  viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen relative">

        <div className="fixed inset-0 bg-black/70 backdrop-blur-xl"></div>

        {children}
      </body>
    </html>
  );
}