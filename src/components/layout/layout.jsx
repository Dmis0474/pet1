import React from "react";
import Header from "../header/header";
import Menu from "../menu/menu";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import LoginForm from "../loginForm/loginForm";
import MessageButton from "../messageButton/messageButton";


function Layout() {
  return (
    <div className="Layout">
      <Header className={styles.header} />
      <Outlet className={styles.layout} />
      <Menu className={styles.menu} />

      <MessageButton />
      {/* <LoginForm /> */}
    </div>
  );
}

export default Layout;
