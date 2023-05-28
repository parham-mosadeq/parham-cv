import React from 'react';
import Layout from './layout';

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  const sharedClasses = `flex items-center justify-center`;
  const linkClasses=`hover:text-mainGray transition duration-500`
  return (
    <Layout>
      <footer
        className={`${sharedClasses}  flex-col  text-mainWhite border-t  border-mainGray`}
      >
        <h2 className='my-4'>
          All right's reserved &copy;
          <span className=''>2021 - {currentYear} | </span>
          <span className='text-mainBlue tracking-wider font-bold'>
            Parham Mosadeqzadeh
          </span>
        </h2>
        {/* socials */}
        <div className={`${sharedClasses} flex-row gap-3 my-4`}>
          <a className={linkClasses} href='/' target='_blank'>
            linkedin
          </a>
          <a className={linkClasses} href='/' target='_blank'>
            github
          </a>
        </div>
      </footer>
    </Layout>
  );
};

export default Footer;
