import React, { useState } from "react";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./ContactUs.css";
import captchaImg from "../../assets/images/captcha.jpg";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";

const ContactUs = () => {
  document.title =
    "Contact us for broadband connection | Elxer best broadband in Chhattisgarh | Elxer Broadband";
  const [validation, setValidation] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    state: "",
    pincode: "",
    isValidCaptcha: false,
  });

  const [user, setUser] = useState({
    username: "",
  });

  const characters = "abc123";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const captcha = generateString(6); // Function called here and save in captcha variable

  var handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  };

  // let isValidCaptcha = false;
  var captchaValidation = () => {
    var checkIcon = document.getElementById("checkIcon");
    var clearIcon = document.getElementById("clearIcon");
    var validateBtn = document.getElementById("validateBTN");
    var captchaInput = document.getElementById("captchaInput");
    if (user.username === captcha) {
      setValidation({ isValidCaptcha: true });
      checkIcon.style.display = "flex";
      validateBtn.style.backgroundColor = "green";
      validateBtn.innerHTML = "Correct!";
    }
    if (user.username !== captcha) {
      setValidation({ isValidCaptcha: false });
      validateBtn.style.backgroundColor = "red";
      captchaInput.style.border = "1px solid red";
      validateBtn.innerHTML = "Incorrect!";
      checkIcon.style.display = "none";
      clearIcon.style.display = "flex";
      setTimeout(() => {
        clearIcon.style.display = "none";
        validateBtn.innerHTML = "Validate";
        validateBtn.style.backgroundColor = "#233141";
        captchaInput.style.border = "none";
      }, 5000);
    }
  };

  const submit = () => {
    if (validation.isValidCaptcha === true) {
      var submitMessage = document.getElementById("formActionMessage");
      submitMessage.style.display = "flex";
    } else {
      submitMessage.style.innerHTML = "Please Enter Correct Captcha";
      submitMessage.style.display = "flex";
    }
  };
  return (
    <>
      <Header />
      <div id="main">
        <div id="primary" className="pagemid">
          <div id="subheader" className="sleft">
            <div className="subheader-inner">
              <div className="subdesc">
                <h1 className="page-title">Get in touch with us</h1>
              </div>
            </div>
          </div>
          <div className="section_row contact p-b-0">
            <div className="section_inner clearfix">
              <div className="one_third aligncenter" id="support_service">
                <div className="features-box">
                  <figure className="m-b-20">
                    <img
                      loading="lazy"
                      src="https://elxer.com/assets/images/icons/24-hours-support.svg"
                      alt="Customer Care"
                    />
                  </figure>
                  <h4>Customer Care</h4>
                  <h3>
                    0771 677 7777
                    <br />
                    &#115;&#117;ppor&#116;&#64;e&#108;&#120;er&#46;com
                  </h3>
                </div>
              </div>
              <div className="one_third aligncenter" id="internet_service">
                <div className="features-box">
                  <figure className="icon-support m-b-20">
                    {/* <!-- <i className="fa fa-briefcase"></i> --> */}
                    <img
                      loading="lazy"
                      src="https://elxer.com/assets/images/icons/sales.svg"
                      alt="Sales"
                    />
                  </figure>
                  <h4>Sales</h4>
                  <h3>
                    0771 477 7777
                    <br />
                    sa&#108;e&#115;&#64;e&#108;&#120;er&#46;com
                  </h3>
                </div>
              </div>
              <div className="one_third aligncenter" id="franchise_service">
                <div className="features-box">
                  <figure className="icon-support m-b-20">
                    {/* <!-- <i className="fa fa-map-o"></i> --> */}
                    <img
                      loading="lazy"
                      src="https://elxer.com/assets/images/icons/address.svg"
                      alt="Address"
                    />
                  </figure>
                  <h4>Address</h4>
                  <h5>
                    <strong>
                      2nd Floor, Muskaan Plaza, Ashwini Nagar, Mahadev Ghat Rd,
                      Mukut Nagar, Raipur, Chhattisgarh 492013
                    </strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="section_inner clearfix">
              <h2>Send Message</h2>
              <p>
                We are here to answer any questions you may have about our
                experiences. <br />
                Reach out to us and we’ll respond as soon as we can.
              </p>
              <div id="formActionMessage">
                <span>
                  Thank You For your response, We will reach out to you as soon
                  as possible
                </span>
              </div>
              <div id="form_message">
                <form action="/contact" className="wpcf7" id="contact_form">
                  <div className="ats-columns-wrap">
                    <div className="one_third">
                      <div className="ats-column__1_2 at-checkaval__inputs">
                        <span>
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required="required"
                            autoComplete="nope"
                            // onChange={(e) => setValidation({name: e.target.value})}
                            // value=""
                          />
                        </span>
                      </div>
                      <div className="ats-column__1_2 at-checkaval__inputs">
                        <span>
                          <input
                            type="number"
                            name="mobile"
                            id="mobile"
                            maxLength="10"
                            placeholder="Your Mobile"
                            required="required"
                            autoComplete="nope"
                            // value=""
                            style={{ padding: "0.9rem" }}
                          />
                          {/* <div id="error_mobile"></div> */}
                        </span>
                      </div>
                      <div className="ats-column__1_2 at-checkaval__inputs">
                        <span>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required="required"
                            autoComplete="nope"
                            // value=""
                          />
                          <div id="error_email"></div>
                        </span>
                      </div>
                      <div className="ats-column__1_2 at-checkaval__inputs">
                        <span>
                          <select
                            className="check_select"
                            id="connection_type"
                            name="connection_type"
                          >
                            <option value="0">Select Connection Type</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                          </select>
                          <div id="error_connection_type"></div>
                        </span>
                      </div>
                      <div className="ats-column__1_2">
                        <span className="at-checkaval__inputs">
                          <textarea
                            name="address"
                            id="address"
                            cols="40"
                            rows="10"
                            placeholder="Address"
                          ></textarea>
                        </span>
                      </div>
                    </div>
                    <div className="one_third">
                      <div className="ats-column__1_2 at-checkaval__inputs">
                        <span>
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            required="required"
                            autoComplete="nope"
                            // value=""
                          />
                        </span>
                      </div>
                      <div className="ats-column__1_2 at-checkaval__inputs">
                        <span>
                          <input
                            type="text"
                            name="state"
                            placeholder="State"
                            required="required"
                            autoComplete="nope"
                            // value=""
                          />
                        </span>
                      </div>
                      <div className="ats-column__1_2 at-checkaval__inputs">
                        <span>
                          <input
                            type="tel"
                            name="pincode"
                            id="pincode"
                            maxLength="6"
                            placeholder="Pincode"
                            required="required"
                            autoComplete="nope"
                            // value=""
                          />
                          <div id="error_pincode"></div>
                        </span>
                      </div>
                      <h2 style={{ position: "absolute", marginLeft: "20px" }}>
                        {captcha}
                      </h2>
                      <div className="ats-column__1_2 at-checkaval__inputs">
                        <img
                          src={captchaImg}
                          className="mt-1"
                          style={{ width: "100%", height: "44px" }}
                          alt = "captcha"
                        />
                      </div>
                      <div className="ats-column__1_2 at-checkaval__inputs">
                        <input
                          type="text"
                          name="username"
                          id="captchaInput"
                          maxLength="6"
                          placeholder="Enter Captcha"
                          required="required"
                          autoComplete="nope"
                          // value=""
                          onChange={handleChange}
                        />
                        <CheckIcon id="checkIcon" />
                        <ClearIcon id="clearIcon" />
                        <Button id="validateBTN" onClick={captchaValidation}>
                          Validate
                        </Button>
                      </div>

                      <div className="clearfix"></div>
                      <input
                        type="submit"
                        value="REQUEST A CALL"
                        style={{ width: "97%" }}
                        onClick={submit}
                      />
                    </div>
                    <div className="one_third last" id="customer_support">
                      <figure>
                        <img
                          loading="lazy"
                          src="https://elxer.com/assets/images/svg/free-consult.svg"
                          alt="Contact Us"
                        />
                      </figure>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- section_inner --> */}
            <div className="section_inner m-t-20 clearfix">
              <h2>Locate us on Map</h2>
            </div>
            <div id="googleMap" className="map-container bg-elxer">
              <iframe
                title="Elxer Google Maps Location"
                width="1500"
                height="420"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=1500&amp;height=420&amp;hl=en&amp;q=elxer%20Raipur+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>{" "}
              <a href="https://www.embed-map.net/">
                google maps embed directions
              </a>{" "}
              <script
                type="text/javascript"
                src="https://embedmaps.com/google-maps-authorization/script.js?id=d480956675bf0e23b9e10388f3bb67ab6f0606ea"
              ></script>
            </div>
            {/* <!-- section_inner --> */}
          </div>
          {/* <!-- section_row --> */}
        </div>
        {/* <!-- .pagemid --> */}
      </div>
      {/* <!-- #main --> */}
      <Footer />
    </>
  );
};

export default ContactUs;
