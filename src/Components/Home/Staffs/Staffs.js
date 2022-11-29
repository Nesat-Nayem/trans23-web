import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./staffs.module.css";

const staffs =[
  { 
      "image": "https://i.ibb.co/NmND26W/tttttttttttttttttttt-removebg-preview.png", 
      "name": "James", 
      "profession": "Event Planner",
      "details": "Planning and producing the whole event.Procurement management and resource management. Formulates, prepares and implement risks related management plan to event planning and production."
  },
  {
      "image": "./speakes-thumbnail.png", 
      "name": "William",
      "profession": "Event / Marketing Coordinator",
      "details": "They oversee the entire event process, supervising the rest of the team to make sure no balls are dropped. The Coordinator(s) communicates regularly with the Director to make sure the day-to-day work is laddering up to the overall vision."
  },
  {
      "image": "https://i.ibb.co/qjSg5jr/team22222222-removebg-preview.png", 
      "name": "Robert",
      "profession": "Information Manager",
      "details": "Manages the information acquired through different sources. Responsible for the documentation of all business operations carried out pre-event, at-event and post-event. Maintains database of service providers, delegates, guests, organizers, sponsors, partners, clients, target audience, media people and various govt. departments officials. Formulates, prepares and implements the risk management plan."
  }
  // { 
  //     "image": "./speakes-thumbnail.png", 
  //     "name": "Mary", 
  //     "profession": "Security Manager",
  //     "details": "Formulating, preparing and implementing the security plan and strategies. i.e. how to protect delegates, guests, service providers, organizers, sponsors, partners, clients, target audience, goods and merchandise. Procurement management and resource management."
  // },
  // { 
  //     "image": "./speakes-thumbnail.png", 
  //     "name": "Thomas", 
  //     "profession": "Designer / Experiential Designer",
  //     "details": "Our designer is in charge of all of our event’s visual components: from the landing page, emails, and social assets to on-site signage, decor, and branded swag. They work closely with the Marketing Lead on the creative development during your event’s promotion phases."
  // },
  // { 
  //     "image": "./speakes-thumbnail.png", 
  //     "name": "Liam", 
  //     "profession": "On-Site Lead",
  //     "details": "Depending on the event, we will most likely need some extra bodies on-site to help run the door, check people in, and be on hand for any extra help. Our On-Site Lead is our go-to point person for anything related to what happens on the day of the event at the venue."
  // },
  // { 
  //     "image": "./speakes-thumbnail.png", 
  //     "name": "Niak", 
  //     "profession": "Venue manager",
  //     "details": "Our venue manager is responsible for working with clients and event planners to coordinate events taking place at their venue, which may be at a conference hall, ballroom, hotel space or theater. They ensure that all individuals who are part of the event and the planning process utilize the space correctly and clean up after the event."
  // },
  // { 
  //     "image": "./speakes-thumbnail.png", 
  //     "name": "Farin", 
  //     "profession": "Social media manager",
  //     "details": "Our social media manager is responsible for representing a company or brand on various social media networks. They may engage with the audience, create campaigns and advertisements, gather analytics and promote the brand's products and services."
  // },
  // { 
  //     "image": "./speakes-thumbnail.png", 
  //     "name": "Nasrim", 
  //     "profession": "Fundraising manager",
  //     "details": "Our fundraising manager is responsible for securing funds for the organization they work for, which is typically a nonprofit charity. They may host events to showcase their organization's efforts and solicit donations from individuals, groups and other businesses."
  // }
]

const Staffs = () => {
  // const [staffs, setStaffs] = useState([]);

  // useEffect(() => {
  //   axios.get("staffs.json").then((res) => setStaffs(res.data));
  // }, []);

  const settings = {
    fade: true,
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    swipeToSlide: false,
    arrows: false,
    swipe: false,
  };

  return (
    <section className={`${styles.bg}`}>
      <div className={`${styles.bgLayer} pt-5`}>
        <div className={`mx-auto`}>
          <Slider
            {...settings}
            className="mx-auto"
          >
            {staffs.map((staff, i) => (
              <div className={`px-3 ${styles.slide} flex-col lg:flex-row`} key={i}>
                {/* <div className="flex gap-5 sm:flex-row flex-col items-center px-3"> */}
                <img
                  className="block object-contain lg:h-[80vh] mx-auto lg:mx-0"
                  src={staff.image}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
                <div className="space-y-5 max-w-sm"
                 data-aos="fade-left"
                 data-aos-duration="2000"
                >
                  <div className="h-[4px] w-[70px] bg-gradient-to-r from-red-500 to-pink-500 mx-0 -mb-3 rounded-full" />
                  <h6
                    className={`openSans uppercase tracking-[5px] text-sm text-gray-500`}
                  >
                    Trans23
                  </h6>
                  <h4 className={`roboto font-medium text-xl`}>
                    Professional<br />
                    <span className="font-extrabold">{staff.profession}</span>
                  </h4>
                  <h5 className="font-semibold text-lg">{staff.name}</h5>
                  <p className="text-sm pr-2 overflow-auto">{staff.details?.slice(0, 200)}</p>
                  <h5 className="font-semibold text-xl">
                    Social Network
                    <div></div>
                  </h5>
                </div>
                {/* </div> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Staffs;
