import React from 'react';
import Header from '../header/header';
import MainPage from '../mainPage/mainPage';
import Menu from '../menu/menu';
import {Outlet} from 'react-router-dom';

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Menu />
      {/* <Horoscope /> */}
    </div>
  );
}

export default Layout;