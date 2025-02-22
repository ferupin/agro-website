import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import Banner from "./components/Banner.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Products from "./components/Products.jsx";
import AboutUs from "./components/AboutUs.jsx";

const App = () => {
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 700,
			easing: "ease-in",
			delay: 100,
		});
	});

	return (
		<div className="overflow-x-hidden">
			<Navbar />
			<Home />
			<Services />
			<Testimonial />
			<Products />
			<AboutUs />
		</div>
	);
};

export default App;
