'use client';

import React from 'react';
import { categories } from '@/data/admin-data';

interface EditorMetaProps {
  title: string;
  onTitleChange: (value: string) => void;
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  excerpt: string;
  onExcerptChange: (value: string) => void;
}

const EditorMeta: React.FC<EditorMetaProps> = ({
  title,
  onTitleChange,
  tags,
  onTagsChange,
  excerpt,
  onExcerptChange,
}) => {
  const removeTag = (tag: string) => {
    onTagsChange(tags.filter((t) => t !== tag));
  };

  const addTag = (value: string) => {
    const trimmed = value.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onTagsChange([...tags, trimmed]);
    }
  };

  return (
    <div className="editor-meta">
      <input
        className="editor-title-input"
        placeholder="输入文章标题..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <div className="editor-meta-row">
        {/* 分类 */}
        <div className="meta-field">
          <label>分类</label>
          <select>
            {categories.map((cat) => (
              <option key={cat.key} value={cat.key}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* 标签 */}
        <div className="meta-field">
          <label>标签</label>
          <div className="tag-input-area">
            {tags.map((tag) => (
              <span className="tag-chip" key={tag}>
                {tag}
                <span className="remove-tag" onClick={() => removeTag(tag)}>
                  ×
                </span>
              </span>
            ))}
            <input
              type="text"
              placeholder="回车添加..."
              style={{
                border: 'none',
                outline: 'none',
                fontSize: 13,
                width: 80,
                fontFamily: 'var(--font-sans)',
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addTag((e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = '';
                }
              }}
            />
          </div>
        </div>

        {/* 封面 */}
        <div className="meta-field">
          <label>封面</label>
          <button className="btn-outline" style={{ fontSize: 13, padding: '5px 12px' }}>
            📷 上传封面
          </button>
        </div>

        {/* 摘要 */}
        <div className="meta-field">
          <label>摘要</label>
          <input
            type="text"
            placeholder="输入文章摘要..."
            style={{ width: 240 }}
            value={excerpt}
            onChange={(e) => onExcerptChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorMeta;
