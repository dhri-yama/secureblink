import React from 'react';


const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'flex flex-col text-center items-center text-white'
          : 'hidden'
      }
      onClick={toggle}
    >
      <a href='/' className='p-4'>
          About
      </a>
      <div style={{"height":"1px"}} className=" w-10/12 bg-white "></div>
      <a href='/' rel="noreferrer" target="_blank" className='p-4'>
          Services
        </a>
      <div style={{"height":"1px"}} className=" w-10/12 bg-white "></div>
      <a href='/' target="_blank" rel="noreferrer" className='p-4'>
          Case Studies
        </a>
      <div style={{"height":"1px"}} className=" w-10/12 bg-white "></div>
      <a href='/' target="_blank" rel="noreferrer"  className='p-4'>
          Testimonials
      </a>
      <div style={{"height":"1px"}} className=" w-10/12 bg-white "></div>
      <a href='/' target="_blank" rel="noreferrer"  className='p-4'>
          Contact
      </a>
      <div style={{"height":"1px"}} className=" w-10/12 bg-white "></div>
      <a href='/' target="_blank" rel="noreferrer"  className='p-4'>
          Login
      </a>
    </div>
  );
};

export default Dropdown;