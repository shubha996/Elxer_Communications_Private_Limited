import React, { useState } from 'react'
import './isppro-frontend-style.css'
// import './menu.css'
import './style.css'
import './NewConnection.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const NewConnection = () => {
    document.title = 'Get new connection quickly and easily - High Speed Internet Service Provider in Raipur, Bhilai-Durg, Bhatapara, Raigarh';
    const [menu, setMenu] = useState(false);

  return (
    <>
        {/* <div id="preloader">
            <div data-loader="circle-side"></div>
        </div> */}
        {/* <!-- /Preload --> */}
        <nav>
            <ul className="cd-primary-nav" style={{display: "none"}}>
                <li><NavLink to="/" className="animated_link">Home</NavLink></li>
                <li><NavLink to="/packages" className="animated_link">Plans</NavLink></li>
                <li><NavLink to="/support" className="animated_link">Get Help</NavLink></li>
                <li><NavLink to="/contact" className="animated_link">Contact Us</NavLink></li>
            </ul>
        </nav>
        <div>
            {
                menu? <CloseIcon id="menuIcon-NewConnection" onClick = {() => setMenu(false)}/> : <MenuIcon id="menuIcon-NewConnection" onClick = {() => setMenu(true)}/>
            }
            {
                menu? (
                <div className='newConnection-MenuNav'>
                    <nav>
                        <ul className="cd-primary-nav">
                            <li><NavLink to="/" className="animated_link">Home</NavLink></li>
                            <li><NavLink to="/packages" className="animated_link">Plans</NavLink></li>
                            <li><NavLink to="/support" className="animated_link">Get Help</NavLink></li>
                            <li><NavLink to="/contact" className="animated_link">Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>                  
                ) : ("")
            }
        </div>
        {/* <!-- /menu --> */}
        <div className="container-fluid full-height">
            <div className="row row-height">
                <div className="col-lg-5 content-left">
                    <div className="content-left-wrapper">
                        <NavLink to="/" target="_blank" rel="noreferrer" id="logo" className="font-outer">ELXER</NavLink>
                        <div id="social">
                            <ul>
                                <li><a href="https://www.facebook.com/elxercommunications/" target="_blank" rel="noreferrer"><i
                                            className="fa fa-facebook newConnection-social"></i></a></li>
                                <li><a href="https://twitter.com/elxercom" target="_blank" rel="noreferrer"><i className="fa fa-twitter newConnection-social"></i></a>
                                </li>
                                <li><a href="https://www.instagram.com/elxercom" target="_blank" rel="noreferrer"><i
                                            className="fa fa-instagram newConnection-social"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/elxercom" target="_blank" rel="noreferrer"><i
                                            className="fa fa-linkedin newConnection-social"></i></a></li>
                            </ul>
                        </div>
                        {/* <!-- /social --> */}
                        <div>
                            <figure><img src="https://elxer.com/assets/new_connection/images/elxer_fast_broadband.png" alt=""
                                    className="img-fluid"/></figure>
                            <h2>#SuperFast #Broadband </h2>
                            <p>#Elxer Providing high-speed, reliable #Internet connection and efficient 24*7 services to our
                                customers at an affordable price. Now watch movies & live crickets without buffering <NavLink
                                    to="/" target="_blank" rel="noreferrer" className="">know more...</NavLink>
                            </p>
                        </div>
                        <div className="copy">&copy; 2019 Elxer Communications Private Limited.</div>
                    </div>
                    {/* <!-- /content-left-wrapper --> */}
                </div>
                {/* <!-- /content-left --> */}
            <div className="col-lg-7 content-right" id="start">
                <div id="wizard_container">
                    {/* <!-- /top-wizard --> */}
                    <form autoComplete="off" action="" method="POST" enctype="multipart/form-data">
                        <input id="website" name="website" type="text" value=""/>
                        <div id="middle-wizard">
                            {/* <!-- /step--> */}
                            <div className="step row">
                                <div className="col-lg-11">
                                    <h2 className="at-fancy-title-v1">Get new connection quickly and easily.</h2>
                                    <h3 className="main_question">Enter your mobile number to continue<br/><small>Mobile
                                            number should be 10 digit long and starts with 6-9 only without +91</small>
                                    </h3>
                                </div>
                                <div className="col-lg-8" id="mobile_field">
                                    <div className="form-group">
                                        <input type="text" maxLength="10" name="mobile" id="mobile"
                                            className="form-control required" placeholder="Enter Mobile Number" value=""
                                            autoComplete="nop"/>
                                        <input type="hidden" name="lat" id="lat"/>
                                        <input type="hidden" name="long" id="long"/>
                                        <input type="hidden" name="state" id="state"/>
                                        <input type="hidden" name="city" id="city"/>
                                        <input type="hidden" name="pincode" id="pincode"/>
                                        <input type="hidden" name="referral_id" id="referral_id"/>
                                        <p id="error_mobile"></p>
                                        <button id="order_request" name="order_request" type="button" className="order_request" style={{display: "none"}}>Request Order</button>
                                    </div>
                                </div>
                                <div className="col-lg-8" id="otp_verify" style={{display: "none"}}>
                                    <div className="form-group">
                                        <input type="password" maxLength="4" name="otp" id="otp"
                                            className="form-control required" placeholder="Enter OTP" value=""/>
                                        <p id="error_otp"></p><button id="order_now" name="order_request" type="button"
                                            className="order_request m-b-10" style={{display: "none"}}>Order Now</button>
                                        <div className="countdown text-danger"></div><button type="button"
                                            className="order_request resend_otp" id="resend_otp"
                                            style={{display: "none"}}>Resend OTP</button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /step--> */}
                        </div>
                    </form>
                </div>
                {/* <!-- /Elxer container --> */}
            </div>
            {/* <!-- /content-right--> */}
        </div>
        {/* <!-- /row--> */}
    </div>
    {/* <!-- /container-fluid --> */}
    <div className="cd-overlay-nav"><span></span></div>
    {/* <!-- /cd-overlay-nav --> */}
    <div className="cd-overlay-content"><span></span></div>
    {/* <!-- /cd-overlay-content --> */}
    <div>
    {/* <a href="#0" className="cd-nav-trigger">Menu<span className="cd-icon"></span></a> */}
        {/* <!-- /menu button --> */}
    </div>
    </>
  )
}

export default NewConnection