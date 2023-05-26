import React from 'react';
import Layout from './layout';

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <Layout>
      <footer className='flex items-center justify-center text-mainWhite '>
        <h2>
          All right's reserved &copy;
          <span className=''>2021 - {currentYear} | </span>
          <span className='text-mainBlue tracking-wider font-bold'>
            Parham Mosadeqzadeh
          </span>
        </h2>
      </footer>
    </Layout>
  );
};

export default Footer;
