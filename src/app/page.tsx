import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';

export default function Home() {
  return (
    <div className="relative z-10 h-screen w-screen flex flex-col items-center justify-center p-4">

      <div className="box-group-left">
        <div className="box box1">
          内容超多超多超多超多超多超多超多超多超多超多超多超多超多超多超多
        </div>
        <div className="box box2">
          内容超多超多超多超多超多超多超多超多超多超多超多
        </div>
      </div>

      <div className="box-group-right">
        <div className="box box3">
          内容超多超多超多超多超多超多超多超多超多超多超多超多超多超多超多
        </div>
        <div className="box box4">
          内容超多超多超多超多超多超多超多超多超多超多超多
        </div>
      </div>

    </div>
  );
}