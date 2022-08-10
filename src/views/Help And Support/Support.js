import React from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import './HelpAndSupport.css';
import { NavLink } from 'react-router-dom';


const Support = () => {
  document.title =
    "Contact us for support | Elxer broadband | 24*7 support | Elxer Broadband";
  return (
    <>
      <Header />

      <div id="main">
        <div id="primary" className="pagemid">
          <div id="subheader" className="sleft">
            <div className="subheader-inner">
              <div className="subdesc">
                <h1 className="page-title">24/7 Support</h1>
              </div>
            </div>
          </div>
          <div className="section_row p-b-30">
            <div className="section_inner clearfix">
              <div className="one_third" id="connect_devices">
                <figure>
                  <img
                    loading="lazy"
                    src="https://elxer.com/assets/images/services/customer-support.svg"
                    alt=""
                  />
                </figure>
              </div>
              <div className="two_third last">
                <h2 className="at-fancy-title-v1">We’re here for you 24/7</h2>
                <p>Get in touch with us anytime of the day</p>
                <h4>
                  Superior support and availability are a staple here at Elxer
                  Communications.
                </h4>
                <h4>
                  If you have questions about your account or setting up your
                  Internet connection, we’re here for you 24x7. Our expert team
                  is ready to answer your questions.
                </h4>
                <h4 className="m-t-30 m-b-0">We can be reached at</h4>
                <h2>0771-677-7777</h2>
                <a
                  href="tel:07716777777"
                  className="btn medium flex_button_one"
                >
                  <span className="btn-text">CALL NOW</span>
                </a>
                <h4 className="m-t-30 m-b-0">
                  Please refer to the following email addresses when attempting
                  to email us.
                </h4>
                <h5 className="m-t-10 m-b-0">
                  For questions about service & support please email:
                </h5>
                <h4>
                  <a
                    href="mailto:s&#117;&#112;&#112;o&#114;t&#64;el&#120;&#101;&#114;.&#99;om"
                    className="color-elxer"
                  >
                    &#115;up&#112;or&#116;&#64;&#101;&#108;&#120;&#101;&#114;&#46;&#99;o&#109;
                  </a>
                </h4>
              </div>
              <div className="clearfix"></div>
              <h2 className="textcenter">
                Questions about Elxer? We've got answers. See our{" "}
                <NavLink to="/kb">Knowledge Base</NavLink>
              </h2>
              {/* <!-- <div className="textcenter"><div className="fb-like" data-href="https://elxer.com/" data-width="" data-layout="button" data-action="recommend" data-size="small" data-show-faces="false" data-share="true"></div></div> --> */}
            </div>
            {/* <!-- section_inner --> */}
          </div>
          {/* <!-- section_row --> */}
          <div className="section_row p-t-30 p-b-30">
            <div className="section_inner clearfix">
              <div id="get-app" className="app-banner">
                <div className="content clearfix">
                  <div className="two_third p-t-20">
                    <h2>Join us on mobile!</h2>
                    <h4>
                      Download MyElxer app to stay updated and get in touch
                      right from your phone.
                    </h4>
                    <h4>
                      Manage your account, connect with customer care,
                      <br />
                      recharge/pay your bill, and more.
                    </h4>
                    <div className="m-t-20">
                      <a
                        href="https://elxer.com/mobile-app?utm_source=website&utm_medium=banner&utm_campaign=appdownload"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          loading="lazy"
                          src="https://elxer.com/assets/images/svg/google-play-store-badge.svg"
                          alt="Get it on Google Play"
                          className="download-app"
                        />
                      </a>
                      <p>Available on Android device</p>
                    </div>
                  </div>
                  <div className="one_third aligncenter">
                    <img
                      loading="lazy"
                      src="https://elxer.com/assets/media/app/myelxer.png"
                      alt="MyElxer App"
                      className="app-screen w3-animate-zoom"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- section_inner --> */}
          </div>
          {/* <!-- section_row--> */}
        </div>
        {/* <!-- .pagemid --> */}
      </div>
      {/* <!-- #main --> */}

      <Footer />
    </>
  );
};

export default Support;
