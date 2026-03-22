import type { BlogInfo, Navbar } from '@/types/blog';

export const navbars: Navbar[] = [
  { key: 'home', label: '首页' , rpath: '/blog'},
  { key: 'list', label: '文章' , rpath: '/blog/list'},
  { key: 'about', label: '关于',rpath: '/blog'},
];

export const blogs: BlogInfo[] = [
  {
    id: 1,
    title: '2026 年前端技术趋势：从 AI 驱动开发到全栈演进',
    excerpt: '深入分析 2026 年前端领域最值得关注的技术趋势，包括 AI 辅助编程、Web Components 标准化、边缘渲染等方向的发展。',
    cover: 'grad-1',
    tags: ['前端开发', 'AI/ML'],
    tagColors: ['tag-blue', 'tag-purple'],
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
    tags: ['前端开发'],
    tagColors: ['tag-blue'],
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
    tags: ['后端技术', '架构设计'],
    tagColors: ['tag-green', 'tag-orange'],
    date: '2026-03-15',
    readTime: '18 min',
    views: 2103,
    likes: 156,
  },
  {
    id: 4,
    title: 'RAG 架构实战：构建企业级知识库问答系统',
    excerpt: '基于 LangChain 和向量数据库，从架构设计到生产部署，完整实现企业级 RAG 知识库系统。',
    cover: 'grad-4',
    tags: ['AI/ML', '架构设计'],
    tagColors: ['tag-purple', 'tag-orange'],
    date: '2026-03-12',
    readTime: '20 min',
    views: 4521,
    likes: 367,
  }
];

export const categories = ['全部', '前端开发', '后端技术', 'AI/ML', '架构设计', '职业成长', '开源项目'];

export const tags = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'AI/ML', 'Rust', 'Go',
  'Docker', 'K8s', 'PostgreSQL', 'Redis', 'GraphQL', 'WebAssembly',
  'TailwindCSS', 'Ant Design',
];
