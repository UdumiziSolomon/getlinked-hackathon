import React from 'react';
import styles from './Button.module.css';

const Button = ({  type = 'button', title = 'Register', width = '100px', height = '52px', textSize='16px'}) => {
    return (
        <button type={type} className={styles.container} style={{width, height, fontSize: textSize}}>{title}</button>
    )
}

export default Button;