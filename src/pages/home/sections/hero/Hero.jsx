import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Hero.module.css';
import Button from '../../../../components/button/Button';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.first}>
                <p>Igniting a Revolution in <strong>HR Innovation
                        <img src="resources/svgs/bentbar.svg" alt="bentbar.svg" />
                    </strong>
                </p>
            </div>
            <div className={styles.second}>
                <div className={styles.title}>
                    <p>getlinked Te
                        <strong>
                            c
                            <img src="resources/svgs/bulb.svg" alt="bulb.svg" />
                        </strong>h</p>
                    <div>
                        <p>Hackathon <span>1.0</span></p>
                        <img src="resources/svgs/link.svg" alt="link.svg" />
                    </div>
                </div>
                <p className={styles.desc}>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                <NavLink to='/register'>
                    <Button title='Register' width='172px' height='53px' />
                </NavLink>
                <div className={styles.timer}>00<span>H</span> 00<span>M</span> 00<span>S</span></div>
            </div>
            <div className={styles.third}>
                <img src="resources/svgs/heroImgDesktop.svg" alt="heroImageDesktop.svg" width={500} height={500} />
            </div>
        </div>
    )
}

export default Hero;