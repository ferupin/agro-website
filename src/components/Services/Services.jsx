import React from 'react'
import DogImg from '../../assets/website/sprite-dog.png'
import CatImg from '../../assets/website/sprite-cat.png'
import FishImg from '../../assets/website/sprite-fish.png'

const ServicesData = [
    {
        id: 1,
        img: DogImg,
        name: "Cachorro",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aiqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: CatImg,
        name: "Gato",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aiqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        aosDelay: "100",
    },
    {
        id: 3,
        img: FishImg,
        name: "Peixes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aiqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        aosDelay: "100",
    },
]

const Services = () => {
  return (
    <>
        <span id='services'></span>
        <div className='py-10'>
            <div className="container">
                {/* Header Title */}
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                        Variedades pro seu Pet
                    </h1>
                </div>

                {/* Services Card Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {
                        ServicesData.map((data, index) => {
                            return (
                                <div 
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    key={index}
                                    className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative'
                                >
                                    {/* Image Section */}
                                    <div className='h-[122px]'>
                                        <img 
                                            src={data.img} 
                                            alt="" 
                                            className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300'
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div className='p-4 text-center'>
                                        <h1 className='text-xl font-bold'>{data.name}</h1>
                                        <p className='text-gray-500 group-hover:text-white text-sm line-clamp-2'>{data.description}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div></div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Services;