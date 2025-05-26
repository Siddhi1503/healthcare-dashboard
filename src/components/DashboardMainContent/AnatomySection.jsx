import React from 'react';

const AnatomySection = () => {
  return (
    <div style={{ 
      background: '#fff', 
      borderRadius: '20px', 
      padding: '24px', 
      marginBottom: '10px',
      boxShadow: '0 0 12px rgba(0,0,0,0.05)' ,
      height: '228px'
    }}>
      <h3 style={{ marginBottom: '16px' }}>Human Body Overview</h3>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src="https://news.flinders.edu.au/wp-content/uploads/2013/10/human.jpg" 
          alt="Human Anatomy" 
          style={{ maxWidth: '50%', height: '192px' }} 
        />
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#5d5fef',
          color: '#fff',
          padding: '6px 12px',
          borderRadius: '16px',
          fontSize: '12px'
        }}>
          ❤️ Healthy Heart
        </div>
        <div style={{
          position: 'absolute',
          top: '72%',
          left: '35%',
          background: '#00d4ff',
          color: '#fff',
          padding: '6px 12px',
          borderRadius: '16px',
          fontSize: '12px'
        }}>
          🦿 Healthy Leg
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
