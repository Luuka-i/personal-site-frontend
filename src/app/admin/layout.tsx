import type { Metadata } from 'next';
import '@/styles/admin/globals.css';

export const metadata: Metadata = {
  title: "Luka's Admin"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-container">
      {children}
    </div>
  );
}
