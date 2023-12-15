import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="max-w-[600px] w-full p-8 mx-auto text-white bg-gray-800 rounded-lg shadow-lg">
        <p className="text-[#00df9a] font-bold text-4xl mb-6">Contact Information</p>

        <div className="mb-4">
          <p className="text-[#00df9a] text-lg font-semibold">Phone:</p>
          <p className="text-lg">(+91) 7879893307</p>
        </div>

        <div className="mb-4">
          <p className="text-[#00df9a] text-lg font-semibold">Email:</p>
          <p className="text-lg">educatorsonline7@gmail.com</p>
        </div>

        <div className="mb-4">
          <p className="text-[#00df9a] text-lg font-semibold">Address:</p>
          <p className="text-lg">IIT Indore, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
