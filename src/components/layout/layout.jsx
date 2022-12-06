import React from 'react';
import Header from '../header/header';
import Menu from '../menu/menu';
import {Outlet} from 'react-router-dom';
import styles from './layout.module.css'


function Layout() {
  return (
    <div className="Layout">
      <Header className={styles.header}/>
      <Outlet className={styles.layout}/>
      <Menu className={styles.menu}/>
      <button className={styles.menuButton}></button>
    </div>
  );
}

export default Layout;