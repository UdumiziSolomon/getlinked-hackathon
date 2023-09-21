import React from 'react';
import styles from './Button.module.css';

const Button = ({ title = 'Register', width = '100px', height = '52px', textSize='16px'}) => {
    return (
        <div className={styles.container} style={{width, height, fontSize: textSize}}>{title}</div>
    )
}

export default Button;