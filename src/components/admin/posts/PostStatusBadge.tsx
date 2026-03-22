import React from 'react';
import type { Post } from '@/types/admin';

interface PostStatusBadgeProps {
  status: Post['status'];
}

const statusConfig: Record<Post['status'], { label: string; className: string }> = {
  published: { label: '已发布', className: 'status-published' },
  draft: { label: '草稿', className: 'status-draft' },
  scheduled: { label: '定时发布', className: 'status-scheduled' },
};

const PostStatusBadge: React.FC<PostStatusBadgeProps> = ({ status }) => {
  const config = statusConfig[status];
  return (
    <span className={`status-badge ${config.className}`}>
      ● {config.label}
    </span>
  );
};

export default PostStatusBadge;
