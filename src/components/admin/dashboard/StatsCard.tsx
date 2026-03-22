import React from 'react';
import type { StatItem } from '@/types/admin';

interface StatsCardProps {
  item: StatItem;
}

const StatsCard: React.FC<StatsCardProps> = ({ item }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-label">{item.label}</span>
        <div className="stat-icon" style={{ background: item.bgColor }}>
          {item.icon}
        </div>
      </div>
      <div className="stat-value">{item.value}</div>
      <div className={`stat-change ${item.trend}`}>{item.change}</div>
    </div>
  );
};

export default StatsCard;
