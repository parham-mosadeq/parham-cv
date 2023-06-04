import ProfilePic from './ProfilePic';
import Link from 'next/link'
const Profile = () => {
  return (
    <article className='flex w-full flex-col justify-center items-center md:flex-row h-fit md:p-10'>
      <div className='text-center w-1/2 mx-auto'>
        <div className='flex flex-col bg-secGray w-64 h-64 sm:w-full sm:h-full md:h-72 md:w-72 rounded-full p-5 mx-auto shadow-2xl'>
          <ProfilePic />
        </div>
        <p className='text-mainGray capitalize mt-3 text-sm font-bold shadow-sm'>
          front-end developer
        </p>
          <p className='text-mainGray capitalize shadow-sm block text-lg font-light'>
          UI/UX designer
          </p>
      </div>
      {/* info */}
      <div className='w-full mx-auto text-center'>
        <div className='text-center text-mainWhite'>
          <h1 className='text-3xl capitalize'>parham mosadeq</h1>
          <p className='max-w-md mx-auto text-lg text-justify p-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            autem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Unde, autem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde, autem.
          </p>
        </div>
        <div className='flex items-center justify-center w-full p-3 text-mainWhite'>
          <button
            className='transition duration-300 bg-mainDark px-7 py-3 mx-2 rounded-full outline outline-mainBlue capitalize 
          hover:outline-none hover:bg-mainBlue
        '
          >
            download CV
          </button>
          <Link
          href='/contact'
            className='transition duration-300 bg-mainDark px-7 py-3 mx-2 rounded-full outline outline-mainGray capitalize 
          hover:outline-none hover:bg-mainGray'
          >
            contact
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Profile;
