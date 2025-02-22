import React from "react";
import Slider from "react-slick";
import Product from "../assets/website/dogProducts_1.png";

const ProductsData = [
	{
		id: 1,
		name: "Ração Golden",
		img: Product,
	},
	{
		id: 2,
		name: "Test_2",
		img: Product,
	},
	{
		id: 3,
		name: "Test_3",
		img: Product,
	},
];

const Products = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		rtl: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640, // Tailwind's sm breakpoint
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="py-10 sm:py-14 mb-6 sm:mb-10">
			<div className="container mx-auto px-4">
				{/* Header Section */}
				<div className="text-center mb-6 sm:mb-10">
					<h1 className="text-2xl sm:text-3xl font-bold font-cursive text-gray-800">
						Nossos principais produtos
					</h1>
				</div>
				<div className="max-w-full overflow-hidden">
					<Slider {...settings}>
						{ProductsData.map((data) => (
							<div key={data.id} className="px-2">
								<div className="flex flex-col items-center gap-3 sm:gap-4 py-6 sm:py-8 px-4 sm:px-6 rounded-xl bg-white">
									<div className="mb-2 sm:mb-4">
										<div className="w-24 h-24 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 sm:border-4 shadow-lg border-gray-50">
											<img
												src={data.img}
												alt={data.name}
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
									<p className="text-sm sm:text-base text-gray-600 font-semibold">
										{data.name}
									</p>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Products;
