'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { Book, MessageCircle, User, Image as ImageIcon, Briefcase, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <main className="main-container">
      
      <div className="top-square"></div>

      {/* 卡通头像（替换为你的头像，放public文件夹） */}
      <div className="avatar-wrapper">
        <Image 
          src="/avatar.png" 
          alt="Luka" 
          width={100} 
          height={100} 
          className="avatar"
        />
      </div>

      {/* 春日渐变用户名 */}
      <h1 className="username">Luka</h1>
      
      {/* 春日卡通副标题 */}
      <p className="subtitle">世界是你们的，也是我们的，但是归根结底是你们的。《毛主席语录》 </p>

      {/* 春日卡通导航栏（复刻原布局） */}
      <div className="nav-grid">
        <div className="nav-item">
          <Book size={18} strokeWidth={1.5} />
          <span style={{ fontSize: '12px' }}>Blog</span>
        </div>
        <div className="nav-item">
          <MessageCircle size={18} strokeWidth={1.5} />
          <span style={{ fontSize: '12px' }}>Thoughts</span>
        </div>
        <div className="nav-item">
          <User size={18} strokeWidth={1.5} />
          <span style={{ fontSize: '12px' }}>About</span>
        </div>
        <div className="nav-item">
          <ImageIcon size={18} strokeWidth={1.5} />
          <span style={{ fontSize: '12px' }}>Gallery</span>
        </div>
        <div className="nav-item">
          <Briefcase size={18} strokeWidth={1.5} />
          <span style={{ fontSize: '12px' }}>Projects</span>
        </div>
        <div className="nav-item">
          <Lightbulb size={18} strokeWidth={1.5} />
          <span style={{ fontSize: '12px' }}>Thinking</span>
        </div>
      </div>

    </main>
  );
}