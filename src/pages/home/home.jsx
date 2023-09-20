import React from "react";
import styles from './home.module.css';

// sections
import { Timeline } from './sections';  

const Home = () => {
  return (
    <div className={styles.container}>
      <Timeline />
    </div>
  )
};

export default Home;