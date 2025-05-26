import React from 'react';
import styles from './Header.module.css';
import { FaSearch, FaUserCircle, FaPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Dashboard</h2>
      <div className={styles.right}>
        <div className={styles.searchBar}>
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>
        <FaUserCircle className={styles.userIcon} />
        <FaPlus className={styles.addButton} />
      </div>
    </div>
  );
};

export default Header;
