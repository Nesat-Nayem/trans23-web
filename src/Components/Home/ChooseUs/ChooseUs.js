import React from 'react';
import './ChooseUs.css';
// import service1 from 'https://i.postimg.cc/8CbqbGNB/home10-service1-active.png';
// import service2 from 'https://i.postimg.cc/wvfZSkt1/home10-service2-active.png';
// import service3 from 'https://i.postimg.cc/cCPjJ4BZ/home10-service3.png';
// import service4 from 'https://i.postimg.cc/j5dBg1jV/home10-service4-active.png';
// import service5 from 'https://i.postimg.cc/MZLg5d24/home10-service5.png';
// import service6 from 'https://i.postimg.cc/qqNS0Cnj/home10-service6-active.png';

const ChooseUs = () => {
    const offers = [
        {
            image: "https://i.postimg.cc/8CbqbGNB/home10-service1-active.png",
            offersName: 'Home Relocation',
            offersDescription: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'
        },
        {
            image: 'https://i.postimg.cc/wvfZSkt1/home10-service2-active.png',
            offersName: 'Office Relocation',
            offersDescription: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'
        },
        {
            image: 'https://i.postimg.cc/cCPjJ4BZ/home10-service3.png',
            offersName: 'Commercial Storage',
            offersDescription: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'
        },
        {
            image: 'https://i.postimg.cc/j5dBg1jV/home10-service4-active.png',
            offersName: 'Residential Storage',
            offersDescription: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'
        },
        {
            image: 'https://i.postimg.cc/MZLg5d24/home10-service5.png',
            offersName: 'Courier',
            offersDescription: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'
        },
        {
            image: 'https://i.postimg.cc/qqNS0Cnj/home10-service6-active.png',
            offersName: 'Vehicle Transport',
            offersDescription: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'
        }
    ]
    return (
        <div className='pb-20'>
            <div className='flex items-center justify-center my-8'>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <p className=' font-semibold text-center '> WHY CHOOSE US</p>
                    <h3 className='text-3xl font-bold'>What We Offer</h3>
                </div>
            </div>
            <div className="md:grid lg:grid-cols-3 gap-5 w-10/12 mx-auto ">
                {
                    offers.map(offer => <div className='cartShadow p-12 rounded-lg'>
                        <div>
                            <div className=' flex items-center justify-start choose-desc'>
                                <img className='w-20' src={offer.image} alt="" />
                                <div className='ml-4'><h4 className='text-xl  text-gray-700 font-semibold'>{offer.offersName}</h4></div>
                            </div>
                        </div>
                        <div className='mt-2'><p className='text-justify text-gray-500 font-medium'>{offer.offersDescription}</p></div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ChooseUs;