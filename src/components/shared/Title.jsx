import React from 'react';

const Title = ({ title }) => {
  return (
    <h2 className='border-b-2 border-mainBlue w-fit px-2 text-left text-2xl text-mainWhite capitalize'>
      {title}
    </h2>
  );
};

export default Title;
