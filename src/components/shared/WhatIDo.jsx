import { FaPen, FaDesktop, FaStore, FaLandmark } from 'react-icons/fa';
import Title from './Title';
import Layout from '../layouts/layout';
const WhatIDo = () => {
  const cardClasses = `md:max-w-md my-10`;
  const labelClasses = `flex items-center`;
  const iconClasses = `text-mainBlue text-xl`;
  const pClasses = `text-mainGray tracking-wide text-justify md:mx-4`;
  return (
    <Layout>
      <Title title='what i do' />
      <div className='md:flex md:items-center md:justify-between'>
        <article className='px-3'>
          {/* copy write */}
          <div className={cardClasses}>
            <label className={labelClasses}>
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
          <div className={cardClasses}>
            <label className={labelClasses}>
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
          <div className={cardClasses}>
            <label className={labelClasses}>
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
          <div className={cardClasses}>
            <label className={labelClasses}>
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
    </Layout>
  );
};

export default WhatIDo;
