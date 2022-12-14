import React from "react";
import Blogs from "./Blog/Blogs";
import EventListing from "./EventListing/EventListing";
import UpcommingEvent from "./UpcommitngEvent/UpcommingEvent";
import Staffs from "./Staffs/Staffs";
import Venues from "./Venues/Venues";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import PurchaseEvent from "./PurchaseEvent/PurchaseEvent";
import Offer from "./Offer/Offer";
import PartnerClient from "./Partner&Client/PartnerClient";
import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";
import TService from "./TService/TService";
import OurPlan from "./OurPlan/OurPlan";
import Testimonial from "./Testimonial/Testimonial";
import Feature from "./Feature/Feature";
import ChooseUs from "./ChooseUs/ChooseUs";
import AppDownload from "./AppDownload/AppDownload";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <UpcommingEvent></UpcommingEvent> */}
      <AboutUs></AboutUs>
      {/* <Venues /> */}
      <Feature></Feature>
      <Offer></Offer>
      <ChooseUs></ChooseUs>
      <TService></TService>
      {/* <EventListing></EventListing> */}
      {/* <Gallery></Gallery> */}
      {/* <OurServices></OurServices> */}
      <AppDownload></AppDownload>
      <Staffs />
      <OurPlan></OurPlan>
      <PurchaseEvent></PurchaseEvent>
      <Testimonial></Testimonial>
      {/* <PartnerClient></PartnerClient> */}
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
