import React from 'react';
// images
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='
        flex
        justify-between
        items-center'>
          {/* LOGO */}
          <a href='#' className='
          w-[120px] 
          h-[30px]'>
            <img src={Logo} alt='LOGO' /> 
            
          </a>
          {/* Button*/}
          <button className='btn btn-sm'> Work with me</button>
        </div>

      </div>
    </header>
  )
};

export default Header;
