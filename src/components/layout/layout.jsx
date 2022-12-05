import React from 'react';
import Header from '../header/header';
import Menu from '../menu/menu';
import {Outlet} from 'react-router-dom';


function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Menu />
    </div>
  );
}

export default Layout;