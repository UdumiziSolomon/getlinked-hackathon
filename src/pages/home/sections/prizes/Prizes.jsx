import React from 'react';
import styles from './Prizes.module.css';

const Prizes = () => {
    return (
        <section className={styles.container}>
            <div className={styles.first}>
                <p className={styles.title}>Prizes and <span>Rewards</span></p>
                <p className={styles.desc}>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>
            <div className={styles.second}>
                <img src="resources/images/trophy.png" alt="trophy.png" />
            </div>
            <div className={styles.third}>
                <img src="resources/images/prizes.png" alt="prizes.png" />
            </div>
        </section>
    )
}

export default Prizes;