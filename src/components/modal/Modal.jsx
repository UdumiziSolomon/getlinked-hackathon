import React from 'react';
import styles from './Modal.module.css';

const Modal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="resources/images/success.png" alt="success-registration.png" width={250} height={190}  />
                <p>Congratulations you have successfully Registered!</p>
                <p className={styles.prompt}>Yes, it was easy and you did it! check your mail box for next step  <img src="resources/images/winkEmoji.png" alt="wink-emoji.png" width={20} height={20}  /></p>
                <div className={styles.btn}>Back</div>
            </div>
        </div>
    )
}

export default Modal;