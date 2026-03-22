'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import MarkdownToolbar from './MarkdownToolbar';
import EditorMeta from './EditorMeta';
import EditorPreview from './EditorPreview';
import EditorStatusBar from './EditorStatusBar';
import { defaultMarkdown } from '@/data/admin-data';

interface MarkdownEditorProps {
  initialContent?: string;
  initialTitle?: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  initialContent = defaultMarkdown,
  initialTitle = '',
}) => {
  const [content, setContent] = useState(initialContent);
  const [title, setTitle] = useState(initialTitle);
  const [tags, setTags] = useState<string[]>(['前端开发', 'AI/ML', '2026']);
  const [excerpt, setExcerpt] = useState('深入分析 2026 年前端领域最值得关注的技术趋势...');
  const [mode, setMode] = useState<'split' | 'edit' | 'preview'>('split');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = content.length;
  const lineCount = content.split('\n').length;
  const readTime = Math.max(1, Math.ceil(wordCount / 400));

  const insertText = useCallback((before: string, after = '') => {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = content.substring(start, end);
    const newContent =
      content.substring(0, start) + before + selected + after + content.substring(end);
    setContent(newContent);
    setTimeout(() => {
      ta.focus();
      ta.selectionStart = start + before.length;
      ta.selectionEnd = start + before.length + selected.length;
    }, 0);
  }, [content]);

  return (
    <div className="editor-page">
      {/* Top Toolbar */}
      <div className="editor-toolbar">
        <div className="editor-toolbar-left">
          <Link href="/posts" className="back-btn">
            ← 返回文章列表
          </Link>
          <div className="draft-indicator">
            <span className="dot" />
            草稿已自动保存
          </div>
        </div>
        <div className="editor-toolbar-right">
          <button className="btn-outline">👁 预览</button>
          <button className="btn-outline">📋 复制 Markdown</button>
          <button className="btn-primary">🚀 发布文章</button>
        </div>
      </div>

      {/* Meta Fields */}
      <EditorMeta
        title={title}
        onTitleChange={setTitle}
        tags={tags}
        onTagsChange={setTags}
        excerpt={excerpt}
        onExcerptChange={setExcerpt}
      />

      {/* Editor Body */}
      <div className="editor-body">
        <MarkdownToolbar onInsert={insertText} />

        <div className="editor-split">
          {/* Edit Pane */}
          {mode !== 'preview' && (
            <div className="editor-pane">
              <div className="editor-pane-header">
                <span>Markdown</span>
                <div className="pane-tab">
                  <button
                    className={`tab-btn ${mode === 'split' ? 'active' : ''}`}
                    onClick={() => setMode('split')}
                  >
                    分屏
                  </button>
                  <button
                    className={`tab-btn ${mode === 'edit' ? 'active' : ''}`}
                    onClick={() => setMode('edit')}
                  >
                    仅编辑
                  </button>
                </div>
              </div>
              <textarea
                ref={textareaRef}
                className="editor-textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="开始用 Markdown 写作..."
                spellCheck={false}
              />
            </div>
          )}

          {/* Divider */}
          {mode === 'split' && <div className="editor-divider" />}

          {/* Preview Pane */}
          {mode !== 'edit' && (
            <div className="editor-pane">
              <div className="editor-pane-header">
                <span>预览</span>
                <div className="pane-tab">
                  <button
                    className={`tab-btn ${mode === 'split' ? 'active' : ''}`}
                    onClick={() => setMode('split')}
                  >
                    分屏
                  </button>
                  <button
                    className={`tab-btn ${mode === 'preview' ? 'active' : ''}`}
                    onClick={() => setMode('preview')}
                  >
                    仅预览
                  </button>
                </div>
              </div>
              <EditorPreview markdown={content} />
            </div>
          )}
        </div>

        <EditorStatusBar lineCount={lineCount} wordCount={wordCount} readTime={readTime} />
      </div>
    </div>
  );
};

export default MarkdownEditor;
