import React from "react";
import styles from "./menu.module.css";
import { useEffect } from "react";
import axios from 'axios';


function Menu(props) {

  return (
    <div className={styles.menu}>
      <button className={`${styles.menuButton} ${styles.home}`}></button>
      <button className={`${styles.menuButton} ${styles.education}`}></button>
      <button className={`${styles.menuButton} ${styles.search}`}></button>
      <button className={`${styles.menuButton} ${styles.blog}`}></button>
      <button className={`${styles.menuButton} ${styles.profile}`}></button>
    </div>
  );
}

export default Menu;
