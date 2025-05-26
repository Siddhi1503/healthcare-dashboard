// import React from 'react';

// const activityData = [
//   { day: 'Mon', value: 40 },
//   { day: 'Tue', value: 55 },
//   { day: 'Wed', value: 30 },
//   { day: 'Thurs', value: 65 },
//   { day: 'Fri', value: 80 },
//   { day: 'Sat', value: 45 },
//   { day: 'Sun', value: 50 }
// ];

// const ActivityFeed = () => {
//   return (
//     <div style={{
//       background: '#fff',
//       borderRadius: '20px',
//       padding: '20px',
//       boxShadow: '0 0 12px rgba(0,0,0,0.05)'
//     }}>
//       <h3 style={{ marginBottom: '16px' }}>Activity</h3>
//       <p style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>
//         3 appointments on this week
//       </p>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '120px' }}>
//         {activityData.map((item, idx) => (
//           <div key={idx} style={{ textAlign: 'center', width: '12%' }}>
//             <div style={{
//               height: `${item.value}px`,
//               background: '#5d5fef',
//               width: '100%',
//               borderRadius: '8px 8px 0 0'
//             }}></div>
//             <p style={{ fontSize: '12px', marginTop: '6px', color: '#555' }}>{item.day}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActivityFeed;


import React from 'react';

const activityData = [
  { day: 'Mon', value: 40 },
  { day: 'Tue', value: 55 },
  { day: 'Wed', value: 30 },
  { day: 'Thurs', value: 65 },
  { day: 'Fri', value: 80 },
  { day: 'Sat', value: 45 },
  { day: 'Sun', value: 50 }
];

const ActivityFeed = () => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0 0 12px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ marginBottom: '16px' }}>Activity</h3>
      <p style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>
        3 appointments this week
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '120px'
      }}>
        {activityData.map((item, idx) => (
          <div key={idx} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '12%'
          }}>
            <div style={{
              height: `${item.value}px`,
              width: '2px',
              backgroundColor: '#5d5fef',
              borderRadius: '1px'
            }} />
            <p style={{ fontSize: '12px', marginTop: '6px', color: '#555' }}>
              {item.day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
