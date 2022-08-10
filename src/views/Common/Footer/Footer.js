import React from "react";
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div id="footer" >
        {/* FOOTER HEADER CONTAINER */}
        <div className="footer-area-top">
          <div className="inner" >
            <aside id="text-5" className=" widget widget_text">
              <div className="textwidget">
                <div className="at-callOutBox p-t-30 p-b-30">
                  <div className="at-callOut_inner">
                    <div className="at-callOut-action whitetext">
                      <div className="at-callOut_text">
                        <div className="at-callout-action-text">
                          <h2 className="m-b-0">
                            Find the right Broadband Internet plan for you.
                          </h2>
                          <h4 className="m-b-0">
                            Get Discount upto 20% on Quarterly, Half yearly and
                            Annual plans!
                          </h4>
                        </div>
                      </div>
                      <div className="at-callOut_btn">
                        <div className="btn at-callout-action-button">
                          <NavLink
                            to="/packages"
                            className="btn medium btn-primary"
                            style={{backgroundColor: '#233141', borderColor: '#233141'}}
                          >
                            <span className="btn-text" style={{padding: '5px 14px',
                              letterSpacing: '0.02rem'}}>GET STARTED</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        {/* FOOTER HEADER CONTAINER */}
        {/* FOOTER MAIN LINKS CONTAINER */}
        <div className="footer-area-middle">
          <div className="inner">
            <h2 className="font-outer m-b-20">ELXER</h2>
            <div className="clearfix"></div>
            <div className="inner-row">
              <aside className="widget widget_text col_3">
                <h3 className="widget-title">Our Offerings</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      <NavLink to="/new-connection">New Broadband Connection</NavLink>
                    </li>
                    <li>
                      <NavLink to="/packages/Raipur">Broadband plans for Raipur</NavLink>
                    </li>
                    <li>
                      <NavLink to="/packages/Bhilai">Broadband plans for Bhilai</NavLink>
                    </li>
                    <li>
                      <NavLink to="/packages/Durg">Broadband plans for Durg</NavLink>
                    </li>
                    <li>
                      <NavLink to="/packages/Bhatapara">Broadband plans for Bhatapara</NavLink>
                    </li>
                    <li>
                      <NavLink to="/packages/Raigarh">Broadband plans for Raigarh</NavLink>
                    </li>
                    <li>
                      <NavLink to="/packages/Kanker">Broadband plans for Kanker</NavLink>
                    </li>
                    <li>
                      <NavLink to="/packages/Korba">Broadband plans for Korba</NavLink>
                    </li>
                  </ul>
                </div>
                <h3 className="widget-title">About Us</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      <NavLink to="/about">Who We Are?</NavLink>
                    </li>
                    <li>
                      <NavLink to="/careers">Careers<span className="footer-badge">We're hiring!</span></NavLink>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="widget widget_text col_3">
                <h3 className="widget-title">Services</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      <NavLink to="/corporate/leased-line">Enterprise Leased Line</NavLink>
                    </li>
                    <li>
                      <NavLink to="/corporate/broadband">Commercial Broadband</NavLink>
                    </li>
                  </ul>
                </div>
                <h3 className="widget-title">I want to</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      <NavLink to="/pay">Recharge Online</NavLink>
                    </li>
                    <li>
                      <NavLink to="/pay">Pay My Bill Online</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new-connection" target="_blank" rel="noreferrer">Order Service</NavLink>
                    </li>
                  </ul>
                </div>
                <h3 className="widget-title">Compliance</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      <NavLink to="/terms">Terms of Use</NavLink>
                    </li>
                    <li>
                      <NavLink to="/privacy">Privacy Policy</NavLink>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="widget widget_text col_3">
                <h3 className="widget-title">Contact</h3>
                <div className="textwidget">
                  <ul className="contact-list">
                    <li>
                      <a href="tel:07716777777">0771-677-7777</a>
                    </li>
                    <li>
                      <a href="mailto:&#115;&#117;ppo&#114;&#116;&#64;&#101;&#108;&#120;er.&#99;&#111;m">
                        supp&#111;rt&#64;e&#108;x&#101;r.&#99;&#111;&#109;
                      </a>
                    </li>
                    <li>
                      or <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
                <h3 className="widget-title">Help & Support</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      <NavLink to="/support">Support</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faqs">FAQs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/kb">Knowledge Base</NavLink>
                    </li>
                  </ul>
                </div>
                <h3 className="widget-title">Join the community</h3>
                <div className="textwidget">
                  <div className="iva_socials">
                    <a
                      className="at-social-link iva_tip facebook"
                      href="https://www.facebook.com/elxercommunications/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook fa-fw"></i>
                      <span className="ttip">Facebook</span>
                    </a>
                    <a
                      className="at-social-link iva_tip twitter"
                      href="https://twitter.com/elxercom"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-twitter fa-fw"></i>
                      <span className="ttip">Twitter</span>
                    </a>
                    <a
                      className="at-social-link iva_tip instagram"
                      href="https://www.instagram.com/elxercom"
                      target="_blank"
                      rel="noreferrer"
                      style={{backgroundColor: "#E4405F"}}
                    >
                      <i className="fa fa-instagram fa-fw" ></i>
                      <span className="ttip">Instagram</span>
                    </a>
                    <a
                      className="at-social-link iva_tip linkedin"
                      href="https://www.linkedin.com/company/elxercom"
                      target="_blank"
                      rel="noreferrer"
                      
                    >
                      <i className="fa fa-linkedin fa-fw"></i>
                      <span className="ttip">Linkedin</span>
                    </a>
                  </div>
                </div>
              </aside>
              <aside className="widget widget_text col_3">
                <NavLink
                  to="/feedback"
                  target="_blank" rel="noreferrer"
                  className="btn-shouting feedback pulse m-b-20"
                >
                  <svg
                    fill="#233141"
                    enableBackground="new 0 0 511.987 511.987"
                    height="48"
                    viewBox="0 0 511.987 511.987"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="XMLID_75_">
                      <g id="XMLID_724_">
                        <path
                          id="XMLID_816_"
                          d="m491.007 5.907c-20.045-11.575-45.767-4.681-57.338 15.364l-57.212 99.095h-123.383c-5.523 0-10 4.478-10 10s4.477 10 10 10h111.836l-41.518 71.912h-233.39c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10h221.842l-23.094 40h-198.748c-5.523 0-10 4.478-10 10s4.477 10 10 10h194.612l-4.309 40h-190.303c-5.523 0-10 4.478-10 10s4.477 10 10 10h188.148l-.532 4.939c-.424 3.936 1.514 7.752 4.942 9.731 1.553.897 3.278 1.34 4.999 1.34 2.079 0 4.151-.647 5.9-1.925l63.851-46.645c1.125-.822 2.065-1.869 2.761-3.075l77.929-134.975v193.827c0 22.406-18.229 40.636-40.636 40.636h-231.751c-3.573 0-6.874 1.906-8.66 5l-34.967 60.565-34.967-60.565c-1.786-3.094-5.087-5-8.66-5h-17.723c-22.407 0-40.636-18.23-40.636-40.636v-194.493c0-22.406 18.229-40.636 40.636-40.636h102.439c5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10h-102.439c-33.435 0-60.636 27.201-60.636 60.636v194.493c0 33.435 27.201 60.636 60.636 60.636h11.949l40.741 70.565c1.786 3.094 5.087 5 8.66 5s6.874-1.906 8.66-5l40.741-70.565h225.978c33.435 0 60.636-27.201 60.636-60.636v-194.493c0-8.572-1.818-17.04-5.295-24.804l53.666-92.952c11.572-20.044 4.68-45.766-15.365-57.339zm-10 17.32c10.494 6.059 14.102 19.525 8.043 30.019l-5.714 9.897-38.061-21.975 5.714-9.897c6.059-10.493 19.524-14.1 30.018-8.044zm-176.679 272.779 28.786 16.62-33.188 24.245zm43.423 1.977-38.061-21.975 125.585-217.52 38.061 21.975z"
                        />
                        <path
                          id="XMLID_819_"
                          d="m208.07 140.367c2.63 0 5.21-1.07 7.08-2.93 1.86-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07c-1.87-1.859-4.44-2.93-7.08-2.93-2.63 0-5.21 1.07-7.07 2.93s-2.92 4.44-2.92 7.07 1.059 5.21 2.92 7.07c1.87 1.86 4.44 2.93 7.07 2.93z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>We're Listening!!</span>
                  <br />
                  Your feedback matters!
                </NavLink>
                <NavLink
                  to="/refer-friends"
                  className="btn-shouting m-b-20"
                  target="_blank"
                  rel="noreferrer"
                > 
                  <span>Refer a Friend</span>
                  <br />
                  You both will receive exciting offers!
                </NavLink>
                <div id='iframe-div' className="features-box m-0" style={{minHeight:"200px"}}>
                  <div className="fb-page fb_iframe_widget" data-href="https://www.facebook.com/elxercommunications" data-tabs="timeline,messages" data-width="" data-height="200" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=246&amp;height=200&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Felxercommunications&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline%2Cmessages&amp;width=">
                      <span style={{verticalAlign: "bottom", width: "246px", height: "200px"}}>
                          <iframe name="fd4b960f779308" width="1000px" height="200px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder="0" allowtransparency="true" allowFullScreen={true} scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v6.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3a744660b7b5a4%26domain%3Delxer.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Felxer.com%252Ff3665ba6649725c%26relation%3Dparent.parent&amp;container_width=246&amp;height=200&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Felxercommunications&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline%2Cmessages&amp;width=" style={{border: "none", visibility: "visible", width: "246px", height: "200px"}} className=""></iframe>
                      </span>
                  </div>
                </div>
              </aside>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        {/* FOOTER MAIN LINKS CONTAINER */}
        {/* COPYRIGHT AREA CONTAINER */}
        <div className="copyright">
          <div className="inner">
            <div className="copyright_left">
              &copy; Copyright 2022 Elxer Communications Private Limited. All
              Rights Reserved.
            </div>
            <div className="copyright_right">
              <small>
                *All the prices are exclusive of GST. *Installation, equipment
                fees, taxes & other fees apply
              </small>
            </div>
          </div>
        </div>
        {/* COPYRIGHT AREA CONTAINER */}
      </div>
    </>
  );
};

export default Footer;
