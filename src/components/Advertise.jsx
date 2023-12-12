import React from 'react'
import Laptop from '../assets/mom teacing son.jpg'

const Advertise = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
                <div className='flex flex-col justify-center'>  
                    <p className='text-[#00df9a] font-bold'>Online Sessions</p>
                    <h1 className='md: text-4xl sm:text-3xl text-2xl font-bold py-2'>Embark on a seamless learning journey from the comfort of your own space!</h1>
                    <p>Our one-on-one online tutoring sessions provide you with the ideal environment to excel without the worry of appearing less knowledgeable in front of peers. You can now learn at your own pace, asking questions anytime without hesitation.  Embrace the freedom to clarify doubts in a supportive and personalized setting. Book your one-on-one online tutoring sessions now and let the joy of learning take center stage!</p>
    
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md: mx-0 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
      )
}

export default Advertise