import React from 'react';

// const statusData = [
//   { name: 'Lungs', color: '#f75d59', date: '26 Oct 2021', progress: 80 },
//   { name: 'Teeth', color: '#00c49f', date: '26 Oct 2021', progress: 45 },
//   { name: 'Bone', color: '#ff8042', date: '26 Oct 2021', progress: 60 }
// ];

const statusData = [
  { name: 'Lungs', color: '#f75d59', date: '26 Oct 2021', progress: 80, icon: '💨' },
  { name: 'Teeth', color: '#00c49f', date: '26 Oct 2021', progress: 45, icon: '🦷' },
  { name: 'Bone', color: '#ff8042', date: '26 Oct 2021', progress: 60, icon: '🦴' }
];



// const HealthStatusCards = () => {
//   return (
//     <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
//       {statusData.map((item, idx) => (
//         <div key={idx} style={{
//           flex: 1,
//           background: '#fff',
//           borderRadius: '16px',
//           padding: '16px',
//           boxShadow: '0 0 12px rgba(0,0,0,0.05)'
//         }}>
//           <h4 style={{ marginBottom: '8px' }}>{item.name}</h4>
//           <p style={{ fontSize: '12px', color: '#999' }}>Date: {item.date}</p>
//           <div style={{
//             marginTop: '8px',
//             height: '6px',
//             borderRadius: '8px',
//             background: '#eee',
//             overflow: 'hidden'
//           }}>
//             <div style={{
//               width: `${item.progress}%`,
//               background: item.color,
//               height: '100%'
//             }}></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

const HealthStatusCards = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', marginBottom: '10px' }}>
      {statusData.map((item, idx) => (
        <div key={idx} style={{
          flex: 1,
          background: '#fff',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 0 12px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
          <h4 style={{ margin: 0 }}>{item.name}</h4>
          <p style={{ fontSize: '12px', color: '#999' }}>Date: {item.date}</p>
          <div style={{
            marginTop: '8px',
            width: '100%',
            height: '6px',
            borderRadius: '8px',
            background: '#eee',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${item.progress}%`,
              background: item.color,
              height: '100%'
            }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};



export default HealthStatusCards;
