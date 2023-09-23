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
      <div>
        <NavLink to="/" className={styles.brandName}>get<span>Linked</span></NavLink>
      </div>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <a href='#timeline' className={styles.navBtn}>TimeLine</a>
          <a href='#overview' className={styles.navBtn}>Overview</a>
          <a href='#faq' className={styles.navBtn}>FAQs</a>
          <NavLink to="/contact" className={navData => navData.isActive ? styles.active : styles.navBtn}>Contact</NavLink>
        </nav>
        <NavLink to="/register" className={ navData => navData.isActive ? styles.registerActive : styles.registerBtn}>Register</NavLink>
      </div>
      <div className={styles.menu} onClick={toggleMenu}>
        <img src="resources/svgs/menu.svg" alt="menu.png" width={19} height={14} />
      </div>
      { showMenu && 
        <div className={styles.dropdown}>
          <img src="resources/images/cancel.png" alt="" width={23} height={23} className={styles.cancel} onClick={toggleMenu}/>
          <div>
            <a href='#timeline' onClick={() => setShowMenu(false)}>Timeline</a>
            <a href='#overview' onClick={() => setShowMenu(false)}>Overview</a>
            <a href='#faq' onClick={() => setShowMenu(false)}>FAQs</a>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/register'>
              <Button />
            </NavLink>
          </div>
        </div>
      }
    </div>
  )
}

export default Header