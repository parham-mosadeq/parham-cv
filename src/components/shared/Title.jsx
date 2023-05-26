import React from 'react';

const Title = ({ title }) => {
  return (
    <h2 className=' w-fit px-2 text-left text-2xl text-mainWhite capitalize'>
      {[title].map((i) => {
        const blueBorder = i.slice(0, 3);
        const res = i.slice(3);
        return (
          <div key={i}>
            <span className='border-b-2 border-mainBlue'>{blueBorder}</span>
            <span className='border-b-2 border-mainGray'>{res}</span>
          </div>
        );
      })}
    </h2>
  );
};

export default Title;
