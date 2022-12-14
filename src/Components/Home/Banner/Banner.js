import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// import photos 
import banner1 from '../../../asset/Banner/slider-bg1.jpg'
import banner2 from '../../../asset/Banner/slider-bg2.jpg'
import banner3 from '../../../asset/Banner/slider-bg3.jpg'
import { Link } from "react-router-dom";
const Banner = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};
	// for banner image 
	const photos = [
		{ img: "https://i.postimg.cc/3RmMgDJk/banner-03.jpg", header1: 'Safe & Faster', header2: 'Logistics Services', header3: 'We Build Your Dream', aboutBtn: 'about', startedBtn: 'get started' },
		{ img: "https://i.postimg.cc/3RmMgDJk/banner-03.jpg", header1: 'Safe & Faster', header2: 'Logistics Services', header3: 'We Build Your Dream', aboutBtn: 'about', startedBtn: 'get started' },
		{ img: "https://i.postimg.cc/3RmMgDJk/banner-03.jpg", header1: 'Safe & Faster', header2: 'Logistics Services', header3: 'We Build Your Dream', aboutBtn: 'about', startedBtn: 'get started' }
	]
	return (
		<div className="">
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				centeredSlides={true}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				pagination={pagination}
				className="mySwiper"
			>
				{
					photos.map((banner, index) =>
						<SwiperSlide key={index}>
							<div className="" id="slider_content">
								<div >
									<div id="image_wrapper">
										<img src={banner?.img} alt="" />
									</div>
									<div className="" id="slider_bg">
										
										<div id="banner_content">
											<div className="banner_text">
												<h2 className="text-white text-xl md:text-5xl "
												data-aos="fade-down"
												data-aos-duration="3000"
												>{banner?.header1}</h2>
												<h1 className="text-white text-3xl md:text-5xl lg:text-7xl py-8 font-semibold"
												data-aos="fade-down"
												data-aos-duration="3000"
												>{banner?.header2}</h1>
												<h4 className="text-white text-xs md:text-base md:tracking-[.4rem] tracking-[1px] "
												data-aos="zoom-in"
												data-aos-duration="3000"
												>{banner?.header3}</h4>
											</div>

											<div className="banner_button pt-14">
												<Link to='/' className="text-white  text-xs md:text-base py-3 px-6 md:px-14 capitalize font-semibold rounded-full transition-all ease-in-out duration-500" id="bannerAboutBtn" 
												data-aos="fade-right"
												data-aos-duration="3000"
												>{banner?.aboutBtn}</Link>
												

												<button id="bannerStartedBtn" className="text-white text-xs md:text-base outline outline-[#FFBE30] ml-6 p-2  rounded-full px-2 md:px-8 hover:bg-[#FFBE30] transition-all ease-in-out duration-300 text-center capitalize font-semibold"
												data-aos="fade-left"
												data-aos-duration="3000"
												>{banner?.startedBtn}</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					)
				}
			</Swiper>
		</div>
	);
};

export default Banner;