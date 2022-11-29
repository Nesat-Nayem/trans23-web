import React from 'react';
import Flickity from 'react-flickity-component';
import AOS from 'aos';
import "./Feature.css";
AOS.init();

const flickityOptions = {
    initialIndex: 2,
    wrapAround: true
  }
const Feature = () => {
    return (
        <div className='feature py-8 mt-4'>
            <div className="feature-heading text-center mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <h4 className='font-semibold text-sm mb-2'>WE ARE AVAILABLE</h4>
                <h3 className='text-3xl font-bold'>Find Us In Your Area</h3>
            </div>
            <div className="featureProjects pb-14">
            <Flickity className='' options={flickityOptions} >
                <div id="carousel-cell-1" class="carousel-cell gap-5">
                    <div className="carousel-cell-img">
                        <img src="https://i.ibb.co/zhz41Xg/piotr-chrobot-6o-Usye-YXg-Tg-unsplash.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>Mumbai</h4>
                        <h3>3rd Floor Khan Tower</h3>
                    </div>
                </div>
                <div id="carousel-cell-2" class="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://i.postimg.cc/yx91sZPs/ben-o-bro-wp-U4ve-NGn-Hg-unsplash.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>Karnataka</h4>
                        <h3>Kok ten tower </h3>
                    </div>
                </div>
                <div id="carousel-cell-3" class="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://i.ibb.co/zhz41Xg/piotr-chrobot-6o-Usye-YXg-Tg-unsplash.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>Delhi</h4>
                        <h3>Len </h3>
                    </div>
                </div>
                <div id="carousel-cell-4" class="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://i.ibb.co/zhz41Xg/piotr-chrobot-6o-Usye-YXg-Tg-unsplash.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>Hyderabad</h4>
                        <h3>Mannix Marketing</h3>
                    </div>
                </div>
                <div id="carousel-cell-5" class="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://i.ibb.co/zhz41Xg/piotr-chrobot-6o-Usye-YXg-Tg-unsplash.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>Bangalore</h4>
                        <h3>Mannix Marketing</h3>
                    </div>
                </div>
            </Flickity>
            </div>
        </div>
    );
};

export default Feature;