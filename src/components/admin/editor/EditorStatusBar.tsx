'use client';

import React from 'react';

interface EditorStatusBarProps {
  lineCount: number;
  wordCount: number;
  readTime: number;
}

const EditorStatusBar: React.FC<EditorStatusBarProps> = ({
  lineCount,
  wordCount,
  readTime,
}) => {
  return (
    <div className="editor-statusbar">
      <div className="statusbar-left">
        <span>Markdown</span>
        <span>UTF-8</span>
      </div>
      <div className="statusbar-right">
        <span>{lineCount} 行</span>
        <span>{wordCount} 字</span>
        <span>约 {readTime} 分钟阅读</span>
      </div>
    </div>
  );
};

export default EditorStatusBar;
