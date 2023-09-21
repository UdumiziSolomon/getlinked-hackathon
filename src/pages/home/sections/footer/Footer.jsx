import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <p className={styles.brandName}>get<span>linked</span></p>
                    <p className={styles.desc}>
                        Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
                    </p>
                    <p className={styles.term}>Terms of Use <span>|</span> Privacy Policy</p> 
                </div>
                <div className={styles.links}>
                    <p className={styles.title}>Useful Links</p>
                    <NavLink>Overview</NavLink>
                    <NavLink>Timeline</NavLink>
                    <NavLink>FAQs</NavLink>
                    <NavLink>Register</NavLink>
                    <div className={styles.socials}>
                        <p className={styles.desc}>Follow Us</p>
                        <img src="resources/images/socialIcons.png" alt="social-icons.png" />
                    </div>
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>Contact Us</p>
                    <div>
                        <img src="resources/images/contact.png" alt="contact.png" width={12} height={12} />
                        <p className={styles.desc}>+234  6707653444</p>
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <img src="resources/images/loc.png" alt="location.png" width={13} height={15} />
                        <div>
                            <p className={styles.loc}>27,Alara Street</p>
                            <p className={styles.loc}>Yaba 100012</p>
                            <p className={styles.loc}>Lagos State</p>
                        </div>
                    </div>
                </div>
            </div>
           <p className={styles.desc}>All rights reserved. © getlinked Ltd.</p>
        </div>
    )
}

export default Footer;