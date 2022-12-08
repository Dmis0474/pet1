import React from 'react';
import styles from './messageButton.module.css'


function MessageButton () {
  return (
    <div className="messageButton">
      <button className={styles.menuButton} draggable={true} ></button>
    </div>
  );
}

export default MessageButton;