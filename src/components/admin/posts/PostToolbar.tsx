'use client';

import React from 'react';
import { Select } from 'antd';
import { categories } from '@/data/admin-data';

interface PostToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
  categoryFilter: string;
  onCategoryFilterChange: (value: string) => void;
}

const PostToolbar: React.FC<PostToolbarProps> = ({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  categoryFilter,
  onCategoryFilterChange,
}) => {
  return (
    <div className="list-toolbar">
      <div className="toolbar-left">
        <div className="toolbar-search">
          <span>🔍</span>
          <input
            placeholder="搜索文章标题..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <Select
          value={statusFilter}
          onChange={onStatusFilterChange}
          style={{ width: 130 }}
          options={[
            { value: 'all', label: '全部状态' },
            { value: 'published', label: '已发布' },
            { value: 'draft', label: '草稿' },
            { value: 'scheduled', label: '定时发布' },
          ]}
        />
        <Select
          value={categoryFilter}
          onChange={onCategoryFilterChange}
          style={{ width: 130 }}
          options={[
            { value: 'all', label: '全部分类' },
            ...categories.map((c) => ({ value: c.key, label: c.label })),
          ]}
        />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn-secondary">🗑️ 批量删除</button>
        <button className="btn-secondary">📤 导出</button>
      </div>
    </div>
  );
};

export default PostToolbar;
