import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='text-white'>

    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 text-4xl mt-20 mb-10'>About Us</p>
        <div className='box justify-center items-center'>
            <p className='my-2 py-2 mx-auto md:text-xl mt-[-2px] px-2'>We are a skilled team of professionals, many of whom are graduates of the prestigious Indian Institutes of Technology (IITs) and have successfully cleared India's most challenging entrance exams to secure a spot in engineering colleges. Our educators are highly qualified and possess a deep understanding of their respective subjects. We assure you that our classes are valuable, and you will find them worthwhile.</p>

            <p className='my-2 py-2 mx-auto md:text-xl mb-10 px-2'>Opting for one-to-one sessions is proven to be more effective, as students tend to learn better in personalized settings compared to larger classes. This approach ensures a win-win situation for you. By choosing our services, you gain access to top-notch teachers from around the world. Simply fill out the form or reach out to us directly to get started.</p>
            
        </div>

        <p className='md:text-3xl text-xl font-bold text-gray-500 mb-2'>Book your free class today</p>
        <Link to='/form'>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Book Now</button>
        </Link>
    </div>

</div>
  )
}

export default About