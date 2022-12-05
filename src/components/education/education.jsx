import React from "react";
import styles from "./education.module.css";


function Education() {

  return (
    <div className={styles.education}>
        <div className={styles.logo}></div>
        <h3 className={styles.header}>Выберите раздел для извучения</h3>
      <ul className={styles.educationItems}>
        <li className={styles.educationItem}>Соционика</li>
        <li className={styles.educationItem}>Астрология</li>
        <li className={styles.educationItem}>Психология</li>
        <li className={styles.educationItem}>Нумерология</li>
        <li className={styles.educationItem}>Виды Любви</li>
      </ul>
     
    </div>
  );
}

export default Education;
