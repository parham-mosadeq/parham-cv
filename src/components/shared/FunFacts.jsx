import Title from './Title';
import { HiHeart, HiClock } from 'react-icons/hi';
import { FaCoffee, FaAward } from 'react-icons/fa';
import Layout from '../layouts/layout';
const FunFacts = () => {
  const cardClasses = `flex flex-col items-center rounded-lg bg-secGray justify-center max-w-md mx-auto h-full my-3 p-4 border-2 w-3/4 border-mainGray shadow-sm hover:shadow-md hover:shadow-secGray`;
  const iconClasses = `text-mainBlue text-3xl`;
  const titleClasses=`text-lg`
  const amountClasses = `text-3xl text-secBlue`;
  return (
    <Layout>
      <Title title='fun facts' />
      <div className='py-10 capitalize text-mainWhite grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 text-center'>
        {/* clients */}
        <div className={cardClasses}>
          <HiHeart className={iconClasses} />
          <p className={titleClasses}>happy clients</p>
          <span className={amountClasses}>12</span>
        </div>
        {/* clients */}
        {/* Working Hours */}
        <div className={cardClasses}>
          <HiClock className={iconClasses} />
          <p className={titleClasses}>working hours</p>
          <span className={amountClasses}>420</span>
        </div>
        {/* Working Hours */}
        {/* awards */}
        <div className={cardClasses}>
          <FaAward className={iconClasses} />
          <p className={titleClasses}>successful projects</p>
          <span className={amountClasses}>58</span>
        </div>
        {/* awards */}
        {/* Coffee Consumed */}
        <div className={cardClasses}>
          <FaCoffee className={iconClasses} />
          <p className={titleClasses}>Coffee Consumed</p>
          <span className={amountClasses}>23</span>
        </div>
        {/* Coffee Consumed */}
      </div>
    </Layout>
  );
};

export default FunFacts;
