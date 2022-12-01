import React from "react";
import styles from "./mainPage.module.css";
import { useEffect } from "react";
import axios from "axios";
import Form from "./Form/form";
import Posts from "./Posts/posts";
import Horoscope from '../horoscope/horoscope'

function MainPage(props) {
  return (
    <div className={styles.mainPage}>
      <Form />
      <Posts />
    </div>
  );
}

export default MainPage;
