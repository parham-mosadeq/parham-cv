import { FaPen, FaDesktop, FaStore, FaLandmark } from 'react-icons/fa';
import Title from './Title';
const WhatIDo = () => {
  const cardClasses = `flex items-center`;
  const iconClasses = `text-mainBlue text-xl`;
  const pClasses = `text-mainGray tracking-wide text-justify md:mx-4`;
  return (
    <div className='px-3 md:flex md:items-center md:justify-center'>
      <article className=''>
        {/* copy write */}
        <div className='md:max-w-md my-10 '>
          <label className={cardClasses}>
            <FaPen className={iconClasses} />
            <Title title='copy writing' />
          </label>
          <p className={pClasses}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            officia mollitia harum aut dolores qui voluptate impedit excepturi
            tempora aliquid.
          </p>
        </div>
        {/* copy write */}

        {/* Web Design */}
        <div className='md:max-w-md my-10 '>
          <label className={cardClasses}>
            <FaDesktop className={iconClasses} />
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
          <label className={cardClasses}>
            <FaStore className={iconClasses} />
            <Title title='Ecommerce' />
          </label>
          <p className={pClasses}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            officia mollitia harum aut dolores qui voluptate impedit excepturi
            tempora aliquid.
          </p>
        </div>
        {/* Ecommerce */}

        {/* Marketing */}
        <div className='md:max-w-md my-10'>
          <label className={cardClasses}>
            <FaLandmark className={iconClasses} />
            <Title title='Marketing' />
          </label>
          <p className={pClasses}>
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
