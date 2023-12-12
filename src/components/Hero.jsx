import React from 'react'
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className='text-white'>

        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 text-2xl mt-10'>GROW WITH QUALITY EDUCATION</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6' >Best educators online</h1>

            <div className='flex justify-center items-center'>
                <p className='md:text-5x1 sm:text-4xl text-xl font-bold py-4'>Quality Education for</p>
                <Typed className='md:text-5x1 sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['Knowledge', 'Success', 'Empowerment']}
                typeSpeed={120}
                backSpeed={10}
                loop
                />
            </div>

            <p className='md:text-2xl text-xl font-bold text-gray-500'>Book your free class today</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Book Now</button>
        </div>

    </div>
  )
}

export default Home