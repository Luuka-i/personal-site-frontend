'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuGroups } from '@/data/admin-data';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (key: string): boolean => {
    if (key === 'dashboard') return pathname === '/admin';
    if (key === 'blog') return pathname === '/admin/blog';
    if (key === 'blog-edit') return pathname === '/admin/blog/new';
    return pathname.startsWith(`/${key}`);
  };

  return (
    <aside className="admin-sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">☀️</div>
        <span className="logo-text">Luka's Admin</span>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        {menuGroups.map((group) => (
          <div key={group.title}>
            <div className="menu-group-title">{group.title}</div>
            {group.items.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                className={`menu-item ${isActive(item.key) ? 'active' : ''}`}
              >
                <span className="menu-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="user-avatar">☀️</div>
          <div className="user-info">
            <div className="user-name">Lulu</div>
            <div className="user-role">管理员</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
