import Title from './Title';
import Layout from '../layouts/layout';
const Pricing = () => {
  const centerClasses = `flex flex-col items-center justify-center`;
  const cardClasses = `h-64 border-2 border-mainBlue rounded-lg w-full my-10 hover:shadow-md hover: hover:shadow-secGray transition duration-300`;
  const cardTitle = `py-2 capitalize text-mainGray`;
  const priceClasses = `text-3xl pb-3 font-bold text-mainGray`;
  return (
    <Layout>
      <Title title='pricing' />
      <div className='ml-7 mt-10'>
        <h3 className={cardTitle}>
          every plan is delivered by full responsive design{' '}
          <span className='border-b border-mainBlue'>
            {' '}
            (standard breakpoints)
          </span>
        </h3>
        <p className={`${cardTitle} text-sm m-0`}>contact me via email or whatsapp/telegram</p>
      </div>
      <article className='h-full py-7 md:px-7 md:grid md:gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {/* silver */}
        <div className={`${centerClasses} ${cardClasses}`}>
          {/* title */}
          <h5 className={cardTitle}>sliver</h5>
          {/* price */}
          <div className={centerClasses}>
            <h3 className={priceClasses}>90$</h3>
          </div>
          {/* info */}
          <div className={`${centerClasses} text-mainWhite capitalize`}>
            <p> only 1 page 3-5 sections</p>
            <p>15 days support</p>
            <p>25$ per new page</p>
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
          </div>
          {/* info */}
          <div className={`${centerClasses} text-mainWhite capitalize`}>
            <p>maximum 5 pages 3-5 sections</p>
            <p>30 days support</p>
            <p>25$ per new page</p>
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
          </div>
          {/* info */}
          <div className={`${centerClasses} text-mainWhite capitalize`}>
            <p> up to 10 pages 3-5+ sections</p>
            <p>45 days support</p>
            <p>20$ per new page</p>
          </div>
        </div>
        {/* Platinum */}
      </article>

    </Layout>
  );
};

export default Pricing;
