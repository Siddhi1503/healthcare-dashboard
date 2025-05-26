import React from 'react';

const calendarDays = ['Mon 25', 'Tue 26', 'Wed 27', 'Thurs 28', 'Fri 29', 'Sat 30', 'Sun 31'];
const appointments = {
  'Tue 26': ['09:00'],
  'Thurs 28': ['11:00'],
  'Sat 30': ['12:00']
};

const CalendarView = () => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '20px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 0 12px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ marginBottom: '16px' }}>October 2021</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {calendarDays.map(day => (
          <div key={day} style={{ textAlign: 'center' }}>
            <p style={{ fontWeight: 'bold' }}>{day}</p>
            {[8, 9, 10, 11, 12].map(hour => {
              const time = `${hour}:00`;
              const isBooked = appointments[day]?.includes(time);
              return (
                <div
                  key={time}
                  style={{
                    background: isBooked ? '#5d5fef' : '#f0f0f0',
                    color: isBooked ? '#fff' : '#333',
                    margin: '4px 0',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                >
                  {time}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
