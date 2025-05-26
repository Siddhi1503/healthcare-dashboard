import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const upcomingData = {
  Thursday: [
    { time: '11:00 AM', title: 'Health checkup complete', icon: '💉' },
    { time: '14:00 PM', title: 'Ophthalmologist', icon: '👁️' }
  ],
  Saturday: [
    { time: '12:00 AM', title: 'Cardiologist', icon: '❤️' },
    { time: '16:00 PM', title: 'Neurologist', icon: '🧠' }
  ]
};

const UpcomingSchedule = () => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '20px',
      padding: '20px',
      marginBottom: '10px',
      boxShadow: '0 0 12px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ marginBottom: '16px' }}>The Upcoming Schedule</h3>
      {Object.entries(upcomingData).map(([day, appointments]) => (
        <div key={day} style={{ marginBottom: '16px' }}>
          <h4 style={{ fontSize: '14px', color: '#888' }}>On {day}</h4>
          {appointments.map((appointment, idx) => (
            <SimpleAppointmentCard key={idx} {...appointment} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
