import React from "react";
import HeroImg from "../../assets/website/hero-animals.png"

const Home = () => {
    return (
        <div className="min-h-[550px] sm:min-h-[600px] bg-gradient-to-r from-secondary to-secondary/90 flex justify-center items-center text-white">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Text content section */}
                    <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                            Aqui seu pet é <span className="text-brandDark font-cursive">Família!</span> São 20 Anos ao seu lado
                        </h1>
                        <div className="order-2 sm:order-1">
                            <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">Coffee And Code</button>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
                        <img 
                            src={HeroImg} 
                            alt="" 
                            className="w-[300px] sm:w-[400px] sm:scale-110 mx-auto" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;