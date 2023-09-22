import React from "react";
import styles from './home.module.css';
import { Header } from "../../components";

// sections
import { Hero, Overview, FAQ, Timeline, Prizes, Partners, Terms, Footer } from './sections';  

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Overview />
      <FAQ />
      <Timeline />
      <Prizes />
      <Partners />
      <Terms />
      <Footer />
    </div>
  )
};

export default Home;