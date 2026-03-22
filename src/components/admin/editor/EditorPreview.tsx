'use client';

import React from 'react';

interface EditorPreviewProps {
  markdown: string;
}

const EditorPreview: React.FC<EditorPreviewProps> = ({ markdown }) => {
  const renderMarkdown = (text: string): string => {
    let html = text
      // Code blocks (must be first)
      .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
      // Headings
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      // Blockquote
      .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
      // Inline styles
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/~~(.+?)~~/g, '<del>$1</del>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Horizontal rule
      .replace(/^---$/gm, '<hr/>')
      // Unordered list
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      // Ordered list
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

    // Wrap consecutive <li> in <ul>
    html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

    // Wrap remaining plain lines in <p>
    html = html
      .split('\n')
      .map((line) => {
        const trimmed = line.trim();
        if (
          trimmed === '' ||
          /^<[hupob]|^<li|^<hr|^<pre|^<ul|^<blockquote/.test(trimmed)
        ) {
          return line;
        }
        return `<p>${line}</p>`;
      })
      .join('\n');

    return html;
  };

  return (
    <div className="preview-pane">
      <div
        className="preview-content"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
      />
    </div>
  );
};

export default EditorPreview;
