import React from 'react';
import styles from './register.module.css';
import { Header, Modal} from '../../components';

const Register = () => {
  return (
    <>
        <Header />
        <div className={styles.container}>
            {/* <Modal />  */}
            <div className={styles.top}>
                <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
                    <img src="resources/images/backIcon.png" alt="seatedman.png" width={20} height={20} />
                    <p className={styles.reg}>Register</p>
                </div>
                <img src="resources/images/seatedman.png" alt="seatedman.png" width={200} height={200} />
                <div style={{position: 'relative', padding: '0 40px'}}>
                    <img src="resources/images/pinkstar.png" alt="pinkstar.png" width={13} height={15} className={styles.pinkstar} />   
                    <div className={styles.beacon}>
                        <p className={styles.beaconText}>Be part of this movement!</p>
                        <img src="resources/images/movement.png" alt="movement.png" width={101} height={30} />
                    </div>
                    <p className={styles.title}>CREATE YOUR ACCOUNT</p>
                </div>
            </div>
            <div className={styles.topDesktop} />
            <div className={styles.bottom}>
                <div>
                    <div className={styles.heroDesktop}>
                        <p className={styles.register}>Register</p>
                        <div>
                            <div className={styles.beacon}>
                                <p className={styles.beaconText}>Be part of this movement!</p>
                                <img src="resources/images/movement.png" alt="movement.png" width={101} height={30} />
                            </div>
                            <p className={styles.title}>CREATE YOUR ACCOUNT</p>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <p className={styles.label}>Team's Name</p>
                            <input type="text" placeholder='Enter the name of your group' className={styles.input} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <p className={styles.label}>Phone Number</p>
                            <input type="text" placeholder='Enter your phone number' className={styles.input} />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <p className={styles.label}>Email</p>
                            <input type="text" placeholder='Enter your email address' className={styles.input} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <p className={styles.label}>Project's Topic</p>
                            <input type="text" placeholder='What is your group project topic' className={styles.input} />
                        </div>
                    </div>
                    <div className={styles.selectGroup}>
                        {/* <img src="resources/images/pinkstar.png" alt="pinkstar.png" width={13} height={15} className={styles.pinkstar2} />    */}
                        <div className={styles.inputWrapper}>
                            <p className={styles.label}>Category</p>
                            <select className={styles.select}>
                                <option value="">Select your category</option>
                                <option value="1">Web Development</option>
                            </select>
                        </div>
                        <div className={styles.inputWrapper}>
                            <p className={styles.label}>Group Size</p>
                            <select className={styles.select}>
                                <option value="">Select</option>
                                <option value="1">Web Development</option>
                            </select>
                        </div>
                    </div>
                    <p className={styles.review}>Please review your registration details before submitting</p>
                    <div style={{display: 'flex', gap: '1px'}}>
                        <img src="resources/images/checkbox.png" alt="checkbox.png" width={14} height={14} />   
                        <p className={styles.policy}>I agreed with the event terms and conditions
                        and privacy policy</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className={styles.submit}>Submit</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register