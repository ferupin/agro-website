import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
<<<<<<< HEAD
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
=======
import Navbar from "./components/Navbar/Navbar"
>>>>>>> 1b9d1e5636ac91947150b3740d1eb42260fe0a8f

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
<<<<<<< HEAD
  return (
  <div className='overflow-x-hidden'>
    <Navbar />
    <Home />
    <Services />
    <Testimonial />
  </div>
  );
=======
  return <div className='overflow-x-hidden'>
    <Navbar />
  </div>
>>>>>>> 1b9d1e5636ac91947150b3740d1eb42260fe0a8f
};

export default App