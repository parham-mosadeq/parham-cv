const PageTitle = ({ title, sub }) => {
  return (
    <>
      {/* a title maker for different pages */}
      <div className='w-full rounded-md border-t  border-b border-thiGray bg-thiGray capitalize p-10'>
        <h1 className='text-mainWhite text-3xl font-bold'>{title}</h1>
        <p className='text-mainGray font-light'>{sub}</p>
      </div>
    </>
  );
};

export default PageTitle;
