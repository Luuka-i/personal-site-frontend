'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/layout/AdminLayout';
import StatsCard from '@/components/admin/dashboard/StatsCard';
import RecentPosts from '@/components/admin/dashboard/RecentPosts';
import QuickActions from '@/components/admin/dashboard/QuickActions';
import ActivityTimeline from '@/components/admin/dashboard/ActivityTimeline';
import { stats } from '@/data/admin-data';

import { Button } from 'antd';


export default function DashboardPage() {
  const router = useRouter();
  return (
    <AdminLayout breadcrumbs={['仪表盘']}>
      <div className="page-title-row">
        <div>
          <h1>仪表盘</h1>
          <div className="subtitle">欢迎回来，Lulu 👋</div>
        </div>
        <Button className="btn-primary" onClick={()=> router.push('/admin/blog/new')}>
          ✏️ 写文章
        </Button>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatsCard key={stat.label} item={stat} />
        ))}
      </div>

      <div className="content-grid">
        <RecentPosts />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <QuickActions />
          <ActivityTimeline />
        </div>
      </div>
    </AdminLayout>
  );
}
