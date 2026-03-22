import React from 'react';
import Link from 'next/link';
import { posts } from '@/data/admin-data';
import PostStatusBadge from '../posts/PostStatusBadge';

const RecentPosts: React.FC = () => {
  const recentList = posts.slice(0, 5);

  return (
    <div className="content-card">
      <div className="card-header">
        <h3>最近文章</h3>
        <Link href="/posts" className="card-action">
          查看全部 →
        </Link>
      </div>
      <table className="post-table">
        <thead>
          <tr>
            <th>标题</th>
            <th>分类</th>
            <th>状态</th>
            <th>阅读</th>
            <th>日期</th>
          </tr>
        </thead>
        <tbody>
          {recentList.map((post) => (
            <tr key={post.id}>
              <td className="post-title-cell">{post.title}</td>
              <td>
                <span style={{ color: '#999' }}>{post.category}</span>
              </td>
              <td>
                <PostStatusBadge status={post.status} />
              </td>
              <td>{post.views > 0 ? post.views.toLocaleString() : '-'}</td>
              <td style={{ color: '#999' }}>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentPosts;
