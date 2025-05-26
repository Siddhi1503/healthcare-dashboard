// // import React from 'react';
// // import Header from './components/Header/Header';
// // import Sidebar from './components/Sidebar/Sidebar';
// // import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
// // import './styles/global.css';  // ✅ Keep your actual global styles here

// // const App = () => {
// //   return (
// //     <div className="app-layout" style={{ display: 'flex', height: '100vh' }}>
// //       <Sidebar />
// //       <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
// //         <Header />
// //         <DashboardMainContent />
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;


// import React from 'react';

// const Sidebar = () => <div style={{ width: 200, background: '#eee' }}>Sidebar</div>;
// const Header = () => <header style={{ background: '#ccc' }}>Header</header>;
// const DashboardMainContent = () => <main>Dashboard Content</main>;

// const App = () => {
//   return (
//     <div className="app-layout" style={{ display: 'flex', height: '100vh' }}>
//       <Sidebar />
//       <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//         <Header />
//         <DashboardMainContent />
//       </div>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import './styles/global.css';

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar className="sidebar" />
      <main className="main-content">
        <Header />
        <DashboardMainContent />
      </main>
    </div>
  );
};

export default App;
