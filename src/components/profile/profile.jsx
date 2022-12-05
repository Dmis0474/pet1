import React from "react";
import styles from "./profile.module.css";

function Profile() {
  return (
    <div className={styles.profile}>
      <img alt="ava" src="ava-test.jpg" className={styles.ava} />
      <h2 className={styles.name}>Марина-марина</h2>
      <ul className={styles.profileItems}>
        <li className={styles.profileItem}>Мои друзья</li>
        <li className={styles.profileItem}>Мои посты</li>
        <li className={styles.profileItem}>Сохраненные посты</li>
        <li className={styles.profileItem}>Изменить профиль</li>
        <li className={styles.profileItem}>Настройки приложения</li>
        <li className={styles.profileItem}>Гороском на сегодня</li>
      </ul>
    </div>
  );
}

export default Profile;
