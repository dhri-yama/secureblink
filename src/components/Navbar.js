import React from 'react'

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center h-20 w-11/12 md:w-full xl:w-3/4 m-auto pt-16 text-white relative '
      role='navigation'
    >
      <a href='/' className='pl-8 text-2xl'>
        LOGO
      </a>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  hidden'>
        <a href='#about' className='p-4'>
          About
        </a>
        <a href='#services' rel="noreferrer" className='p-4'>
          Services
        </a>
        <a href='#casestudies'  rel="noreferrer" className='p-4'>
          Case Studies
        </a>
        <a href='#testimonials' rel="noreferrer"  className='p-4'>
          Testimonials
        </a>
        <a href='#contact'  rel="noreferrer"  className='p-4'>
          Contact
        </a>
        <a href='/'  rel="noreferrer"  className='p-3 px-12 rounded-lg bg-white text-black'>
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;