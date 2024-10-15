import React from 'react'
import BannerImg from '../assets/website/sprite-dog.png'

const Banner = () => {
  return (
    <>
        <div>
            <div className="container">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Image Section */}
                    <div>
                        <img src={BannerImg} alt="" />
                    </div>
                    {/* Text Content Section */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner