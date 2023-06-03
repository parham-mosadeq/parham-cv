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
        className={`h-full w-full`}
      >
        <div className='max-h-44 flex items-center justify-center h-full max-w-xl mx-auto px-3 py-4'>
          <HiOutlineDeviceMobile className='text-4xl text-mainBlue mr-4' />
          <div>
            <p className='text-lg text-mainGray'>09212342871</p>
            <p className='text-lg text-mainGray capitalize'>
              message me on whatsapp or telegram
            </p>
          </div>
        </div>

        <div className='max-h-44 flex items-center justify-center h-full max-w-xl mx-auto px-3 py-4'>
          <HiOutlineLocationMarker className='text-4xl w-fit text-mainBlue mr-4' />
          <div>
            <p className='text-lg text-mainGray'>Shiraz,Iran</p>
            <p className='text-lg text-mainGray capitalize'>
              not limited to any location!
            </p>
          </div>
        </div>
        {/* current loc */}
        <div className='max-h-44 flex items-center justify-center h-full max-w-xl mx-auto px-3 py-4'>
          <HiOutlineMail className='text-4xl text-mainBlue mr-4' />
          <div>
            <a
              href='mailto:pmosadeqzadeh@gmail.com'
              target='_blank'
              className='text-lg text-mainGray'
            >
              pmosadeqzadeh@gmail.com
            </a>
            <p className='text-lg text-mainGray capitalize'>
             i will get back to you as soon as possible ;)
            </p>
          </div>
        </div>
      </article>

      <form action="#">
        <div>
<label htmlFor="name">name</label>
        <input type="name" name='name' requaired/>
        </div>
        <div>
<label htmlFor="email">email</label>
        <input type="email" name='email' requaired/>
        </div>
        <div>
<label htmlFor="msg">message</label>
        <input type="text" name='msg' requaired/>
        </div>
      </form>
    </Layout>
  );
};

export default ContactPage;
