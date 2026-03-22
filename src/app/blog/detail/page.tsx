'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BlogInfo } from '@/types/blog';
import { blogs } from '@/data/blog-data';

const DetailPage: React.FC<BlogInfo> = () => {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [post] = useState(blogs[0]);

  return (
    <div className="detail-page">
      {/* Header */}
      <div className="detail-header">
        <div className="back-link" onClick={()=> router.push('/blog')}>
          ← 返回首页
        </div>
        <h1>{post.title}</h1>
        <div className="detail-meta">
          <span className="detail-tag">{post.tags[0]}</span>
          <span>📅 {post.date}</span>
          <span>⏱ {post.readTime}</span>
          <span>👁 {post.views.toLocaleString()} 阅读</span>
          <span>❤️ {post.likes + (liked ? 1 : 0)} 喜欢</span>
        </div>
      </div>

      {/* Content */}
      <div className="detail-content">
        <div className="detail-layout">
          {/* Article */}
          <div>
            <div className="detail-cover">
              <div className={`cover-gradient ${post.cover}`} style={{ width: '100%', height: '100%' }} />
            </div>

            <div className="article-content">
              <h2>前言</h2>
              <p>
                2026 年，前端开发领域正在经历一场深刻的变革。AI
                辅助编程工具的普及、Web
                标准的持续演进、以及全栈开发模式的成熟，都在重新定义前端工程师的工作方式。本文将从多个维度分析这些趋势，并分享我的实践经验和思考。
              </p>

              <blockquote>
                <p>"The best way to predict the future is to invent it." — Alan Kay</p>
              </blockquote>

              <h2>AI 驱动的开发范式</h2>
              <p>
                过去一年，AI
                编程助手已经从"锦上添花"变成了"不可或缺"。从代码补全到架构建议，AI
                正在深度融入开发工作流。但更重要的是，我们需要思考如何在 AI
                时代保持核心竞争力。
              </p>
              <p>以下是一些关键实践：</p>
              <ul>
                <li>使用 <code>AI Pair Programming</code> 模式提升编码效率</li>
                <li>建立个人 Prompt 库，积累高质量指令</li>
                <li>关注 AI 生成代码的测试覆盖和安全性</li>
                <li>培养系统设计能力，这是 AI 难以替代的</li>
              </ul>

              <h2>Server Components 的成熟</h2>
              <p>
                React Server Components
                已经不再是实验性特性。在 Next.js 15
                中，它已经成为默认的渲染模式。这种模式带来的不仅是性能提升，更是一种全新的组件设计思维。
              </p>
              
              <p>
                Server Components
                让我们能够直接在组件中访问数据库、调用 API，而无需额外的 API
                层。这大大简化了数据获取的复杂度。
              </p>

              <h2>边缘渲染与全球分发</h2>
              <p>
                Edge Runtime
                正在成为高性能 Web
                应用的标配。通过在 CDN
                边缘节点运行代码，我们可以实现毫秒级的响应时间。Vercel Edge Functions、Cloudflare
                Workers 等平台让边缘计算变得前所未有的简单。
              </p>

              <h2>总结与展望</h2>
              <p>
                前端开发正在变得更加"全栈化"和"智能化"。作为开发者，我们需要持续学习，但同时也要保持对本质的关注：用户体验、工程质量和问题解决能力。技术会变，但这些核心能力永远不会过时。
              </p>
            </div>

            {/* Footer */}
            <div className="article-footer">
              <div className="article-tags">
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
                <span>#前端趋势</span>
                <span>#2026</span>
              </div>
              <div className="article-actions">
                <button
                  className={`action-btn ${liked ? 'liked' : ''}`}
                  onClick={() => setLiked(!liked)}
                >
                  {liked ? '❤️' : '🤍'} {post.likes + (liked ? 1 : 0)}
                </button>
                <button className="action-btn">🔗 分享</button>
                <button className="action-btn">🔖 收藏</button>
              </div>
            </div>

            {/* Author */}
            <div className="author-card">
              <div className="big-avatar">☀️</div>
              <div className="info">
                <h4>Lulu</h4>
                <p>
                  阳光大男孩，全栈开发者。热爱技术，热爱生活。专注前端工程化、AI
                  应用开发和开源社区建设。
                </p>
              </div>
            </div>

          </div>

          {/* TOC */}
          <div>
            <div className="toc">
              <h4>📑 目录</h4>
              <a className="active">前言</a>
              <a>AI 驱动的开发范式</a>
              <a>Server Components 的成熟</a>
              <a>边缘渲染与全球分发</a>
              <a>总结与展望</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
