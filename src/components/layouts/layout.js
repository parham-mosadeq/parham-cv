import React from 'react';

const Layout = ({ children }) => {
  return (
    <main className='min-w-screen px-5 m-0 mx-auto md:max-w-5xl  md:p-0 bg-mainDark'>
      {children}
    </main>
  );
};

export default Layout;
