import React from 'react'
import Header from '../../../Common/Header/Header';
import Footer from '../../../Common/Footer/Footer';
import { NavLink } from 'react-router-dom';

const Broadband = () => {
  return (
    <>
        <Header/>
        <div id="main">
            <div id="primary" className="pagemid">
                <div className="page-wrapper">
                    <div className="back-container">
                        <div className="inner">
                            <NavLink to="/corporate">
                                <svg width="18" height="18" fill="#fff" style={{verticalAlign: 'sub'}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 447.243 447.243" xmlSpace="preserve">
                                    <g><g><path d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88C449.654,211.494,437.806,195.059,420.361,192.229z"></path></g></g>
                                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                </svg>
                                <span id='enterprise-back-btn'>&nbsp;&nbsp;Back to Enterprise Internet</span>
                            </NavLink>
                        </div>
                        {/* <!-- section_inner --> */}
                    </div>
                    {/* <!-- section_row --> */}
                    <div className="section_row p-t-40 p-b-40">
                        <div className="section_inner">
                            <div className="aligncenter">
                                <h2>Get Elxer Leased Line connection for your business!!</h2>
                                <p>Slow and Interrupted Internet Connectivity is detrimental for any business.
                                    Organizations need to have more reliable, quick, continuous, and stable Internet
                                    connections in order to stay ahead of the competitors. Some organizations tend
                                    to pick an unreliable internet connection due to which the working condition in
                                    the company becomes slower and as a result they have to compromise in the
                                    performance and output of business activities. Elxer Enterprise Leased Line
                                    Services is specifically for the business to ensure that organizations get
                                    access to their own higher speed internet, Faster uploads and downloads, a
                                    reliable connection and the best support.</p>
                                <h3 className="m-t-40 m-b-30">Advantages of ELXER Enterprise ILL</h3>
                            </div>
                            <div className="clearfix">
                                <div className="one_half">
                                    <div className="why-choose-features m-t-30">
                                        <p>
                                            <img src="https://elxer.com/assets/images/icons/exclusive.svg" alt=""/>
                                            <span>Scalable bandwidth to suit business needs & expansion</span>
                                        </p>
                                        <p>
                                            <img src="https://elxer.com/assets/images/icons/router.svg" alt=""/>
                                            <span>End-to-End service level agreements for latency, uptime & packet loss.</span>
                                        </p>
                                        <p>
                                            <img src="https://elxer.com/assets/images/icons/meter.svg" alt=""/>
                                            <span>Fastest and consistency in performance </span>
                                        </p>
                                        <p>
                                            <img src="https://elxer.com/assets/images/icons/speedometer.svg" alt=""/>
                                            <span>Most reliable and secure connectivity through a single provider </span>
                                        </p>
                                        <p>
                                            <img src="https://elxer.com/assets/images/icons/graph.svg" alt=""/>
                                            <span>Lowest latency internet connectivity</span>
                                        </p>
                                        <p>
                                            <img src="https://elxer.com/assets/images/icons/help.svg" alt=""/>
                                            <span>Dedicated Internet connection with 24*7 availability, backed by our enterprise-grade SLAs.</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="one_half">
                                    <div className="box p-20">
                                        <h4 className="aligncenter">Get your own Elxer leased line connection Now!!</h4>
                                        <form id="corporate-enquiry" className="corporate-enquiry-form">
                                            <div className="ats-column__1_2 at-checkaval__inputs">
                                                <input type="text" name="company" placeholder="Business / Organization" required/>
                                            </div>
                                            <div className="ats-columns-wrap">
                                                <div className="ats-column__1_2 at-checkaval__inputs one_half">
                                                    <input type="text" name="name" placeholder="Name" required pattern="[A-Za-z ]+" title="No Special characters allowed!"/>
                                                </div>
                                                <div className="ats-column__1_2 at-checkaval__inputs one_half">
                                                    <input type="tel" name="mobile" placeholder="Mobile number" pattern="[6789][0-9]{9}" required maxLength="10" title="Mobile number should starts with 6-9 only!" autoComplete="off"/>
                                                </div>
                                            </div>
                                            <div className="ats-columns-wrap">
                                                <div className="ats-column__1_2 at-checkaval__inputs one_half">
                                                    <input type="email" name="email" placeholder="Email" required/>
                                                </div>
                                                <div className="ats-column__1_2 at-checkaval__inputs one_half">
                                                    <input type="text" name="designation" placeholder="Your Designation" required />
                                                </div>
                                            </div>
                                            <div className="ats-column__1_2 at-checkaval__inputs">
                                                <textarea name="address" rows="5" required placeholder="Address"></textarea>
                                            </div>
                                            <input type="hidden" name="segment" value="ill"/>
                                            <button type="submit">Enquire Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- section_inner --> */}
                    </div>
                    {/* <!-- section_row --> */}
                </div>
            </div>
            {/* <!-- .pagemid --> */}
        </div>
        {/* <!-- #main --> */}
        <Footer/>
    </>
  )
}

export default Broadband