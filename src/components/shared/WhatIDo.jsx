import { FaPen, FaDesktop, FaStore, FaLandmark } from 'react-icons/fa';
import Title from './Title';
const WhatIDo = () => {
  return (
    <div className='px-3 md:flex md:items-center md:justify-center'>
      <article className=''>
        {/* copy write */}
        <div className='md:max-w-md my-10 '>
          <label className='flex items-center'>
            <FaPen className='text-mainBlue text-xl' />
            <Title title='copy writing' />
          </label>
          <p className='text-mainGray tracking-wide text-justify md:mx-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            officia mollitia harum aut dolores qui voluptate impedit excepturi
            tempora aliquid.
          </p>
        </div>
        {/* copy write */}

        {/* Web Design */}
        <div className='md:max-w-md my-10 '>
          <label className='flex items-center'>
            <FaDesktop className='text-mainBlue text-xl' />
            <Title title='Web Design' />
          </label>
          <p className='text-mainGray tracking-wide text-justify  md:mx-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            officia mollitia harum aut dolores qui voluptate impedit excepturi
            tempora aliquid.
          </p>
        </div>
        {/* Web Design */}
      </article>
      <article>
        {/* Ecommerce */}
        <div className='md:max-w-md my-10'>
          <label className='flex items-center'>
            <FaStore className='text-mainBlue text-xl' />
            <Title title='Ecommerce' />
          </label>
          <p className='text-mainGray tracking-wide text-justify md:mx-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            officia mollitia harum aut dolores qui voluptate impedit excepturi
            tempora aliquid.
          </p>
        </div>
        {/* Ecommerce */}

        {/* Marketing */}
        <div className='md:max-w-md my-10'>
          <label className='flex items-center'>
            <FaLandmark className='text-mainBlue text-xl' />
            <Title title='Marketing' />
          </label>
          <p className='text-mainGray tracking-wide text-justify md:mx-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            officia mollitia harum aut dolores qui voluptate impedit excepturi
            tempora aliquid.
          </p>
        </div>
        {/* Marketing */}
      </article>
    </div>
  );
};

export default WhatIDo;
