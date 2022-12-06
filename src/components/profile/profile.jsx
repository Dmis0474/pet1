import React from "react";
import styles from "./profile.module.css";

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.avaWrapper}>
      <img alt="ava" src="ava-test.jpg" className={styles.ava} />
      <button className={styles.avaEdit}></button>
      </div>
      
      <h2 className={styles.name}>Марина-марина</h2>
      <ul className={styles.profileItems}>
        <li className={`${styles.profileItem} ${styles.friends}`}>Мои друзья</li>
        <li className={`${styles.profileItem} ${styles.allPosts}`}>Мои посты</li>
        <li className={`${styles.profileItem} ${styles.savePosts}`}>Сохраненные посты</li>
        <li className={`${styles.profileItem} ${styles.editProfile}`}>Изменить профиль</li>
        <li className={`${styles.profileItem} ${styles.editApp}`}>Настройки приложения</li>
        <li className={`${styles.profileItem} ${styles.horoscope}`}>Гороском на сегодня</li>
        <li className={`${styles.profileItem} ${styles.calendar}`}>Календарь на сегодня</li>
        <li className={`${styles.profileItem} ${styles.else}`}>Что-то еще на сегодня</li>
      </ul>
    </div>
  );
}

export default Profile;
