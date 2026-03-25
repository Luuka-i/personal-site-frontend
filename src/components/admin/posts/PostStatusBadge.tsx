import React from 'react';
import { BlogPageData } from '@/types/admin';

interface PostStatusBadgeProps {
  status: BlogPageData['status'];
}

const statusConfig: Record<BlogPageData['status'], { label: string; className: string }> = {
  2: { label: '已发布', className: 'status-published' },
  0: { label: '草稿', className: 'status-draft' },
  1: { label: '定未布', className: 'status-scheduled' },
};

const PostStatusBadge: React.FC<PostStatusBadgeProps> = ({ status }) => {
  status = status?status:0;
  console.log("status", status);
  const config = statusConfig[status];
  console.log("config", config);
  return (
    <span className={`status-badge ${config.className}`}>
      ● {config.label}
    </span>
  );
};

export default PostStatusBadge;
