import React, { useState } from 'react';
import { useMutation } from 'react-query';
import styles from './contact.module.css';
import { Header, Button, Modal } from '../../components';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false)
  
  const contactUs = async (body) => {
    try {
      const res = fetch('https://backend.getlinked.ai/hackathon/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })

      if(res.ok) {
        setIsSuccessful(true);
      }  
    } catch(error){
      console.log(error);
    }
  }

  const { mutateAsync: contact } = useMutation(contactUs)

  const submitHandler = e => {
    e.preventDefault();

    contact({email, first_name: firstName, phone_number: phone, message})
  }

  return(
    <>
      <div className={styles.header}>
       <Header />
      </div>
      { isSuccessful && <Modal close={() => setIsSuccessful(false)} text='contacted us' />  }
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
          <div  className={styles.back}>
            <NavLink to='/'>
              <img src="resources/images/backIcon.png" alt="backIcon.png" />
            </NavLink>
          </div>
          <div>
            <p className={styles.subTitle}>Questions or need assistance? <span>Let us know about it</span></p>
            <p className={styles.desc}>Email us below to any question related to our event</p>
          </div>
          <form className={styles.form} onSubmit={submitHandler}>
            <input type="text" placeholder="First Name" className={styles.input} value={firstName} onChange={e => setFirstName(e.target.value)} required />
            <input type="text" placeholder="Email" className={styles.input} value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="text" placeholder="Phone Number" className={styles.input} value={phone} onChange={e => setPhone(e.target.value)} required />
            <textarea rows="6" placeholder='Message' className={styles.input} value={message} onChange={e => setMessage(e.target.value)} required></textarea>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button type='submit' title='Submit' />
            </div>
          </form>
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