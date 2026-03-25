import type { Post, Category, Activity, StatItem, MenuGroup } from '@/types/admin';

// ===== 文章数据 =====
export const posts: Post[] = [
  {
    id: 1,
    title: '2026 年前端技术趋势：从 AI 驱动开发到全栈演进',
    excerpt: '深入分析 2026 年前端领域最值得关注的技术趋势，包括 AI 辅助编程、Web Components 标准化、边缘渲染等方向的发展。',
    cover: 'grad-1',
    category: '前端开发',
    tags: ['前端开发', 'AI/ML', '2026'],
    status: 0,
    date: '2026-03-20',
    readTime: '12 min',
    views: 3842,
    likes: 286,
    featured: true,
  },
  {
    id: 2,
    title: 'Next.js 15 深度实践：Server Components 与流式渲染',
    excerpt: '通过实际项目案例，详解 Next.js 15 中 Server Components 的最佳实践和流式渲染的性能优化策略。',
    cover: 'grad-2',
    category: '前端开发',
    tags: ['Next.js', 'React'],
    status: 0,
    date: '2026-03-18',
    readTime: '15 min',
    views: 2956,
    likes: 198,
  },
  {
    id: 3,
    title: '用 TypeScript 构建类型安全的 API 网关',
    excerpt: '从零开始搭建一个类型安全的 API 网关，实现端到端的类型推导和自动文档生成。',
    cover: 'grad-3',
    category: '后端技术',
    tags: ['TypeScript', 'Node.js'],
    status: 0,
    date: '2026-03-15',
    readTime: '18 min',
    views: 0,
    likes: 0,
  },
  {
    id: 4,
    title: 'RAG 架构实战：构建企业级知识库问答系统',
    excerpt: '基于 LangChain 和向量数据库，从架构设计到生产部署，完整实现企业级 RAG 知识库系统。',
    cover: 'grad-4',
    category: 'AI/ML',
    tags: ['AI/ML', 'LangChain', '向量数据库'],
    status: 0,
    date: '2026-03-12',
    readTime: '20 min',
    views: 4521,
    likes: 367,
  },
  {
    id: 5,
    title: '从 Senior 到 Staff：技术领导力的进阶之路',
    excerpt: '分享从高级工程师到 Staff 工程师的成长经验，包括技术影响力、跨团队协作和架构决策能力的培养。',
    cover: 'grad-5',
    category: '职业成长',
    tags: ['职业成长', '技术管理'],
    status: 1,
    date: '2026-03-25',
    readTime: '10 min',
    views: 0,
    likes: 0,
  },
  {
    id: 6,
    title: 'Ant Design 6.0 新特性全解析与迁移指南',
    excerpt: '全面解读 Ant Design 6.0 的设计理念变更、新组件、性能优化以及从 5.x 的迁移策略。',
    cover: 'grad-6',
    category: '前端开发',
    tags: ['Ant Design', 'React'],
    status: 0,
    date: '2026-03-08',
    readTime: '14 min',
    views: 3245,
    likes: 234,
  },
  {
    id: 7,
    title: '开源项目维护指南：如何构建健康的社区生态',
    excerpt: '基于维护多个千星开源项目的经验，分享 Issue 管理、PR Review、社区运营的实用方法论。',
    cover: 'grad-7',
    category: '开源项目',
    tags: ['开源', '社区运营'],
    status: 0,
    date: '2026-03-05',
    readTime: '8 min',
    views: 0,
    likes: 0,
  },
  {
    id: 8,
    title: '微前端架构 2.0：Module Federation 实战与最佳实践',
    excerpt: '深入 Webpack 5 Module Federation，构建可独立部署、运行时集成的微前端架构方案。',
    cover: 'grad-8',
    category: '前端开发',
    tags: ['微前端', 'Webpack'],
    status: 0,
    date: '2026-03-02',
    readTime: '16 min',
    views: 2678,
    likes: 189,
  },
];

// ===== 分类数据 =====
export const categories: Category[] = [
  { key: 'frontend', label: '前端开发', count: 42 },
  { key: 'backend', label: '后端技术', count: 28 },
  { key: 'ai', label: 'AI/ML', count: 18 },
  { key: 'architecture', label: '架构设计', count: 15 },
  { key: 'career', label: '职业成长', count: 12 },
  { key: 'opensource', label: '开源项目', count: 8 },
  { key: 'devops', label: 'DevOps', count: 5 },
];

