import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="absolute inset-0 z-10">
      {children}
    </div>
  );
};

export default Layout;