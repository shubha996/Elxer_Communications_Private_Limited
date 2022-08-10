import React, { useContext, useEffect, useRef, useState } from 'react'
import './AboutUs.css'
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import { motion } from 'framer-motion'
import ApiContext from '../../ContextApi';

const About = () => {
  document.title = 'About us | Elxer broadband | Internet service provider | Elxer Broadband';
  const {aboutUs, home} = useContext(ApiContext);
  const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(()=> {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
  return (
    <>
        <Header/>
        <div id="main">
            <div id="primary" className="pagemid">
                <div id="subheader" className="sleft">
                    <div className="subheader-inner">
                        <div className="subdesc">
                            <h1 className="page-title">About Us</h1>
                        </div>
                    </div>
                </div>
                <div className="section_row ">
                {/* {
                    aboutUs?.map((item, index) => {
                        return(
                        <div className='clearfix'>
                            <div className="section_inner">
                                <div className={item.id % 2 === 0 ? "one_third last w3-animate-right": "one_third w3-animate-left"}>
                                    <figure>
                                        <img loading="lazy" src={item.image_url} alt={item.title}/>
                                    </figure>
                                </div>
                                <div className={item.id % 2 === 0 ? "two_third last" : "two_third"}>
                                    <h2 className="at-fancy-title-v1">{item.title}</h2>
                                    <div dangerouslySetInnerHTML={{__html: item.content}}/>
                                </div>
                            </div>
                        </div>
                        )
                    })
                } */}
                    <div className="section_inner clearfix">
                        <div className="one_third w3-animate-left">
                            <figure>
                                <img loading="lazy" src="https://elxer.com/assets/images/services/elxer_fastest_internet.svg" alt=""/>
                            </figure>
                        </div>
                        <div className="two_third last">
                            <h2 className="at-fancy-title-v1">Fastest Internet Provider</h2>
                            <h4>Elxer Communications Private Limited is an internet services provider (ISP) that
                                caters to both home and business segments providing internet services ranging from
                                10 Mbps to 100 Mbps. </h4>
                            <p>We constantly strive to improve the quality of internet service by enabling the
                                customers to enjoy more. This vision has helped us to develop innovative products &
                                solutions that would help customers with enhanced user experience. We have tailored
                                our offerings for More Speed, More Entertainment, More Productivity, More Time, More
                                Fun, More Flexibility, More Devices, and Overall More value.</p>
                            <p>To know more about our installation process, kindly visit our <a className="color-elxer"
                                    href="/support">Support</a> section and for further queries you
                                can call our technical helpline number on <a className="color-elxer"
                                    href="tel:07716777777">0771 677 7777</a>.<br /> We are happy to assist you :)
                            </p>
                        </div>
                    </div>
                    <div className="section_inner clearfix">
                        <div className="two_third">
                            <h2>Solutions and Products</h2>
                            <p>We cater to home/ residential customer and business customer segments. For home
                                customer segment, we offer ultra – high speed broadband services and plans to
                                provide a wide portfolio of enriched VAS and application. Home Broadband services,
                                are offered over Fiber to the Home (FTTH) and Fiber to the Neighbourhood (FTTN)
                                networks at speeds starting 10 Mbps and soaring all the way to 100 Mbps. Choices are
                                available at 15 Mbps, 20 Mbps and 50 Mbps also.Elxer offers the advantage of
                                complementary Wi-Fi service in the common areas of Residential Apartment Campuses,
                                and in next-door popular markets.</p>
                            <p>For business customers, Elxer offers Dedicated Internet Leased Line, Campus Wi-Fi
                                with managed authentication and billing, Security and Surveillance Solutions, VoIP,
                                Hosted Content Delivery Network/ Video Apps, Hosted Applications like Hosted PBX,
                                Hosted Contact Centre, Virtual/ Cloud Computing, Remote Storage, Conferencing,
                                Computing Capacity on Demand, Web Hosting, Content Hosting and Co-location, OTT Box
                                Application in select segments – Hotels, Banks, Education, Healthcare, amongst
                                others.</p>
                        </div>
                        <div className="one_third last w3-animate-right">
                            <figure><img loading="lazy"
                                    src="https://elxer.com/assets/images/services/elxer_product_solutions.svg"
                                    alt=""/></figure>
                        </div>
                    </div>
                    <div className="section_inner clearfix">
                        <div className="one_third w3-animate-left">
                            <figure><img loading="lazy"
                                    src="https://elxer.com/assets/images/services/elxer_different_factors.svg"
                                    alt=""/></figure>
                        </div>
                        <div className="two_third last p-40">
                            <h2>Differentiating Factors</h2>
                            <p>Due to our unique franchise model and state of the art support system our market
                                share is more than 75% among non-telco Internet Service Providers. We cover more
                                than 70% of habitable Chhattisgarh. </p>
                            <p>In July 2017, we completed hiring for B2B team from various telcos with more than two
                                decades of combined telecom experience.</p>
                        </div>
                    </div>
                    <div className="section_inner clearfix">
                        <div className="two_third">
                            <h2>Organizational Culture</h2>
                            <p>The company follows an open-door policy, allowing its employees to pitch in their
                                concerns, feedback, etc to the top management directly. We believe that if there is
                                proper coordination among the employees then they will perform better.</p>
                            <p>We also sponsor employees to learn any skills that may help in contribution for
                                innovation among the company services.</p>
                        </div>
                        <div className="one_third last w3-animate-right">
                            <figure><img loading="lazy"
                                    src="https://elxer.com/assets/images/services/elxer_work_culture.svg" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="section_row bg-clients p-t-20 p-b-30">
                    <div className="section_inner aligncenter">
                        <h2>Happy Customers. Happy Us.</h2>
                        <h4 className="m-b-50">A few of our happy customers!</h4>
                        <div>
                        <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
                            <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                            {
                                home.clients.map((data, index) => {
                                    return(
                                        <motion.div className='item clientthumb' key={index}>
                                            <img src={data.image} alt={data.title} />
                                        </motion.div>
                                    )
                                })
                            }
                            </motion.div>
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default About