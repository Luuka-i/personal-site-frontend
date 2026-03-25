'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PostStatusBadge from './PostStatusBadge';
import { BlogPageResp, BlogPageData } from '@/types/admin';


interface BologTableProps {
  blogPageResp: BlogPageResp;
}

const PostTable: React.FC<BologTableProps> = ({ blogPageResp }) => {
  console.log("--------");
  console.log(blogPageResp);
  const [blogPageData, setBlogPageData] = useState<BlogPageData[]>([]);

  useEffect(() => {
    setBlogPageData(blogPageResp?.list ?? []);
  }, [blogPageResp]);
  

  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const toggleAll = () => {
    if (selectedIds.size === blogPageData.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(blogPageData.map((p) => p.id)));
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
                checked={selectedIds.size === blogPageData.length && blogPageData.length > 0}
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
          {blogPageData.map((post) => (
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
                    className={`post-thumb-sm ${post.coverUrl}`}
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
              <td style={{ color: '#999', fontSize: 13 }}>123</td>
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
