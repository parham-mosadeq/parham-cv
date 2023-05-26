import Title from './Title';
import { HiHeart, HiClock } from 'react-icons/hi';
import { FaCoffee, FaAward } from 'react-icons/fa';
import Layout from '../layouts/layout';
const FunFacts = () => {
  return (
    <Layout>

      <Title title='fun facts' />
      <div className='py-10 capitalize text-mainWhite grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 text-center'>
        {/* clients */}
        <div className='flex flex-col items-center rounded-lg bg-secGray justify-center max-w-md mx-auto h-full my-3 p-4 border-2 w-3/4 border-mainGray shadow-sm hover:shadow-md hover:shadow-secGray'>
          <HiHeart className='text-mainBlue text-3xl ' />
          <p className='text-lg'>happy clients</p>
          <span className='text-3xl text-secBlue'>12</span>
        </div>
        {/* clients */}
        {/* Working Hours */}
        <div className='flex flex-col items-center rounded-lg bg-secGray justify-center max-w-md mx-auto h-full my-3 p-4 border-2 w-3/4 border-mainGray shadow-sm hover:shadow-md hover:shadow-secGray'>
          <HiClock className='text-mainBlue text-3xl' />
          <p className='text-lg'>working hours</p>
          <span className='text-3xl text-secBlue'>420</span>
        </div>
        {/* Working Hours */}
        {/* awards */}
        <div className='flex flex-col items-center rounded-lg bg-secGray justify-center max-w-md mx-auto h-full my-3 p-4 border-2 w-3/4 border-mainGray shadow-sm hover:shadow-md hover:shadow-secGray'>
          <FaAward className='text-mainBlue text-3xl' />
          <p className='text-lg'>successful projects</p>
          <span className='text-3xl text-secBlue'>58</span>
        </div>
        {/* awards */}
        {/* Coffee Consumed */}
        <div className='flex flex-col items-center rounded-lg bg-secGray justify-center max-w-md mx-auto h-full my-3 p-4 border-2 w-3/4 border-mainGray shadow-sm hover:shadow-md hover:shadow-secGray'>
          <FaCoffee className='text-mainBlue text-3xl' />
          <p className='text-lg'>Coffee Consumed</p>
          <span className='text-3xl text-secBlue'>23</span>
        </div>
        {/* Coffee Consumed */}
      </div>
    </Layout>
  );
};

export default FunFacts;
