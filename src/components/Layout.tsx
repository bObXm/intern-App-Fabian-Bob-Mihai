import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import logo from '../assets/images/logo.webp';

const Layout: React.FC = (): JSX.Element => {
  return (
    <div className="layout-container">
      <header className="header">
        <img alt="Company Logo" className="logo" src={logo} />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
