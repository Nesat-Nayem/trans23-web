import React, {useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   faMicrophone,
//   faMicrophoneAlt,
//   faCakeCandles,
//   faMusic,
//   faSquareCheck,
//   faClock,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
// import { BsPlusLg } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
import Singleblog from "./SingleBlog/Singleblog";
// import useBlogs from "../../Hooks/useBlogs";


const blogs =[
  {
    "tittle": "Load Boards Show Flat Demand and Higher Rates",
    "type": "blog",
    "image": "https://moversco-demo.pbminfotech.com/demo2/wp-content/uploads/sites/2/2018/08/blog-01-800x740.jpg",
    "date": "20,September,2021",
    "address": "200 Clarkson Avenue, Cobbtown,",
    "details": "Event management focuses on the steps and techniques that have to be taken for the successful organisation of an event. The event management discipline offers knowledge on how to build a concept, plan and identify the target audience for the desired event. Professionals in the field have to take into consideration budgeting, developing a theme, making sure all equipment and facilities are according to the desires of the client. Event management programmes offer a mix of business and management knowledge, including education on creativity and design elements.Event management borrows theories and practical knowledge from similar disciplines such as: innovation management, project management, marketing and public relations.Subjects included in the events management curricula include: strategic management, innovation for events, advertising and promotion, effective messaging, and event business Programmes in event management will equip students with creative thinking and strong leadership skills in order to coordinate teams that come together to accomplish a successful event. They will develop excellent organisational abilities, attention to detail and they will learn how to communicate efficiently and clearly, as they have to maintain a constant feedback between beneficiaries and services contractors.Career prospects for graduates include areas like: exhibit and conference organising, event designing, wedding planning, public relations, and more."
  },
  {
    "tittle": "Truckers to Seek HOS Waiver to the Ease Calif",
    "type": "blog",
    "image": "https://moversco-demo.pbminfotech.com/demo2/wp-content/uploads/sites/2/2017/09/blog-06-800x740.jpg",
    "date": "10,January,2022",
    "address": "221 Fillmore Place, Kennedyville,",
    "details": "There are hardly any jobs that offer you the same scope of creativity, socialising and travel than a career in event management. The industry is so varied that you can find yourself organising a wedding in the Welsh countryside one day, to organising a surf competition on the coast of Cornwall the next.Event manager Louisa Douglas says: “I love the rush, no two days or events are the same, it’s an agile industry that’s always changing, plus I get to meet new people all the time.”Working closely with clients to plan and deliver a successful event is extremely rewarding and the industry offers fantastic career progression. Sound good? Keep reading.There is no minimum qualification requirement to become an event manager. Anyone with strong organisational skills, creativity and excellent PR skills can enter into the industry. However, if you decide to undertake a qualification to prove your talent and knowledge on your CV; there are various professional courses available.Graduate careers advisors Prospects say: “You don’t need a degree to become an events manager and you can work your way up from an assistant position, gaining experience as you progress. It may be useful to take the Level 2 Certificate in Event Planning, although not essential.”Qualifications can help you with event management theory, but they’re by no means essential. Even with an event qualification you’ll still need to find work experience in the industry to make you an attractive and well-rounded candidate. Being able to show potential employers that you have hands-on practical experience will stand you in good stead. "
  },
  {
    "tittle": "Tips to help you start your career in events",
    "type": "blog",
    "image": "https://i.ibb.co/0JVjqQb/istockphoto-974238866-612x612.jpg",
    "date": "15,October,2021",
    "address": "170 Roosevelt Place, Starks,",
    "details": "Be up-to-date with market trends The events industry is always progressing, stay on top of market trends and emerging technology by reading blogs, articles and books by industry experts. Make a note of the resources you use and be sure to mention them in your interview – it’ll show willing.Know what events companies are right for you Although some events companies will work with a variety of events, many will specialise in one type. This can be charity, music, corporate or conferences etc. Do your research into each of the sectors – more on this later – and make sure that you target the right company for you.Network Social media makes networking easier than ever before. Sign up to Twitter and LinkedIn and start following and connecting with industry influencers, event companies and relevant people. Listen to what they say and interact with them where you can. Once you’ve built that online relationship, be brave and contact them directly asking for advice or potential job vacancies. Learn how to use social media to network by reading our guide Be creative at the interview In such a creative industry make an impression by thinking outside of the box. If you haven’t been asked to prepare something for the interview, take the initiative and come up with some ideas that would help raise the profile of their company. Going above and beyond will prove your enthusiasm for the industry.Do work experience In the competitive events industry work experience is a must. An event management apprenticeship, internship or university placement will give you a good introduction to the industry as well as looking great on your CV.Prospects says: “Relevant experience, either paid or voluntary, and knowledge of the industry is essential to break in to this competitive field. Some degree courses have an optional year in industry and this can be a great way of developing relevant experience and making industry contacts.”With so many people battling for valuable paid work experience, consider voluntary work or organising your own social events. Any hands-on experience will make you an attractive prospect to a potential employer.National Careers Service says: “You could gain experience of organising events and activities in your social life. Paid or unpaid work as a crew member at large events or exhibitions can also be a good way of building contacts within the industry. “"
  },
  {
    "tittle": "Can I be an event planner with no experience?",
    "type": "blog",
    "image": "https://i.ibb.co/hWbj7T5/image1-3.jpg",
    "date": "10,December,2021",
    "address": "857 Matthews Court, Convent,",
    "details": "If you don’t have any experience in the event industry, it can be difficult to find employment. As the best way to learn the event and no management skills you’ll need is on the job, some type of work experience is essential.If you’re struggling to find an internship, consider voluntary event work for not-for-profit organisations. This will give you valuable insight into the events world and help you get a foot in the door.As an event manager, you have the choice of starting your own business, working for an event planning agency or for a company working on their in-house events.Each path has its own exciting benefits.  Don’t feel as though you need to limit yourself to one throughout your career, many people find themselves swapping between them over the years. If you’re starting out in the industry, working for an event management agency is ideal. You’ll get to work in a creative atmosphere with people who share your passion, you’ll learn straight from the experts and gain that valuable experience that you need to progress in your career.Working in-house on company events means that you’ll become an expert on your ‘client’, knowing the ins and outs of the company you work for. In-house events teams are often smaller, meaning that you’ll get to experience the total variety that an event management role can offer. "
  },
  {
    "tittle": "What is a typical day for an event manager?",
    "type": "blog",
    "image": "https://i.ibb.co/JrPs4rY/https-media-insider-in-image-upload-c-cropg-custom-v1519627962-vltlogy23k1iid9pjffx.jpg",
    "date": "12,julay,2022",
    "address": "922 Jackson Court, Soudan,",
    "details": "An event manager’s role will vary from day to day, project to project.Because you’ll oversee the whole project, from initial planning through to running the event, your days can be look. They can range from a 7am start overseeing the build of a conference or exhibition, to an 11pm finish for a dinner or evening event. In the lead up to the event, you’ll usually work from an office, whereas on the day of the event you should expect to be on-site.20 Bedford Way’s events expert Sara Carella says: “Depending on which area of Event Management you work in and which organisation you work for, the working hours can be quite demanding, so you should be prepared for shifts out of regular working hours.” No two days are the same but your role will include: Meeting with clients to find out what they want Agreeing budgets and timescales with the clientm Coming up with original ideas for events Researching & negotiating with venues and suppliers Booking venues, entertainment, equipment and supplies Hiring and supervising contractors such as caterers and security Marketing the event Management on the day to ensure everything runs smoothly Ensuring that health, safety and insurance regulations are followed Managing an events team, volunteers etc.Event Management can be a lucrative career. The National Careers Service advises that average starting salaries are between £17,000-£21,000, rising to between £25,000-£40,000 with experience*. Salaries can even exceed £80,000 when you’re at the top of your game.*These are national averages and therefore include London where salaries are often higher than the rest of the country."
  },
  {
    "tittle": "Event management career advice from the experts",
    "type": "blog",
    "image": "https://i.ibb.co/Kj3b0Rc/depositphotos-48597043-stock-photo-speaker-at-business-conference-and.webp",
    "date": "7,August,2021",
    "address": "574 Wyckoff Avenue, Bloomington,",
    "details": "Louisa Douglas – Events Manager at Wirehive Time in the industry: 12 years Why did you choose a career in event management? I knew I wanted to be an event manager at 18 when I was tasked with organising a showcase event for our Media Studies course. I loved the adrenaline, running around trying to pull everything into position and problem solving throughout – I knew on that day it was what I wanted from my career.How did you get into events? I did attempt to do a degree in event management but university life didn’t suit me so I decided to drop out and go down the work experience route. I started in hotels as a trainee coordinator and worked my way up from there. What part of your job do you love the most? I love the rush, no two days or events are the same, it’s an agile industry that’s always changing, plus I get to meet new people all the time.What advice do you have for people starting out? Whilst I didn’t complete a degree, there is no harm in doing one if it suits the person, although I would say make sure it has at least a one-year work experience placement because experience is vital.Have a think about what type of events you would like to plan and try to get an entry level job in that field, sadly in the events industry while all skills are transferrable it is so competitive it can be tricky to change sector.Finally, be prepared to work hard, not always in the most glamorous conditions and for long hours – event management is not always as glamorous as it appears, but it is great fun and extremely rewarding. Why did you choose a career in event management?In my case Event Management actually chose me! When I moved from Germany to London a few years ago, I was offered a temp job working between Conferencing and Student Residences of the Institute of Education. When the opportunity arose to become a full-time member of staff within the conference team, I happily accepted. I enjoy working with other like-minded people and the diversity of the job – no event or client is ever the same.How did you get into events?I moved to London five years ago and that’s when I started working on the venue side of Event Management; selling space to clients, helping them with the logistics and making sure their events run smoothly. I had worked in in-house event management during my previous job in Germany, coordinating training and workshops for international staff members of the company I was working for which I enjoyed very much! It gave me the opportunity to travel to beautiful locations and get to know colleagues from all over the world."
  },
  {
    "tittle": "Why did you choose a career in event management?",
    "type": "blog",
    "image": "https://i.ibb.co/ncZc4Vr/musical-event1.jpg",
    "date": "6,December,2021",
    "address": "750 Preston Court, Vicksburg,",
    "details": "I knew I wanted to be an event manager at 18 when I was tasked with organising a showcase event for our Media Studies course. I loved the adrenaline, running around trying to pull everything into position and problem solving throughout – I knew on that day it was what I wanted from my career.How did you get into events? I did attempt to do a degree in event management but university life didn’t suit me so I decided to drop out and go down the work experience route. I started in hotels as a trainee coordinator and worked my way up from there. What part of your job do you love the most? I love the rush, no two days or events are the same, it’s an agile industry that’s always changing, plus I get to meet new people all the time.What advice do you have for people starting out? Whilst I didn’t complete a degree, there is no harm in doing one if it suits the person, although I would say make sure it has at least a one-year work experience placement because experience is vital.Have a think about what type of events you would like to plan and try to get an entry level job in that field, sadly in the events industry while all skills are transferrable it is so competitive it can be tricky to change sector.Finally, be prepared to work hard, not always in the most glamorous conditions and for long hours – event management is not always as glamorous as it appears, but it is great fun and extremely rewarding."
  },
  {
    "tittle": "What part of your job do you love the most?",
    "type": "blog",
    "image": "https://i.ibb.co/YQ4WNB5/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg",
    "date": "19,November,2021",
    "address": "205 Flatbush Avenue, Florence,",
    "details": "I love organising in general, so helping clients to plan their event is second nature to me! I also like the client interaction that the job brings along. It’s great to be dealing with so many different people from different companies and backgrounds! Of course it’s a perk to be able to watch certain shows or talks that you are personally interested in, especially when someone famous is coming to the venue!What advice do you have for people starting out? You will need excellent customer service skills as you are dealing with people on a daily basis. A lot of new clients have heard about 20 Bedford Way through word of mouth, so you want to make sure you have happy clients at the end of the day. Depending on which area of Event Management you work in and which organisation you work for, the working hours can be quite demanding, so you should be prepared for shifts out of regular working hours. A high level of organisational skills are crucial, as you need to always be thinking a step ahead."
  }
]




const Blogs = () => {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  // const navigate = useNavigate();
  // const [blogs] = useBlogs();
  return (
    <section id="ask-questions" className="bg-gray-100">
      <div className=" lg:max-w-7xl lg:mx-auto   lg:pt-20  ">
        <div className=" flex flex-col lg:max-w-7xl lg:mx-auto lg:gap-x-20   lg:flex-row   pb-20">
          <div className="  2xl:mx-auto  px-4 lg:px-20  md:px-6 ">
            <div className="mx-auto lg:mx-0 h-[3px] w-[70px] bg-[#ffbe30] mb-5 pr-5"></div>
            <h2 className=" font-semibold lg:text-[18px] text-3xl lg:ml-5 lg:leading-9 md:leading-7 leading-9 text-[#878787]"
            data-aos="fade-right"
            data-aos-duration="3000"
            >
              FIND YOUR ANSWER
            </h2>
            <h2 className="mt-5 font-semibold lg:text-[48px] text-3xl lg:ml-5 lg:leading-9 md:leading-7 leading-9 text-gray-800"
            data-aos="fade-left"
            data-aos-duration="3000"
            >
              Ask & Questions
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
                  <div className=" flex justify-between items-center cursor-pointer">
                    <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                    Q: What is the mission Financity ?
                    </h3>
                    <button
                      aria-label="too"
                      className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className={show ? "hidden" : "block"}
                          d="M10 4.1665V15.8332"
                          stroke="#1F2937"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="#1F2937"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <p
                    className={
                      "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                      (show ? "block" : "hidden")
                    }
                  >
                 
                
                 Sed ut perspiciatis unde omnis iste natus error sit vo-luptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  </p>
                </div>

                <hr className=" my-7 bg-gray-200 lg:w-[420px]" />

                {/* <!-- Returns Section --> */}

                <div className="lg:w-[420px]"
                 data-aos="fade-right"
                 data-aos-delay="700"
                 data-aos-duration="2500"
                >
                  <div className="  flex justify-between items-center cursor-pointer">
                    <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                    Q: What is the mission Financity ?
                    </h3>
                    <button
                      aria-label="too"
                      className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => setShow2(!show2)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className={show2 ? "hidden" : "block"}
                          d="M10 4.1665V15.8332"
                          stroke="#1F2937"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="#1F2937"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <p
                    className={
                      "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                      (show2 ? "block" : "hidden")
                    }
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit vo-luptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  </p>
                </div>

                <hr className=" my-7 bg-gray-200 lg:w-[420px]" />

                {/* <!-- Exchange Section --> */}

                <div className="lg:w-[420px]"
                 data-aos="fade-right"
                 data-aos-delay="1200"
                 data-aos-duration="2500"
                >
                  <div className=" flex justify-between items-center cursor-pointer">
                    <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                    Q: What is the mission Financity ?
                    </h3>
                    <button
                      aria-label="too"
                      className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => setShow3(!show3)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className={show3 ? "hidden" : "block"}
                          d="M10 4.1665V15.8332"
                          stroke="#1F2937"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="#1F2937"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <p
                    className={
                      "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                      (show3 ? "block" : "hidden")
                    }
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit vo-luptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  </p>
                </div>


                {/* Tracking Section */}

            

                <hr className=" my-7 bg-gray-200 lg:w-[420px]" />
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
              {blogs?.slice(0, 2)?.map((item) => (
                <Singleblog item={item} key={item._id}></Singleblog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
