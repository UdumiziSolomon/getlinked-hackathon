import React, { useState } from 'react';
import styles from './contact.module.css';
import { Header, Button } from '../../components';

const Contact = () => {
  // const [] = useState();

  return(
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.first}>
          <p className={styles.title}>Get in Touch</p> 
          <p className={styles.desc}>Contact <span>Information</span></p>
          <p className={styles.desc}> 
            <span>27,Alara Street</span>
            <span>Yaba 100012</span>
            <span>Lagos State</span>
          </p>
          <p className={styles.desc}>Call Us : 07067981819</p>
          <p className={styles.desc}>we are open from Monday-Friday <span>08:00am - 05:00pm</span></p>
          <div className={styles.shareDesktop}>
            <p className={styles.desc}>Share on</p>
            <img src="resources/images/socialIcons.png" alt="socialIcons.png" />
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.back}>
            <img src="resources/images/backIcon.png" alt="backIcon.png" />
          </div>
          <div>
            <p className={styles.subTitle}>Questions or need assistance? <span>Let us know about it</span></p>
            <p className={styles.desc}>Email us below to any question related to our event</p>
          </div>
          <div className={styles.form}>
            <input type="text" placeholder="Team's Name" className={styles.input} />
            <input type="text" placeholder="Topic" className={styles.input} />
            <input type="text" placeholder="Email" className={styles.input} />
            <textarea rows="6" placeholder='Message' className={styles.input}></textarea>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button title='submit' />
            </div>
          </div>
          <div className={styles.share}>
            <p className={styles.desc}>Share on</p>
            <img src="resources/images/socialIcons.png" alt="socialIcons.png" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;