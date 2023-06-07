import Layout from '@/components/layouts/layout';
import PageTitle from '@/components/shared/PageTitle';
import Head from 'next/head';
import {
  HiOutlineDeviceMobile,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from 'react-icons/hi';

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <PageTitle title='contact' sub="let's get in touch" />

      <article
        className={`h-full w-full flex flex-col items-start justify-start pl-4 lg:grid lg:grid-cols-2`}
      >
        <div className='flex flex-col items-start justify-start pl-4'>

        <div className='flex items-center justify-between py-7 my-4'>
          <HiOutlineDeviceMobile className='text-4xl text-mainBlue mr-4' />
          <div>
            <p className='text-lg text-mainGray'><span className='block capitalize text-mainGray tracking-wider '>09212342871</span>Whatssapp/Telegram Me </p>
          </div>
        </div>


<div className='flex items-center justify-between py-7 my-4 '>
          <HiOutlineMail className='text-4xl text-mainBlue mr-4' />
          <div>
            <a
              href='mailto:pmosadeqzadeh@gmail.com'
              target='_blank'
              className='text-lg text-mainGray'
            >
              pmosadeqzadeh@gmail.com
            </a>
            <p
            className=' text-mainGray capitalize'

            >
mail me your business inquiries            </p>
          </div>
        </div>

        <div className='flex items-center justify-between py-7 my-4'>
          <HiOutlineLocationMarker className='text-4xl w-fit text-mainBlue mr-4' />
          <div>
            <p className='text-lg text-mainGray'>Shiraz,Iran</p>
            <p className="capitalize text-mainGray">not limited to locations</p>
          </div>
        </div>
        {/* current loc */}
        </div>

        <form action="#" className=' w-full border-t lg:px-3 lg:border-none border-mainBlue h-full py-10 flex flex-col items-center justify-center'>
          {/* name */}
        <div className='lg:h-full w-full lg:w-full lg:mx-auto '>
        <label className='block capitalize text-mainGray tracking-wider ' htmlFor="name">name</label>
        <input type="name" name='name' className=' w-full h-5 lg:h-6 rounded-md  bg-mainDark border-2 border-mainBlue text-mainWhite focus:outline-none focus:h-7 focus:border-secGray hover:outline-none' required/>
        </div>
          {/* name */}
          {/* email */}
        <div  className='lg:h-full w-full lg:mx-auto '> 
        <label className='block capitalize text-mainGray tracking-wider ' htmlFor="email">email</label>
        <input type="email" name='email' className=' w-full h-5 lg:h-6 rounded-md  bg-mainDark border-2 border-mainBlue text-mainWhite focus:outline-none focus:h-7 focus:border-secGray hover:outline-none' required/>
        </div>
          {/* email */}
          {/* text */}
        <div className='lg:h-full w-full lg:mx-auto '>
        <label className='block capitalize text-mainGray tracking-wider ' htmlFor="msg">message</label>
        <input type="text" name='msg' className='w-full h-5 lg:h-6 rounded-md  bg-mainDark border-2 border-mainBlue text-mainWhite focus:outline-none focus:h-7 focus:border-secGray hover:outline-none' required/>
        </div>
          {/* text */}

<button type='submit' className='lg:w-full my-6 capitalize text-mainWhite border-2 bg-secGray border-mainBlue transition-colors duration-500 hover:bg-mainBlue hover:border-secGray px-8 py-2 rounded-lg '>send</button>

      </form>
      </article>

      
    </Layout>
  );
};

export default ContactPage;
