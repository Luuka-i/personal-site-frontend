import React from 'react';
import Link from 'next/link';

const QuickActions: React.FC = () => {
  const actions = [
    { icon: '✏️', label: '写文章', href: '/posts/new' },
    { icon: '📁', label: '上传图片', href: '#' },
    { icon: '🏷️', label: '管理标签', href: '#' },
    { icon: '📊', label: '查看统计', href: '#' },
  ];

  return (
    <div className="content-card">
      <div className="card-header">
        <h3>快捷操作</h3>
      </div>
      <div className="quick-actions">
        {actions.map((action) => (
          <Link key={action.label} href={action.href} className="quick-action-btn">
            <span className="qa-icon">{action.icon}</span>
            <span className="qa-label">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
