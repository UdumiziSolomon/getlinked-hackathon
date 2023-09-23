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
                <img src="resources/images/trophy.png" alt="trophy.png" width={261.278} height={239}  />
                <img src="resources/images/trophyDesktop.png" alt="trophy.png" width={420.07} height={417} />
            </div> 
            <div className={styles.third}>
                <img src="resources/images/medalsDesktop.png" alt="prizes.png" />
            </div>
        </section>
    )
}

export default Prizes;