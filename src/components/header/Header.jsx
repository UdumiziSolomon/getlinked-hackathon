import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../button/Button';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
   
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.brandName}>get<span>Linked</span></NavLink>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <NavLink to='/#timeline' activeClassName={styles.active} className={styles.navBtn}>TimeLine</NavLink>
          <NavLink to='#' activeClassName={styles.active} className={styles.navBtn}>Overview</NavLink>
          <NavLink to='#' activeClassName={styles.active} className={styles.navBtn}>FAQs</NavLink>
          <NavLink to="/contact" className={styles.navBtn}>Contact</NavLink>
        </nav>
        <NavLink to="/register" activeClassName={styles.active} className={styles.registerBtn}>Register</NavLink>
      </div>
      <div className={styles.menu} onClick={toggleMenu}>
        <img src="resources/svgs/menu.svg" alt="menu.png" width={19} height={14} />
      </div>
      { showMenu && 
        <div className={styles.dropdown}>
          <img src="resources/images/cancel.png" alt="" width={23} height={23} className={styles.cancel} onClick={toggleMenu}/>
          <div>
            <NavLink>Timeline</NavLink>
            <NavLink>Overview</NavLink>
            <NavLink>FAQs</NavLink>
            <NavLink>Contact</NavLink>
            <Button />
          </div>
        </div>
      }
    </div>
  )
}

export default Header