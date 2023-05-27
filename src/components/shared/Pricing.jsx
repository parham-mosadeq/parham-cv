import React from 'react';
import Title from './Title';
import Layout from '../layouts/layout';

const Pricing = () => {
  const centerClasses = `flex flex-col items-center justify-center`;
  const cardClasses = `h-64 border-2 border-mainBlue rounded-lg w-full my-10 hover:shadow-md hover: hover:shadow-mainShadow transition duration-300`;
  const cardTitle = `py-4 text-secGray`;
  const btnClasses = `px-10 py-2 my-4 uppercase text-mainDark tracking-wide bg-mainBlue rounded-full transition duration-500 hover:bg-secBlue hover:text-mainWhite`;
  const priceClasses = `text-3xl font-bold text-mainGray`;
  return (
    <Layout>
      <Title title='pricing' />
      <article className='h-full py-7 md:px-7 md:grid md:gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {/* silver */}
        <div className={`${centerClasses} ${cardClasses}`}>
          {/* title */}
          <h5 className={cardTitle}>sliver</h5>
          {/* price */}
          <div className={centerClasses}>
            <h3 className={priceClasses}>70$</h3>
            <button className={btnClasses}>select</button>
          </div>
          {/* info */}
          <div className={`${centerClasses} text-mainWhite capitalize`}>
            <p> only 1 page 3-5 sections</p>
            <p>30 days support</p>
            <p>20$ per new page</p>
          </div>
        </div>
        {/* silver */}

        {/* Gold */}
        <div className={`${centerClasses} ${cardClasses}`}>
          {/* title */}
          <h5 className={cardTitle}>Gold</h5>
          {/* price */}
          <div className={centerClasses}>
            <h3 className={priceClasses}>190$</h3>
            <button className={btnClasses}>select</button>
          </div>
          {/* info */}
          <div className={`${centerClasses} text-mainWhite capitalize`}>
            <p>maximum 5 pages 3-5 sections</p>
            <p>60 days support</p>
            <p>20$ per new page</p>
          </div>
        </div>
        {/* Gold */}
        {/* Platinum */}
        <div className={`${centerClasses} ${cardClasses} mb-0 `}>
          {/* title */}
          <h5 className={cardTitle}>Platinum</h5>
          {/* price */}
          <div className={centerClasses}>
            <h3 className={priceClasses}>300$</h3>
            <button className={btnClasses}>select</button>
          </div>
          {/* info */}
          <div className={`${centerClasses} text-mainWhite capitalize`}>
            <p> minimum 5 pages 3-5+ sections</p>
            <p>90 days support</p>
            <p>17$ per new page</p>
          </div>
        </div>
        {/* Platinum */}
      </article>
    </Layout>
  );
};

export default Pricing;
