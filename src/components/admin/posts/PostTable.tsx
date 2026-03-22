'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { Post } from '@/types/admin';
import PostStatusBadge from './PostStatusBadge';

interface PostTableProps {
  posts: Post[];
}

const PostTable: React.FC<PostTableProps> = ({ posts }) => {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const toggleAll = () => {
    if (selectedIds.size === posts.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(posts.map((p) => p.id)));
    }
  };

  const toggleOne = (id: number) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  return (
    <div className="article-list-card">
      <table className="post-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <input
                type="checkbox"
                checked={selectedIds.size === posts.length && posts.length > 0}
                onChange={toggleAll}
                style={{ accentColor: '#667eea' }}
              />
            </th>
            <th>文章</th>
            <th>分类</th>
            <th>状态</th>
            <th>阅读</th>
            <th>发布日期</th>
            <th style={{ width: 160 }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.has(post.id)}
                  onChange={() => toggleOne(post.id)}
                  style={{ accentColor: '#667eea' }}
                />
              </td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    className={`post-thumb-sm ${post.cover}`}
                    style={{
                      width: 48,
                      height: 32,
                      borderRadius: 4,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: 240,
                      fontWeight: 500,
                    }}
                  >
                    {post.title}
                  </span>
                </div>
              </td>
              <td>
                <span style={{ color: '#999', fontSize: 13 }}>{post.category}</span>
              </td>
              <td>
                <PostStatusBadge status={post.status} />
              </td>
              <td style={{ color: '#999' }}>
                {post.views > 0 ? post.views.toLocaleString() : '-'}
              </td>
              <td style={{ color: '#999', fontSize: 13 }}>{post.date}</td>
              <td>
                <Link href={`/posts/${post.id}`} className="action-link">
                  编辑
                </Link>
                <span className="action-link">预览</span>
                <span className="action-link danger">删除</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-bottom">
        <span>
          已选择 <span className="selected-info">{selectedIds.size}</span> 项
        </span>
        <div style={{ display: 'flex', gap: 4 }}>
          <button className="btn-outline" style={{ width: 32, height: 32, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontSize: 13 }}>
            ‹
          </button>
          <button className="btn-outline" style={{ width: 32, height: 32, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontSize: 13, background: '#667eea', color: '#fff', border: '1px solid #667eea' }}>
            1
          </button>
          <button className="btn-outline" style={{ width: 32, height: 32, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontSize: 13 }}>
            2
          </button>
          <button className="btn-outline" style={{ width: 32, height: 32, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontSize: 13 }}>
            3
          </button>
          <button className="btn-outline" style={{ width: 32, height: 32, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontSize: 13 }}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTable;
