import React from 'react';
import './Layout.styles.css';

const Layout = ({ children }) => {
  return (
    <>
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
