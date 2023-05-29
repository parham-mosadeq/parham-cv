import Layout from '@/components/layouts/layout';
import Title from '@/components/shared/Title';
import Head from 'next/head';
import React from 'react';

const index = () => {
  const borderClasses = `border-secGray border-l border-b`;
  const cardClasses = `capitalize pt-10  py-10 px-3 max-h-36`;
  const cartTitleClasses = `text-lg text-mainWhite`;
  const cartParClasses = `font-light text-mainGray max-w-md max-h-full`;
  return (
    <Layout>
      <Head>
        <title>Resume</title>
      </Head>
      <div className='w-full rounded-md border-t  border-b border-thiGray bg-thiGray capitalize p-10'>
        <h1 className='text-mainWhite text-3xl font-bold'>resume</h1>
        <p className='text-mainGray font-light'>2+ years of Experience</p>
      </div>
      <article className='flex flex-col items-center justify-center md:flex-row'>
        <div className='py-10 '>
          <Title title='Education' />
          {/* education */}
          <div className={`h-fit `}>
            <div className={`${borderClasses} ${cardClasses} `}>
              <h3 className={cartTitleClasses}>computer science</h3>
              <p className={cartParClasses}>
                As a computer science student, there is never a dull moment! 3
                years of studying cs at zand university in shiraz
              </p>
            </div>
          </div>
          {/* education */}
          {/* education */}
          <div className={`h-fit `}>
            <div className={`${borderClasses} ${cardClasses} `}>
              <h3 className={cartTitleClasses}>copy writing</h3>
              <p className={cartParClasses}>
                7 months of self studying how to become (be better actually) at
                copy writing
              </p>
            </div>
          </div>
          {/* education */}
        </div>

        <div className=' '>
          <Title title='Experience' />
          {/* Experience */}
          <div className={`h-fit `}>
            <div className={`${borderClasses} ${cardClasses} `}>
              <h3 className={cartTitleClasses}>web administrator</h3>
              <p className={cartParClasses}>
                2+ years working as royagsht travel agency's web administrator
                located in shiraz iran
              </p>
            </div>
          </div>
          {/* Experience */}
          {/* Experience */}
          <div className={`h-fit `}>
            <div className={`${borderClasses} ${cardClasses} `}>
              <h3 className={cartTitleClasses}>front-end developer</h3>
              <p className={cartParClasses}>
                1+ year freelancing as a front-end developer (react & next-js)
              </p>
            </div>
          </div>
          {/* Experience */}
        </div>
      </article>

      <article className='py-10'>
        <Title title='Coding Skills' />
        <ul className='pl-10 py-10 text-mainWhite capitalize tracking-wider font-light list-decimal'>
          <li className='uppercase'>html/css</li>
          <li>javaScript</li>
          <li>tailwind</li>
          <li>react</li>
          <li>next js</li>
          <li>git</li>
          <li>chakra ui & material ui</li>
          <li>redux & rtk</li>
          ...
        </ul>
      </article>
    </Layout>
  );
};

export default index;