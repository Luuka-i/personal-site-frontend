import type { Metadata } from 'next';
import '@/styles/admin/globals.css';
import AdminLayout from '@/components/admin/layout/AdminLayout';

export const metadata: Metadata = {
  title: "Luka's Admin"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLayout breadcrumbs={[]}>
      {children}
    </AdminLayout>
  );
}
