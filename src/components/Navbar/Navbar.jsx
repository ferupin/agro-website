import React from 'react';
import Logo from '../../assets/website/logo.png';

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
        <div className="container py-2">
            <div className="flex">
                {/* Logo */}
                <div className="">
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive'>
                        <img src={Logo} alt="Logo" className="w-14" />
                        Agro Rocha
                    </a>
                </div>

                {/* Link */}
                <div></div>
           </div>
        </div>
    </div>
  )
}

export default Navbar