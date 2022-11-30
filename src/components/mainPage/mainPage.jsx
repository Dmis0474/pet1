import React from "react";
import styles from "./mainPage.module.css";
import { useEffect } from "react";
import axios from "axios";
import Form from "./Form/form";

function MainPage(props) {
  return (
    <div className={styles.mainPage}>
      <Form />
    </div>
  );
}

export default MainPage;
