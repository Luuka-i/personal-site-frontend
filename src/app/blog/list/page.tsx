'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BlogInfo } from '@/types/blog';
import { blogs, categories, tags } from '@/data/blog-data';

const ListPage: React.FC<BlogInfo> = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('全部');

  return (
    <div className="list-page">
      <div className="page-header">
        <h1>所有文章</h1>
        <p>共 {blogs.length} 篇文章，持续更新中</p>
      </div>

      <div className="main-content">
        <div className="content-layout">
          {/* Left Column */}
          <div className="content-main">
            {/* Filters */}
            <div className="filter-bar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {blogs.map((blog) => (
              <div className="list-post-item" key={blog.id} onClick={() => router.push("/blog/detail")}>
                <div className="list-post-thumb">
                  <div className={`cover-gradient ${blog.cover}`} />
                </div>
                <div className="list-post-info">
                  <div className="post-card-tags" style={{ marginBottom: 8 }}>
                    {blog.tags.map((tag, i) => (
                      <span key={i} className={blog.tagColors[i]}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{blog.title}</h3>
                  <div className="desc">{blog.excerpt}</div>
                  <div className="meta">
                    <span>📅 {blog.date}</span>
                    <span>⏱ {blog.readTime}</span>
                    <span>👁 {blog.views.toLocaleString()}</span>
                    <span>❤️ {blog.likes}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="pagination-wrap">
              <button className="page-btn">‹</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">...</button>
              <button className="page-btn">12</button>
              <button className="page-btn">›</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-card">
              <h3>
                <span className="icon">🔍</span> 搜索
              </h3>
              <div className="search-box" style={{ width: '100%' }}>
                <span className="search-icon">🔍</span>
                <input placeholder="搜索文章..." />
              </div>
            </div>

            <div className="sidebar-card">
              <h3>
                <span className="icon">📂</span> 分类
              </h3>
              {categories.slice(1).map((cat) => (
                <div
                  key={cat}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 0',
                    borderBottom: '1px solid #f8f8f8',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: '#666',
                  }}
                >
                  <span>{cat}</span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#bbb',
                      background: '#f5f5f5',
                      padding: '2px 8px',
                      borderRadius: '10px',
                    }}
                  >
                    {Math.floor(Math.random() * 30 + 5)}
                  </span>
                </div>
              ))}
            </div>

            <div className="sidebar-card">
              <h3>
                <span className="icon">🏷️</span> 标签
              </h3>
              <div className="tag-cloud">
                {tags.map((tag) => (
                  <span className="tag-item" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
