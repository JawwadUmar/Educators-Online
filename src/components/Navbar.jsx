import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <Link to = '/'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Educators Online</h1>
      </Link>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className='p-4'>
          <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className='p-4' style={{ whiteSpace: 'nowrap' }}>
        <Link className="nav-link" to="/plans">Our Plans</Link>
        </li>

        <li className='p-4'>
        <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Educators Online</h1>
        <li className='p-4 border-b border-gray-600'>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
        <Link className="nav-link" to="/plans">Our Plans</Link>
          </li>

        <li className='p-4 border-b border-gray-600'>
        <Link className="nav-link" to="/contact">Contact</Link>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;
