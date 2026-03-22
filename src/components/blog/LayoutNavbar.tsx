'use client';
import { useRouter } from 'next/navigation';
import { navbars } from '@/data/blog-data';

export default function LayoutNavbar() {
  const router = useRouter();

  return (
    <div className="header-inner">
      <div className="logo" onClick={() => router.push('/blog')}>
        Luka's Blog
      </div>
      <ul className="nav-links">
        {navbars.map((item) => (
          <a
            key={item.key}
            onClick={() => {
              router.push(item.rpath);
            }}
          >
            {item.label}
          </a>
        ))}
      </ul>
      <div className="header-actions">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input placeholder="搜索文章..." />
        </div>
      </div>
    </div>
  );
}