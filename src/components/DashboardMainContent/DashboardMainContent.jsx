import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      {/* Left - Anatomy and Cards */}
      <div style={{ flex: 1 }}>
        <AnatomySection />
        <HealthStatusCards />
        <ActivityFeed />
      </div>

      {/* Right - Calendar and Schedule */}
      <div style={{ flex: 1 }}>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
