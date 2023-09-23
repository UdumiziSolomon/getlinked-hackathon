import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
          <Link to='#timeline' className={styles.navBtn}>TimeLine</Link>
          <Link to='#overview' className={styles.navBtn}>Overview</Link>
          <NavLink to='#faq' className={styles.navBtn}>FAQs</NavLink>
          <NavLink to="/contact" className={styles.navBtn}>Contact</NavLink>
        </nav>
        <NavLink to="/register" className={styles.registerBtn}>Register</NavLink>
      </div>
      <div className={styles.menu} onClick={toggleMenu}>
        <img src="resources/svgs/menu.svg" alt="menu.png" width={19} height={14} />
      </div>
      { showMenu && 
        <div className={styles.dropdown}>
          <img src="resources/images/cancel.png" alt="" width={23} height={23} className={styles.cancel} onClick={toggleMenu}/>
          <div>
            <NavLink to='/'>Home</NavLink>
            <Link>Timeline</Link>
            <Link>Overview</Link>
            <NavLink>FAQs</NavLink>
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