import { useMemo } from 'react';
import React from 'react';

const Title = ({ title }) => {
  const [blueBorder, res] = useMemo(
    () => [title.slice(0, 3), title.slice(3)],
    [title]
  );
  return (
    <h2 className='w-fit md:pl-3 text-3xl text-mainWhite capitalize'>
      <span className='border-b-2 border-mainBlue'>{blueBorder}</span>
      <span className='border-b-2 border-mainGray'>{res}</span>
    </h2>
  );
};

export default React.memo(Title);
