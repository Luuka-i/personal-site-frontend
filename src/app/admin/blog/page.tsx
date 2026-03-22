'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/admin/layout/AdminLayout';
import PostToolbar from '@/components/admin/posts/PostToolbar';
import PostTable from '@/components/admin/posts/PostTable';
import { posts } from '@/data/admin-data';

export default function PostsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchSearch =
        !search || post.title.toLowerCase().includes(search.toLowerCase());
      const matchStatus =
        statusFilter === 'all' || post.status === statusFilter;
      const matchCategory =
        categoryFilter === 'all' || post.category === categoryFilter;
      return matchSearch && matchStatus && matchCategory;
    });
  }, [search, statusFilter, categoryFilter]);

  return (
    <AdminLayout breadcrumbs={['内容管理', '文章管理']}>
      <div className="page-title-row">
        <div>
          <h1>文章管理</h1>
          <div className="subtitle">共 {filteredPosts.length} 篇文章</div>
        </div>
        <Link href="/posts/new" className="btn-primary">
          ✏️ 新建文章
        </Link>
      </div>

      <PostToolbar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        categoryFilter={categoryFilter}
        onCategoryFilterChange={setCategoryFilter}
      />

      <PostTable posts={filteredPosts} />
    </AdminLayout>
  );
}
