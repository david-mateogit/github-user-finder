import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar title="Github Finder" icon="fab fa-github" />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
