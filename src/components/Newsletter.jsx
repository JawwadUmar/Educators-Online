import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_ktco67p', 'template_8ctb8kt', form.current, '25ARfq7__phcJHFQA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mx-2'>
          Discover tailored class plans to accomodate your needs.
          </h1>
          <p className='my-2 ml-2'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>

          <form ref={form} autoComplete='off' className='flex w-full' onSubmit={sendEmail} name='user_email'>
            <input
              className=' flex w-full rounded-md text-black my-5'
              type='email'
              placeholder='Enter Email'
              name='user_email'
              ref={form}
              style={{ width: '250px' }}
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
            
            </form>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
