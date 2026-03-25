'use client';
import Link from 'next/link';
import React from 'react';
import { Button, Row } from 'antd';

export default function Home() {
  return (
    <div className="contain">

      <div className="box-group-left">
        <div className="box box1">

        </div>
        <div className="box box2">
          <Link href="/blog" target="_blank">
            <Button >Blog</Button>
          </Link>

          <Link href="/admin" target="_blank">
            <Button >管理后台</Button>
          </Link>
        </div>
      </div>

      <div className="box-group-right">
        <div className="box box3">

        </div>
        <div className="box box4">

        </div>
      </div>

    </div>
  );
}