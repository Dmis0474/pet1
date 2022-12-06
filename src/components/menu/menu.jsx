import React from "react";
import styles from "./menu.module.css";
import { useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function Menu(props) {

  return (
    <div className={styles.menu}>
      <Link to="/mainPage"><button className={`${styles.menuButton} ${styles.home}`}></button></Link>
      <Link to="/education"><button className={`${styles.menuButton} ${styles.education}`}></button></Link>
      <Link to="/searchPage"><button className={`${styles.menuButton} ${styles.search}`}></button></Link>
      <Link to="/blog"><button className={`${styles.menuButton} ${styles.blog}`}></button></Link>
      <Link to="/profile"><button className={`${styles.menuButton} ${styles.profile}`}></button></Link>
      
    </div>
  );
}

export default Menu;
