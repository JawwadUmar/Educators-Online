import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Educators Online</h1>
        <p className='py-4'>Elevate your academic journey with personalized, one-on-one classes from the world's finest educators</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            
        <a href="https://www.facebook.com/profile.php?id=61555322957387" target='_blank' rel='noopener noreferrer'>
            <FaFacebookSquare size={30} />
            </a>
          
            <a href="https://www.instagram.com/educators___online/" target='_blank' rel='noopener noreferrer'>
            <FaInstagram size={30} />
            </a>

            <a href="https://twitter.com/Educators__" target='_blank' rel='noopener noreferrer'>
            <FaTwitterSquare size={30} />
            </a>

            <a href="https://wa.me/+917879893307" target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp size={30} />
            </a>

            <a href="https://www.youtube.com/channel/UC3Fgqg5rSGO2fHf2az-FhrA" target='_blank' rel='noopener noreferrer'>
            <FaYoutube size={30} />
            </a>

            
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;