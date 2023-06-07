import Layout from '@/components/layouts/layout'
import Head from 'next/head'
import {useRouter} from 'next/router'
const OrderPlanPage = () => {
  const {asPath}= useRouter()

const selectedPlan= asPath.slice(7)
 

const prices={
 silver :90,
gold :190,
platinum:300
}


return (
    <Layout>
      <Head>
        <title>Order</title>
      </Head>
      <article className= 'h-screen flex flex-col items-center justify-center'>
        <h3 className='text-xl capitalize text-mainBlue'>your total bill is {prices[`${selectedPlan}`]}$ and selected {selectedPlan} plan</h3>
        <p className='text-xl mt-2 capitalize text-mainGray'>there's no need to pay right now!</p>
        <p className='text-base mt-2 capitalize text-mainGray'>you only submited your desired plan</p>
        <p className='text-base mt-2 capitalize text-mainGray'>i will contact you ASAP!</p>
        <p className='text-base mt-2 capitalize text-mainGray'>pleas fill your information correctly!</p>
         <form action="/api/form" className=' md:w-1/2 md:mx-auto w-full lg:px-3 lg:border-none border-mainBlue h-full flex flex-col items-center justify-center'>
          {/* name */}
        <div className='lg:h-full w-full lg:w-full lg:mx-auto '>
        <label className='block capitalize text-mainGray tracking-wider ' htmlFor="name">name</label>
        <input type="name" name='name' className=' w-full h-5 lg:h-6 rounded-md  bg-mainDark border-2 border-mainBlue text-mainWhite focus:outline-none focus:h-7 focus:border-secGray hover:outline-none' required/>
        </div>
          {/* name */}
          {/* email */}
        <div  className='lg:h-full w-full lg:mx-auto '> 
        <label className='block capitalize text-mainGray tracking-wider ' htmlFor="email">email</label>
        <input type="email" name='email' className=' w-full h-5 lg:h-6 rounded-md  bg-mainDark border-2 border-mainBlue text-mainWhite focus:outline-none focus:h-7 focus:border-secGray hover:outline-none' required/>
        </div>
          {/* email */}
          {/* text */}
        <div className='lg:h-full w-full lg:mx-auto '>
        <label className='block capitalize text-mainGray tracking-wider ' htmlFor="plan">your plan</label>
        <input onChange={()=>{}} value={selectedPlan} type="text"  name='plan' className='w-full lg:h-6 rounded-md  bg-mainDark border-2 text-mainWhite outline-none h-7 border-secGray hover:outline-none' required/>
        </div>
          {/* text */}

<button type='submit' className='lg:w-full my-6 capitalize text-mainWhite border-2 bg-secGray border-mainBlue transition-colors duration-500 hover:bg-mainBlue hover:border-secGray px-8 py-2 rounded-lg '>send</button>

      </form>
      </article>
    </Layout>
  );
};

export default OrderPlanPage;