// ===== 统计数据 =====
export const stats: StatItem[] = [
  { label: '总文章数', value: '128', change: '↑ 12% 较上月', trend: 'up', icon: '📝', bgColor: '#f0f0ff' },
  { label: '总阅读量', value: '56.2K', change: '↑ 23% 较上月', trend: 'up', icon: '👁', bgColor: '#e6fffb' },
  { label: '总评论数', value: '1,847', change: '↑ 8% 较上月', trend: 'up', icon: '💬', bgColor: '#fff7e6' },
  { label: '总点赞数', value: '8,562', change: '↓ 3% 较上月', trend: 'down', icon: '❤️', bgColor: '#fff1f0' },
];

// ===== 活动数据 =====
export const activities: Activity[] = [
  { text: '发布了文章 <strong>2026 年前端技术趋势</strong>', time: '2 小时前', color: 'green' },
  { text: '收到 <strong>3 条</strong>新评论待审核', time: '5 小时前', color: 'blue' },
  { text: '文章 <strong>RAG 架构实战</strong> 被收录到周刊', time: '1 天前', color: 'purple' },
  { text: '修改了文章 <strong>Next.js 15 深度实践</strong>', time: '2 天前', color: 'orange' },
  { text: '新增标签 <strong>WebAssembly</strong>', time: '3 天前', color: 'blue' },
];

// ===== 侧边栏菜单 =====
export const menuGroups: MenuGroup[] = [
  {
    title: '概览',
    items: [{ key: 'dashboard', icon: '📊', label: '仪表盘', path: '/admin' }],
  },
  {
    title: '内容管理',
    items: [
      { key: 'blog', icon: '📝', label: '文章管理', badge: '8', path: '/admin/blog' },
      { key: 'blog-edit', icon: '✏️', label: '写文章', path: '/admin/blog/new' },
      { key: 'categories', icon: '📂', label: '分类管理', path: '/admin' },
      { key: 'tags', icon: '🏷️', label: '标签管理', path: '/admin' },
    ],
  },
  {
    title: '系统',
    items: [
      { key: 'user', icon: '🖼️', label: '用户管理', path: '/admin' },
      { key: 'settings', icon: '⚙️', label: '系统设置', path: '/admin' },
    ],
  },
];

// ===== 默认 Markdown 内容 =====
export const defaultMarkdown = `## 前言

2026 年，前端开发领域正在经历一场深刻的变革。AI 辅助编程工具的普及、Web 标准的持续演进、以及全栈开发模式的成熟，都在重新定义前端工程师的工作方式。

> "The best way to predict the future is to invent it." — Alan Kay

## AI 驱动的开发范式

过去一年，AI 编程助手已经从"锦上添花"变成了"不可或缺"。以下是一些关键实践：

- 使用 \`AI Pair Programming\` 模式提升编码效率
- 建立个人 Prompt 库，积累高质量指令
- 关注 AI 生成代码的测试覆盖和安全性
- 培养系统设计能力，这是 AI 难以替代的

## Server Components 的成熟

React Server Components 已经不再是实验性特性。在 Next.js 15 中，它已经成为默认的渲染模式。

\`\`\`typescript
// Server Component - 默认在服务端渲染
async function PostList() {
  const posts = await db.posts.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

## 边缘渲染与全球分发

Edge Runtime 正在成为高性能 Web 应用的标配。通过在 CDN 边缘节点运行代码，我们可以实现毫秒级的响应时间。

| 平台 | 冷启动 | 区域覆盖 | 适用场景 |
|------|--------|----------|----------|
| Vercel Edge | ~5ms | 全球 30+ | 全栈应用 |
| Cloudflare Workers | ~0ms | 全球 300+ | API / 中间件 |
| Deno Deploy | ~10ms | 全球 35+ | 轻量服务 |

---

## 总结与展望

前端开发正在变得更加**全栈化**和**智能化**。作为开发者，我们需要持续学习，但同时也要保持对本质的关注：用户体验、工程质量和问题解决能力。

1. **技术会变**，但核心能力不会过时
2. **AI 是工具**，不是替代品
3. **全栈思维**将成为基本要求

*感谢阅读，欢迎在评论区分享你的看法！*
`;
