import type { Metadata } from "next";
import React, { ReactNode } from 'react';
import '@/styles/blog/globals.css';
import LayoutNavbar from '@/components/blog/LayoutNavbar';

export const metadata: Metadata = {
  title: "Luka's Blog"
};

export default function BlogLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="app-container">

      <header className="site-header">
        <LayoutNavbar />
      </header>

      <main>
        {children}
      </main>

      <footer className="site-footer">
        <div className="footer-bottom">
          © 2026 Lulu's Blog. Built with Next.js , TypeSprict & Ant Design. ☀️
        </div>
      </footer>
    </div>
  );
};
