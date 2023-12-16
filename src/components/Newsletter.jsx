import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './modal/Modal.jsx';

const Newsletter = () => {
  const form = useRef();

  const [modalContent, setModalContent] = useState({
    title: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Get the value of the email input
    const userEmail = form.current.user_email.value;
  
    // Check if the email is not empty and is a valid email address
    if (userEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      // Send the email using emailjs
      emailjs
        .sendForm('service_ktco67p', 'template_8ctb8kt', form.current, '25ARfq7__phcJHFQA')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  
      // Reset the form
      e.target.reset();

      // Open the modal with success message
      setModalContent({
        title: 'Success!',
        message: 'Thank you for showing interest.',
      });
  
      // Open the modal
      toggleModal();
    } else {

      if(!userEmail){
        //the submit button wont work so you will never reach here
        setModalContent({
          title: 'Error',
          message: 'Please enter an email address.',
        });
      }

      else{
        setModalContent({
          title: 'Error',
          message: 'Invalid email address. Please enter a valid email.',
        });
      }
      // Handle the case when the email is empty or not valid
      console.log('Invalid email address');
      toggleModal();
    }
  };

  const [isopen, setisopen] = useState(false);

  const toggleModal = () =>{
    setisopen(!isopen);
  }

  return (
    <>
    <Modal open = {isopen} title = {modalContent.title} message = {modalContent.message} close = {toggleModal}/>

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
              required
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
    </>
  );
};

export default Newsletter;
