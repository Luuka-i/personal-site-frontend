'use client';

import React from 'react';
import MarkdownEditor from '@/components/admin/editor/MarkdownEditor';
import { posts } from '@/data/admin-data';

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  return (
      <MarkdownEditor
        initialTitle={post?.title || ''}
        initialContent={post?.excerpt || ''}
      />
  );
}
