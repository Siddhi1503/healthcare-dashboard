import React from 'react';
import styles from './Sidebar.module.css';
import { FaTh, FaHistory, FaCalendarAlt, FaStethoscope, FaChartBar, FaComments, FaPhone, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Health<span>care.</span></div>
      <nav className={styles.nav}>
        <p className={styles.section}>General</p>
        <ul>
          <li className={styles.active}><FaTh /> Dashboard</li>
          <li><FaHistory /> History</li>
          <li><FaCalendarAlt /> Calendar</li>
          <li><FaStethoscope /> Appointments</li>
          <li><FaChartBar /> Statistics</li>
        </ul>
        <p className={styles.section}>Tools</p>
        <ul>
          <li><FaComments /> Chat</li>
          <li><FaPhone /> Support</li>
        </ul>
        <ul>
          <li><FaCog /> Setting</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
