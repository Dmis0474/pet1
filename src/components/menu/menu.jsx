import React from "react";
import styles from "./menu.module.css";
import { useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function Menu(props) {

  return (
    <div className={styles.menu}>
      <Link to="/mainPage"><button className={`${styles.menuButton} ${styles.home}`}></button></Link>
      <button className={`${styles.menuButton} ${styles.education}`}></button>
      <Link to="/horoscope"><button className={`${styles.menuButton} ${styles.search}`}></button></Link>
      <button className={`${styles.menuButton} ${styles.blog}`}></button>
      <button className={`${styles.menuButton} ${styles.profile}`}></button>
    </div>
  );
}

export default Menu;
