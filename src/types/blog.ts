// ===== 导航栏 =====
export interface Navbar {
  key: string;
  label: string;
  rpath: string;
}

// ===== 文章 =====
export interface BlogInfo {
  id: number;
  title: string;
  excerpt: string;
  cover: string;
  tags: string[];
  tagColors: string[];
  date: string;
  readTime: string;
  views: number;
  likes: number;
  featured?: boolean;
}