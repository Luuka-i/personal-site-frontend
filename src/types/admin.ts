// 面包屑
export interface Breadcrumb {
    name: string;
    path: string;
}

// admin分页列表请求
export interface BlogPageReq {
  pageNum: number;
  pageSize: number;
  title: string;
  category: string;
}

// admin 分页列表数据
export interface BlogPageData {
  id: number;
  title: string;
  coverUrl: string;
  category: string;
  status: number;
  views: number;
  isFeatured: number;
  isIndex: number;
  createTime: Date;
}

// admin分页列表返回值
export interface BlogPageResp {
  total: number;
  pages: number;
  list: BlogPageData[];
}


// ===== 文章 =====
export interface Post {
  id: number;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  tags: string[];
  status: number;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  featured?: boolean;
}

// ===== 分类 =====
export interface Category {
  key: string;
  label: string;
  count: number;
}

// ===== 评论 =====
export interface Comment {
  id: number;
  postId: number;
  postTitle: string;
  author: string;
  content: string;
  time: string;
  status: 'approved' | 'pending' | 'spam';
}

// ===== 活动 =====
export interface Activity {
  text: string;
  time: string;
  color: 'green' | 'blue' | 'orange' | 'purple';
}

// ===== 统计 =====
export interface StatItem {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  bgColor: string;
}

// ===== 侧边栏菜单 =====
export interface MenuItem {
  key: string;
  icon: string;
  label: string;
  badge?: string;
  path: string;
}

export interface MenuGroup {
  title: string;
  items: MenuItem[];
}

// ===== 编辑器 =====
export interface EditorMode {
  mode: 'split' | 'edit' | 'preview';
}
