import React from 'react';
import Logo from '../../assets/website/logo-white.png';
import { GrInstagram } from "react-icons/gr";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "Serviços",
    link: "/#services"
  },
  {
    id: 3,
    name: "Sobre Nós",
    link: "/#about"
  },
]

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
        <div className="container py-2">
            <div className="flex justify-between items-center gap-4">
                {/* Logo */}
                <div className="">
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-1 tracking-wider font-logo'>
                        <img src={Logo} alt="Logo" className="w-14" />
                        Agro Rocha
                    </a>
                </div>

                {/* Link */}
                <div className='flex justify-between items-center gap-4'>
                  <ul className='hidden sm:flex  items-center gap-4'>
                    {Menus.map((data, index) => (
                        <li key={index}>
                          <a href={data.link} 
                             className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                  <a href="https://www.instagram.com/agrorochaparipe/" target="_blank">
                    <button 
                      className='bg-gradient-to-r from-instagram-purple via-instagram-pink to-instagram-orange text-white font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 flex items-center gap-2'>
                        Instagram
                        <GrInstagram className='text-xl cursor-pointer'></GrInstagram>
                    </button>
                  </a>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar