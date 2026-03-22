import React from 'react';
import { activities } from '@/data/admin-data';

const ActivityTimeline: React.FC = () => {
  return (
    <div className="content-card" style={{ flex: 1 }}>
      <div className="card-header">
        <h3>最近动态</h3>
      </div>
      <div className="timeline-list">
        {activities.map((activity, index) => (
          <div className="timeline-item" key={index}>
            <div className={`timeline-dot ${activity.color}`} />
            <div>
              <div
                className="timeline-text"
                dangerouslySetInnerHTML={{ __html: activity.text }}
              />
              <div className="timeline-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
