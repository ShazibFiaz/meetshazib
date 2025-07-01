// src/components/Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../globals.css';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={`app-root bg-custom ${pathname === "/" ? "home-page" : ""}`}>
      {!(pathname === "/admin") && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;