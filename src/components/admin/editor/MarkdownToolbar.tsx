'use client';

import React from 'react';

interface MarkdownToolbarProps {
  onInsert: (before: string, after?: string) => void;
}

const MarkdownToolbar: React.FC<MarkdownToolbarProps> = ({ onInsert }) => {
  const tools = [
    { label: 'B', title: '加粗', before: '**', after: '**', style: { fontWeight: 700 } },
    { label: 'I', title: '斜体', before: '*', after: '*', style: { fontStyle: 'italic' } },
    { label: 'S', title: '删除线', before: '~~', after: '~~', style: { textDecoration: 'line-through' } },
    { type: 'divider' as const },
    { label: 'H1', title: '一级标题', before: '# ' },
    { label: 'H2', title: '二级标题', before: '## ' },
    { label: 'H3', title: '三级标题', before: '### ' },
    { type: 'divider' as const },
    { label: '•', title: '无序列表', before: '- ' },
    { label: '1.', title: '有序列表', before: '1. ' },
    { label: '"', title: '引用', before: '> ' },
    { type: 'divider' as const },
    { label: '<>', title: '行内代码', before: '`', after: '`' },
    { label: '{ }', title: '代码块', before: '```\n', after: '\n```' },
    { label: '🔗', title: '链接', before: '[', after: '](url)' },
    { label: '🖼', title: '图片', before: '![alt](', after: ')' },
    { label: '⊞', title: '表格', before: '| 列1 | 列2 | 列3 |\n|------|------|------|\n| 内容 | 内容 | 内容 |' },
    { label: '—', title: '分割线', before: '\n---\n' },
  ];

  return (
    <div className="md-toolbar">
      {tools.map((tool, index) => {
        if ('type' in tool && tool.type === 'divider') {
          return <div key={index} className="divider" />;
        }
        return (
          <button
            key={index}
            className="md-btn"
            title={tool.title}
            onClick={() => onInsert(tool.before, tool.after)}
            style={tool.style}
          >
            {tool.label}
          </button>
        );
      })}
    </div>
  );
};

export default MarkdownToolbar;
