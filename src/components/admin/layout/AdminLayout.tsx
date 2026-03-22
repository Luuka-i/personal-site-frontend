'use client';

import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface AdminLayoutProps {
  children: React.ReactNode;
  breadcrumbs: string[];
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
