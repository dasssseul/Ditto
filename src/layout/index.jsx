import React from 'react';
import Menu from 'component/Menu';

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default Layout;
