import React from 'react';

const SimpleAppointmentCard = ({ icon, title, time }) => {
  return (
    <div style={{
      background: '#f5f6ff',
      borderRadius: '12px',
      padding: '10px 14px',
      margin: '8px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '14px',
      color: '#333'
    }}>
      <span>{icon} {title}</span>
      <span style={{ color: '#666', fontWeight: 500 }}>{time}</span>
    </div>
  );
};

export default SimpleAppointmentCard;
