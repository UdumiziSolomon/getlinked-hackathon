import React from 'react';
import styles from './Partners.module.css';

const Partners = () => {
    return (
        <div className={styles.container}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <p className={styles.title}>Partners and Sponsors</p>
                <p className={styles.desc}>
                    Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
                </p>
            </div>
            <div className={styles.imgWrapper}>
                <img src="resources/images/partners.png" alt="partners.png" />
                <img src="resources/images/partnersDesktop.png" alt="partners.png" width={632} height={282.01} />
            </div>
        </div>
    )
}

export default Partners;