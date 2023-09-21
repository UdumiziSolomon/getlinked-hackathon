import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.brandName}>get<span>Linked</span></NavLink>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <NavLink to='#' activeClassName={styles.active} className={styles.navBtn}>TimeLine</NavLink>
          <NavLink to='#' activeClassName={styles.active} className={styles.navBtn}>Overview</NavLink>
          <NavLink to='#' activeClassName={styles.active} className={styles.navBtn}>FAQs</NavLink>
          <NavLink to="/contact" className={styles.navBtn}>Contact</NavLink>
        </nav>
        <NavLink to="/register" activeClassName={styles.active} className={styles.registerBtn}>Register</NavLink>
      </div>
      <div className={styles.menu}>
        <img src="resources/svgs/menu.svg" alt="menu.png" width={19} height={14} />
      </div>
    </div>
  )
}

export default Header