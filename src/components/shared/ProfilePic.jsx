import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';

const ProfilePic = () => {
  const styles = useSpring({
    loop: false,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: '600' },
  });

  return (
    <>
      <animated.div
        style={{
          width: '100%',
          height: '100%',
          ...styles,
        }}
      >
        <Image
          className='object-cover w-full h-full rounded-full block mx-auto m-0 shadow-lg'
          src='/ParhamMosadeqzadeh.jpg'
          width={350}
          height={350}
          alt='parham mosadeqzadeh'
        />
      </animated.div>
    </>
  );
};

export default ProfilePic;
