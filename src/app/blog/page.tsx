import React from 'react';
import { BlogInfo } from '@/types/blog';
import { blogs, tags } from '@/data/blog-data';

const HomePage: React.FC<BlogInfo> = () => {

  const featured = blogs.find((p) => p.featured)!;
  const gridPosts = blogs.filter((p) => !p.featured).slice(0, 6);
  const hotPosts = blogs.slice(0, 5);

  return (
    <div className="home-page">
      {/* Hero */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-avatar">☀️</div>
          <h1>代码与思考的交汇点</h1>
          <p>
            Hi，我是一名热爱技术的程序员。这里记录我在前端开发、AI
            应用和软件架构方面的探索与实践，希望对你有所启发。
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">128</div>
              <div className="label">篇文章</div>
            </div>
            <div className="hero-stat">
              <div className="num">56K</div>
              <div className="label">总阅读</div>
            </div>
            <div className="hero-stat">
              <div className="num">3.2K</div>
              <div className="label">关注者</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="main-content">
        <div className="content-layout">
          {/* Left Column */}
          <div className="content-main">
            {/* Featured */}
            <div className="section-title">
              <h2>🔥 置顶推荐</h2>
              <div className="line" />
            </div>
            <div className="featured-post">
              <div className="featured-cover">
                <div className="featured-cover-pattern" />
                <div className="featured-cover-text">
                  <div className="badge">✨ 编辑推荐</div>
                  <h2>{featured.title}</h2>
                </div>
              </div>
              <div className="featured-body">
                <div className="featured-meta">
                  <span className="tag">{featured.tags[0]}</span>
                  <span>📅 {featured.date}</span>
                  <span>⏱ {featured.readTime}</span>
                  <span>👁 {featured.views.toLocaleString()}</span>
                  <span>❤️ {featured.likes}</span>
                </div>
                <p>{featured.excerpt}</p>
              </div>
            </div>

            {/* Post Grid */}
            <div className="section-title">
              <h2>📝 最新文章</h2>
              <div className="line" />
            </div>
            <div className="post-grid">
              {gridPosts.map((post) => (
                <div className="post-card" key={post.id}>
                  <div className="post-card-cover">
                    <div className={`cover-gradient ${post.cover}`} />
                  </div>
                  <div className="post-card-body">
                    <div className="post-card-tags">
                      {post.tags.map((tag, i) => (
                        <span key={i} className={post.tagColors[i]}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3>{post.title}</h3>
                    <div className="excerpt">{post.excerpt}</div>
                    <div className="post-card-footer">
                      <div className="author">
                        <div className="avatar-sm">☀️</div>
                        <span>Lulu</span>
                      </div>
                      <span>{post.date}</span>
                      <span>👁 {post.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Profile */}
            <div className="sidebar-card profile-card">
              <div className="profile-avatar">☀️</div>
              <div className="name">Lulu</div>
              <div className="bio">
                阳光大男孩 / 全栈开发者
                <br />
                热爱技术，热爱生活 ☀️
              </div>
              <div className="profile-stats">
                <div className="stat">
                  <div className="n">128</div>
                  <div className="l">文章</div>
                </div>
                <div className="stat">
                  <div className="n">3.2K</div>
                  <div className="l">关注</div>
                </div>
                <div className="stat">
                  <div className="n">856</div>
                  <div className="l">获赞</div>
                </div>
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="sidebar-card">
              <h3>
                <span className="icon">🏷️</span> 标签云
              </h3>
              <div className="tag-cloud">
                {tags.map((tag) => (
                  <span className="tag-item" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hot Posts */}
            <div className="sidebar-card">
              <h3>
                <span className="icon">🔥</span> 热门文章
              </h3>
              {hotPosts.map((post, i) => (
                <div className="hot-post-item" key={post.id}>
                  <div className={`hot-post-rank ${i < 3 ? 'top' : ''}`}>{i + 1}</div>
                  <div>
                    <div className="hot-title">{post.title}</div>
                    <div className="hot-meta">👁 {post.views.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
