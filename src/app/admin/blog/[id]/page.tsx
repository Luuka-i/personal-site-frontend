'use client';

import React from 'react';
import AdminLayout from '@/components/admin/layout/AdminLayout';
import MarkdownEditor from '@/components/admin/editor/MarkdownEditor';
import { posts } from '@/data/admin-data';

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  return (
    <AdminLayout breadcrumbs={['内容管理', '编辑文章']}>
      <MarkdownEditor
        initialTitle={post?.title || ''}
        initialContent={post?.excerpt || ''}
      />
    </AdminLayout>
  );
}
