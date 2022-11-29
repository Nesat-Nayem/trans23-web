import React from 'react';
import './TService.css';
const TService = () => {
    return (
        <div className='experiencePart flex py-14'>
            
            <div className="experience-part-one mx-auto relative">
                <div className='experience-before-img'>
                    <img className='top-0 left-0 z-0 ' src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_ellipse.png' alt="" />
                </div>
                <div className="grid grid-cols-2 gap-5 absolute top-0 justify-center left-28">
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div className='px-9'>
                            <h2 className='text-center text-6xl font-bold text'>94%</h2>
                            <p className='text-center text-xl mt-2'>Positive Response <br /> From Our Client</p>
                        </div>
                    </div>
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div className='px-9'>
                            <h2 className='text-center text-6xl font-bold'>1350</h2>
                            <p className='text-center text-xl mt-2'>Successfully Work <br /> We have done</p>
                        </div>
                    </div>
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div className='px-9'>
                            <h2 className='text-center text-6xl font-bold'>03K</h2>
                            <p className='text-center text-xl mt-2'>Our Active <br /> Client Over The Year</p>
                        </div>
                    </div>
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div className='px-9'>
                            <h2 className='text-center text-6xl font-bold'>10K</h2>
                            <p className='text-center text-xl mt-2'>Apps Download <br /> Apple Store & Play Store</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/girl-with_phone.jpg' alt="" />
            </div>
        </div>
    );
};

export default TService;