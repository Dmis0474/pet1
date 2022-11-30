import React from "react";
import styles from "./header.module.css";
import { useEffect } from "react";
import axios from 'axios';


function Header(props) {

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <img src="ava-test.jpg" alt="ava" className={styles.ava} />
        <h4 className={styles.pageName}>Главная</h4>
      </div>
      <div className={styles.headerWrapper}>
      <button className={`${styles.headerButton} ${styles.headerAdd}`}></button>
      <button className={`${styles.headerButton} ${styles.headerSearch}`}></button>
      <button className={`${styles.headerButton} ${styles.headerNotification}`}></button>
      </div>
      
    </div>
  );
}

export default Header;
