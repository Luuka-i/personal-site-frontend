'use client';

import React from 'react';
import AdminLayout from '@/components/admin/layout/AdminLayout';
import MarkdownEditor from '@/components/admin/editor/MarkdownEditor';

export default function NewPostPage() {
  return (
    <AdminLayout breadcrumbs={['内容管理', '写文章']}>
      <MarkdownEditor />
    </AdminLayout>
  );
}
