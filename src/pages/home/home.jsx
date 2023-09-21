import React from "react";
import styles from './home.module.css';

// sections
import { Hero, Overview, Timeline, Prizes, Partners, Footer } from './sections';  

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Overview />
      <Timeline />
      <Prizes />
      <Partners />
      <Footer />
    </div>
  )
};

export default Home;