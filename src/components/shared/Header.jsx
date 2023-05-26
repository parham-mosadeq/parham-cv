import Image from 'next/image';
const Header = () => {
  return (
    <div className='bg-secGray w-64 h-64 rounded-full p-5 mx-auto'>
      <Image
        className='object-cover w-full h-full rounded-full block mx-auto m-0'
        src='/ParhamMosadeqzadeh.jpg'
        width={350}
        height={350}
        alt='parham mosadeqzadeh'
      />
    </div>
  );
};

export default Header;
