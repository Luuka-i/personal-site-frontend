'use client';

import React from 'react';
import { Breadcrumb } from '@/types/admin';
import Sidebar from '@/components/admin/layout/Sidebar';
import TopBar from '@/components/admin/layout/TopBar';

interface AdminLayoutProps {
  children: React.ReactNode;
  breadcrumbs: Breadcrumb[];
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, breadcrumbs }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>

      <Sidebar />

      <div className="admin-main">
        <TopBar breadcrumbs={breadcrumbs} />
        
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
