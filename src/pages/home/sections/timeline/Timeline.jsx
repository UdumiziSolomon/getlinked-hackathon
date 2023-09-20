import React from "react";
import styles from "./Timeline.module.css";

const Timeline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topLayer}>
        <h1 className={styles.topLayerTopText}> Timeline </h1>
        <h2 className={styles.topLayerSubText}>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </h2>
      </div>
    </div>
  );
};

export default Timeline;
