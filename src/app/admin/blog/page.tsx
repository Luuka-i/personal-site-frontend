'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import PostToolbar from '@/components/admin/posts/PostToolbar';
import PostTable from '@/components/admin/posts/PostTable';
import { posts } from '@/data/admin-data';
import { adminPage } from '@/api/admin';
import { BlogPageResp, BlogPageReq } from '@/types/admin';

export default function PostsPage() {
  const [blogPageResp, setPageData] = useState<any>();

    // 2. 请求接口
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogPageReq = {'pageNum':1, 'pageSize':10, 'title': '', 'category': ''};
        const data = await adminPage(blogPageReq);
        console.log("=======");
        console.log(data);
        setPageData(data);
      } catch (err) {
        console.log('请求失败', err);
      }
    };

    fetchData();
  }, []);


  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState();
  const [categoryFilter, setCategoryFilter] = useState();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchSearch =
        !search || post.title.toLowerCase().includes(search.toLowerCase());
      const matchStatus =
        statusFilter === 0 || post.status === statusFilter;
      const matchCategory =
        categoryFilter === 0 || post.category === categoryFilter;
      return matchSearch && matchStatus && matchCategory;
    });
  }, [search, statusFilter, categoryFilter]);

  return (
    <div>
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

      <PostTable blogPageResp={blogPageResp} />
    </div>
  );
}
