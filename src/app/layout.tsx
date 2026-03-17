import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuKa | 你好呀",
  description: "Spring + Cartoon Style Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}