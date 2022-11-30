import React from 'react';
import { useState } from 'react';
import './AppDownload.css'
const AppDownload = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    return (
        <div>
            {/* <section className="about" id="about">

<h1 className="heading"> about the app </h1>

<div className="column">

    <div className="image">
        <img src="https://i.ibb.co/ZLGd9qb/about-img.png" alt="" />
    </div>

    <div className="content">
        <h3>Easy And Perfect Solution For Your Business App</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat deserunt saepe repudiandae veniam soluta minima dolor hic aperiam iure.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quaerat. Dolorem ratione saepe magni quo inventore porro ab voluptates eos, nam eius provident accusantium, quia similique est, repellendus et reiciendis.</p>
        <div className="buttons">
            <a href="#" className="btn"> <i className="fab fa-apple"></i> app store </a>
            <a href="#" className="btn"> <i className="fab fa-google-play"></i> google-play </a>
        </div>
    </div>

</div>

</section> */}

<section id="ask-questions" className="bg-gray-100">
      <div className=" lg:max-w-7xl lg:mx-auto   lg:pt-20  ">
        <div className=" flex flex-col lg:max-w-7xl lg:mx-auto lg:gap-x-20   lg:flex-row   pb-20">
          <div className="  2xl:mx-auto  px-4 lg:px-20  md:px-6 ">
            <div className="mx-auto lg:mx-0 h-[3px] w-[70px] bg-[#ffbe30] mb-5 pr-5"></div>
            <h2 className=" font-semibold lg:text-[18px] text-3xl lg:ml-5 lg:leading-9 md:leading-7 leading-9 text-[#878787]"
            data-aos="fade-right"
            data-aos-duration="3000"
            >
              APPS
            </h2>
            <h2 className="mt-5 font-semibold lg:text-[48px] text-3xl lg:ml-5 lg:leading-9 md:leading-7 leading-9 text-gray-800"
            data-aos="fade-left"
            data-aos-duration="3000"
            >
              Download Our Apps
            </h2>
            <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start"></div>
            <div className=" flex justify-center md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
              <div className=" md:w-7/12 lg:w-6/12 w-full md:mt-0 sm:mt-14 mt-10">
                {/* <!-- Shipping Section --> */}
                <div className="lg:w-[420px]" 
                 data-aos="fade-right"
                 data-aos-delay="200"
                 data-aos-duration="2500"
                >
            

            <img
          className=" object-cover"
          src="https://i.ibb.co/ZLGd9qb/about-img.png"
          alt=""
        />
                 
             
                </div>

        

            

            
              </div>
            </div>
          </div>
          <div className=" md:w-5/12 lg:w-1/2 w-full ">
            <div>
              <div className="mx-auto lg:mx-0 h-[3px] w-[70px] bg-[#ffbe30] mb-5 lg:mr-[-6px]"></div>
              <h2 className="text-center lg:text-start lg:ml-5 font-semibold lg:text-[18px] text-3xl lg:leading-9 md:leading-7 leading-9 text-[#878787]"
              data-aos="fade-right"
              data-aos-duration="3000"
              >
                OUR BLOG
              </h2>
              <h2 className="text-center mt-5 font-semibold lg:ml-5 lg:text-start lg:text-[48px] text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800"
              data-aos="fade-left"
              data-aos-duration="3000"
              >
                Latest News
              </h2>
            </div>
            <div className="lg:mt-16  mt-5 ">
              {/* {blogs?.slice(0, 2)?.map((item) => (
                <Singleblog item={item} key={item._id}></Singleblog>
              ))} */}

<h1 className='text-4xl font-bold my-4'>Easy And Perfect Solution <br /> For Your Business App</h1>
                    <p className='text-lg'>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nulla Placeat Deserunt Saepe Repudiandae Veniam Soluta Minima Dolor Hic Aperiam Iure.
                    <br /><br />
Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Laudantium, Quaerat. Dolorem Ratione Saepe Magni Quo Inventore Porro Ab Voluptates Eos, Nam Eius Provident Accusantium, Quia Similique Est, Repellendus Et Reiciendis.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default AppDownload;