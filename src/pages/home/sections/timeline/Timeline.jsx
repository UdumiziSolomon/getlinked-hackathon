import React from "react";
import styles from "./Timeline.module.css";
import { data } from './data';

const Timeline = () => {
  return (
    <div className={styles.container} id="timeline">
      <p className={styles.subtitle}>Timeline</p>
      <p className={styles.subDesc}>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      {
        data.map((item, index) => (
          <div key={index}>
              <div className={styles.first}>
                <div />
                <span>{index + 1}</span>
              </div>
              <div className={styles.second}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.desc}>{item.desc}</p>
              </div>
              <div className={styles.third}>
                <p className={styles.desc}>November 18, 2023</p>
              </div>
          </div>
        ))
      }
    </div>
  );
};

export default Timeline;
