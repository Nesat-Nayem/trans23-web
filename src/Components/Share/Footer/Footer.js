import React from 'react';
// import logo from '../../../asset/logo/1.site-logo.jpg'
// react icon
import { HiOutlineMail } from 'react-icons/hi'
import { FaPhone } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { AiOutlineGooglePlus, AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi'
// image 
import footerImg1 from '../../../asset/footerImg/img7.jpg'
import footerImg2 from '../../../asset/footerImg/img7.jpg'
import footerImg3 from '../../../asset/footerImg/img7.jpg'
import footerImg4 from '../../../asset/footerImg/img7.jpg'
import footerImg5 from '../../../asset/footerImg/img7.jpg'
import footerImg6 from '../../../asset/footerImg/img7.jpg'

import './Footer.css'
const Footer = () => {
   return (
      <>
         <footer class="footer p-10 bg-[#333333] text-white">
            <div>
               <div className="flex items-center">
                  {/* <img className='ml-[-1rem]' src='https://i.ibb.co/Qb1N5CN/Trans23-Logo.jpg' alt="logo" /> */}
                  <div className="uppercase">
                     <h2 className='text-3xl text-white tracking-widest'>Trans23</h2>
                     <p className='text-[#FFBE30] text-lg'>Moves With Safity</p>
                  </div>
               </div>
               <div className="">
                  <ul className='py-10'>
                     <li className='flex gap-4 items-center text-base py-1'><span className='text-[#FFBE30] text-2xl'><MdLocationPin></MdLocationPin></span>Mumbai, Maharashtra, India</li>
                     <li className='flex gap-4 items-center text-base py-1'><span className='text-[#FFBE30] text-2xl'><HiOutlineMail></HiOutlineMail></span>contact@trans23.com</li>
                     <li className='flex gap-4 items-center text-base py-1'><span className='text-[#FFBE30] text-lg'><FaPhone></FaPhone></span>100 800 1234 5555</li>
                  </ul>
               </div>
               <div className="">
                  <h1 className='text-2xl font-bold text-white'>CONNECT WITH US</h1>
                  <ul className='flex gap-4 items-center text-base py-6'>
                     <li><Link to={'/facebook.com'} className='text-2xl cursor-pointer hover:text-sky-500'><BsFacebook /></Link></li>
                     <li><Link to={'/google.com'} className='text-4xl cursor-pointer hover:text-red-500'><AiOutlineGooglePlus /></Link></li>
                     <li><Link to={'/linkedin'} className='text-2xl cursor-pointer hover:text-sky-500'><BsLinkedin /></Link></li>
                     <li><Link to={'/instagram.com/'} className='text-3xl cursor-pointer hover:text-red-500'><AiOutlineInstagram /></Link></li>
                     <li><Link to={'/twitter.com'} className='text-2xl cursor-pointer hover:text-sky-500'><BsTwitter /></Link></li>
                  </ul>
               </div>
            </div>
            <div>
               <div class="">
                  <div class="">
                     <h3 class="footer-item-title text-3xl capitalize text-white">
                        useful <strong className='text-[#ff960d]'>links</strong>
                     </h3>
                     <ul className='py-6'>
                        <li className='text-base flex items-center gap-2  border-b border-slate-500 py-2 '><a href='' id='usefulHover' className='flex gap-2 items-center'><BiRightArrowAlt className='bg-zinc-500 w-5 h-5 rounded-full text-[#333333] ' /> Home Trans23</a></li>
                        <li className='text-base flex items-center gap-2  border-b border-slate-500 py-2 '><a href='' id='usefulHover' className='flex gap-2 items-center'><BiRightArrowAlt className='bg-zinc-500 w-5 h-5 rounded-full text-[#333333] ' /> About</a></li>
                        <li className='text-base flex items-center gap-2  border-b border-slate-500 py-2 '><a href='' id='usefulHover' className='flex gap-2 items-center'><BiRightArrowAlt className='bg-zinc-500 w-5 h-5 rounded-full text-[#333333] ' /> Contact us</a></li>
                        <li className='text-base flex items-center gap-2  border-b border-slate-500 py-2 '><a href='' id='usefulHover' className='flex gap-2 items-center'><BiRightArrowAlt className='bg-zinc-500 w-5 h-5 rounded-full text-[#333333] ' />Services</a></li>
                        <li className='text-base flex items-center gap-2  border-b border-slate-500 py-2 '><a href='' id='usefulHover' className='flex gap-2 items-center'><BiRightArrowAlt className='bg-zinc-500 w-5 h-5 rounded-full text-[#333333] ' /> News</a></li>
                        {/* <li className='text-base flex items-center gap-2  border-b border-slate-500 py-2 '><a href='' id='usefulHover' className='flex gap-2 items-center'><BiRightArrowAlt className='bg-zinc-500 w-5 h-5 rounded-full text-[#333333] ' /> Venues</a></li>
                        <li className='text-base flex items-center gap-2  border-b border-slate-500 py-2 '><a href='' id='usefulHover' className='flex gap-2 items-center'><BiRightArrowAlt className='bg-zinc-500 w-5 h-5 rounded-full text-[#333333] ' /> Tickets</a></li> */}
                        <li className='text-base flex items-center gap-2  border-b border-slate-500 py-2 '><a href='' id='usefulHover' className='flex gap-2 items-center'><BiRightArrowAlt className='bg-zinc-500 w-5 h-5 rounded-full text-[#333333] ' /> Ask & Questions</a></li>
                     </ul>

                  </div>
               </div>
            </div>
            <div>
               <div class="">
                  <div class="">
                     <h3 class="footer-item-title capitalize text-3xl text-white">
                        Trans23 <strong className='text-[#ff960d]'>instagram</strong>
                     </h3>
                     <ul className="py-10 grid grid-cols-3 gap-4 items-center">
                        <li id="image_wrapper">
                           <div >
                              <img src={footerImg1} alt="" />
                           </div>
                           <div id='footerInstagramIcon'>
                              <Link to="#!"><AiOutlineInstagram /></Link>
                           </div>

                        </li>
                        <li id="image_wrapper">
                           <img src={footerImg2} alt="" />
                           <span><Link to="#!"><AiOutlineInstagram /></Link></span>

                        </li>
                        <li id="image_wrapper">
                           <img src={footerImg3} alt="" />
                           <span><Link to="#!"><AiOutlineInstagram /></Link></span>

                        </li>
                        <li id="image_wrapper">
                           <img src={footerImg4} alt="" />
                           <span><Link to="#!"><AiOutlineInstagram /></Link></span>

                        </li>
                        <li id="image_wrapper">
                           <img src={footerImg5} alt="" />
                           <span><Link to="#!"><AiOutlineInstagram /></Link></span>

                        </li>
                        <li id="image_wrapper">
                           <img src={footerImg6} alt="" />
                           <span><Link to="#!"><AiOutlineInstagram /></Link></span>

                        </li>
                     </ul>
                     <h4 class="followus-link text-white">
                        Follow Our Instagram <a href="#!"> Trans23</a>
                     </h4>
                  </div>
               </div>
            </div>
         </footer>
         <footer class="footer px-10 py-4  border-[#333333] bg-[#1d1d1d] text-white">
            <div class="items-center grid-flow-col">
               <p class="m-0 text-base">??2022 <a href="#!" class="site-link">Trans23.com</a> all right reserved, made with <i class="fas fa-heart"></i> by <a href="#!" class="author-link"><strong className='capitalize'> OMM Software </strong></a></p>
            </div>
            <div class="md:place-self-center md:justify-self-end">
               <div class="grid grid-flow-col gap-4">
                  <ul className='flex gap-4'>
                     <li><a href="contact.html">Vendor Register</a></li>
                     <li><a href="contact.html">Franchises Register</a></li>
                     <li><a href="contact.html">Contact us</a></li>
                     <li><a href="about.html">About us</a></li>
                     {/* <li><a href="#!">Site map</a></li> */}
                     <li><a href="#!">Privacy policy</a></li>
                  </ul>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;