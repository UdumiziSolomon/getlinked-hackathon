import React from 'react';
import styles from './Partners.module.css';

const Partners = () => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.title}>Partners and Sponsors</p>
                <p className={styles.desc}>
                    Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
                </p>
            </div>
            <div>
                <img src="resources/images/partners.png" alt="partners.png" />
            </div>
        </div>
    )
}

export default Partners;