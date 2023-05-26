import Image from 'next/image';
const Header = () => {
  return (
    <article className='flex flex-col justify-center items-center'>
      <div className='bg-secGray w-64 h-64 rounded-full p-5 mx-auto shadow-2xl'>
        <Image
          className='object-cover w-full h-full rounded-full block mx-auto m-0 shadow-lg'
          src='/ParhamMosadeqzadeh.jpg'
          width={350}
          height={350}
          alt='parham mosadeqzadeh'
        />
      </div>
      <p className='text-mainGray capitalize my-3 text-sm shadow-sm'>
        front-end developer
      </p>
      <div className='text-center text-mainWhite'>
        <h1 className='text-3xl capitalize'>parham mosadeq</h1>
        <p className='text-lg text-justify p-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, autem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, autem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, autem.
        </p>
      </div>
    </article>
  );
};

export default Header;
