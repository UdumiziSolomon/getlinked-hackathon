import React from "react";
import styles from './Terms.module.css';
import Button from "../../../../components/button/Button";

const Terms = () => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.title}>Privacy Policy and <span>Terms</span></p>
                <p className={styles.desc}>Last updated on September 12, 2023</p>
                <p className={styles.desc}>
                    Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
                </p>
                <div className={styles.policy}>
                    <p className={styles.desc}>
                        At getlinked tech Hackathon 1.0, we 
                        value your privacy and are committed 
                        to protecting your personal information.
                        This Privacy Policy outlines how we collect,
                        use, disclose, and safeguard your data 
                        when you participate in our tech hackathon 
                        event. By participating in our event, you 
                        consent to the practices described in this 
                        policy.
                     </p>
                     <p className={styles.subTitle}>Licensing Policy</p>
                     <p className={styles.desc}>Here are terms of our Standard License:</p>
                     <div className={styles.licenses}>
                        <div className={styles.license}>
                            <img src="resources/images/check.png" alt="check.png" />
                            <p className={styles.desc}>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                        </div>
                        <div className={styles.license}>
                            <img src="resources/images/check.png" alt="check.png" />
                            <p className={styles.desc}>You are licensed to use the item available at any free source sites, for your project developement</p>
                        </div>
                     </div>
                     <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button title='Read More' width='96.35px' height='31.346px' textSize='12px' />
                    </div>
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <img src="resources/images/terms.png" alt="terms.png" />
            </div>
        </div>
    )
}

export default Terms;