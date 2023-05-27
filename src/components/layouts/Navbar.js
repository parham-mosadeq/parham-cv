import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useRouter } from 'next/router';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useRouter();
  const handleMenu = () => setIsOpen((prev) => !prev);
  const navItems = ['about me', 'resume', 'blog', 'contact'];

  useEffect(() => {
    handleMenu();
  }, [pathname]);

  return (
    <header className='max-w-5xl md:px-5 mx-auto h-16 flex bg-mainDark relative'>
      <nav className='w-full flex items-center justify-between mx-auto max-w-7xl px-5 md:px-0'>
        {/* logo */}
        <div className='text-mainWhite'>
          <Link className='flex items-center capitalize' href='/'>
            <p
              className='w-8 h-8 bg-mainBlue flex items-center justify-center
          text-mainWhite font-bold text-lg rounded-full
          '
            >
              p
            </p>{' '}
            <span className='font-bold mx-1'>parham </span> mosadeqzadeh
          </Link>
        </div>
        {/* btn */}
        <div className='text-mainWhite text-2xl cursor-pointer z-10 md:hidden'>
          {isOpen ? (
            <HiMenu onClick={() => handleMenu()} />
          ) : (
            <HiX onClick={() => handleMenu()} />
          )}
        </div>
        {/* btn */}
        <ul
          className={`${
            isOpen ? 'hidden' : 'absolute'
          } text-mainWhite bg-mainDark h-screen w-1/2 capitalize absolute top-0 right-0 flex flex-col items-center justify-center
          
          md:flex md:flex-row md:h-16 md:w-1/2 md:mx-auto
          `}
        >
          {navItems.map((item) => {
            const joinedItems = item.replace(' ', '-');
            return (
              <li
                key={item}
                className='my-16 transition duration-300 hover:text-mainGray tracking-wider capitalize  md:my-0 md:mx-2 lg:mx-5'
              >
                <Link href={`/${joinedItems}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
