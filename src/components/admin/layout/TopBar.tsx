'use client';

import React from 'react';

interface TopBarProps {
  breadcrumbs: string[];
}

const TopBar: React.FC<TopBarProps> = ({ breadcrumbs }) => {
  return (
    <div className="admin-topbar">
      <div className="breadcrumb">
        {breadcrumbs.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="separator">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="current">{item}</span>
            ) : (
              <span>{item}</span>
            )}
          </span>
        ))}
      </div>
      <div className="topbar-right">
        <div className="topbar-btn">🔔<span className="dot" /></div>
        <div className="topbar-btn">🌐</div>
        <div className="topbar-btn">🌙</div>
      </div>
    </div>
  );
};

export default TopBar;
