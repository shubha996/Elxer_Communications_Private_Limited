import React from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import "./ReferFriends.css";
import "./ReferFriendsSourceFolder.css";

const ReferFriends = () => {
  document.title = 'Refer a Friend | Elxer Broadband';
  return (
    <>
      <Header />
      <div id="main">
        <div id="primary" className="pagemid">
          <div id="referral-program">
            <div className="section_row refer-friend-hero p-b-40">
              <div className="section_inner clearfix">
                <div className="two_third content">
                  <h2 className="at-fancy-title-v1">
                    The more you REFER, the more you EARN!
                  </h2>
                  <p className="m-t-40">
                    Refer Elxer Internet/Broadband services to your friends or
                    family and get the discount of Rs- 250/- on your next bill.
                    We have a strong customer referral program where we provide
                    discounts and other benefits to the customer who refers. The
                    referral benefit is activated after successful & verified
                    purchase of your friend/family.
                  </p>
                  <h3 className="m-t-40">
                    Assist us in connecting the world with the best fiber
                    internet connection and tell the world about our fast and
                    best Internet connection.
                  </h3>
                </div>
                <div className="one_third last">
                  <div className="refer-box">
                    <div className="refer-box-body">
                      {/* <form id="refer-friends-form"> */}
                      <h4 className="refer-box-title m-b-20">
                        Just share Friend/Relative's details who need
                        connection!
                      </h4>
                      <div className="auth-template">
                        <div className="form-group text-left mobile-wrapper">
                          <label htmlFor="mobile">
                            Enter your Registered mobile number
                            <small> (without +91)</small>
                          </label>
                          <div className="input-wrapper">
                            <input
                              type="tel"
                              name="mobile"
                              id="mobile"
                              required
                              placeholder="Registered mobile number"
                              pattern="[6789][0-9]{9}"
                              maxLength="10"
                              title="Mobile number should starts with 6-9 only!"
                              autoComplete="off"
                            />
                            <button type="button">Get OTP</button>
                          </div>
                        </div>
                        <div className="form-group text-left otp-wrapper">
                          <label htmlFor="mobile">Enter OTP</label>
                          <div className="input-wrapper">
                            <input
                              type="tel"
                              name="otp"
                              id="otp"
                              required
                              placeholder="OTP"
                              pattern="[0-9]{4}"
                              maxLength="4"
                              title="OTP should be numbers only!"
                              autoComplete="off"
                            />
                            <button type="button">Verify</button>
                          </div>
                          <div className="resend-otp-timer">
                            Resend OTP in <span className="counter">30</span>s
                          </div>
                          <div className="resend-otp-btn">Resend OTP</div>
                        </div>
                      </div>
                      {/* <response></response> */}
                      <div className="refer-template"></div>
                      <div className="success-template"></div>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section_row benefits p-b-20">
              <div className="section_inner">
                <div className="box-block m-t-80 p-b-0 clearfix">
                  <div className="one_half">
                    <h3>What's in it for you</h3>
                    <h4>
                      A discount of Rs- 250/- on your next bill, post successful
                      activation of services at your Friend’s/family’s premises,
                      besides this, Top priority will be given to your
                      concerns/complaints regarding your Internet problem.
                    </h4>
                  </div>
                  <div className="one_half refer-friends-image">
                    <figure>
                      <img
                        src="https://elxer.com/assets/images/refer-friends.png"
                        alt="Refer and Earn"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              {/* <!-- section_inner --> */}
            </div>
            {/* <!-- section_row --> */}
            <div className="section_row how-it-works">
              <div className="section_inner">
                <h2>How it works</h2>
                <figure>
                  {" "}
                  <img
                    src="https://elxer.com/assets/images/svg/refer-now-how-it-works.svg"
                    alt="Refer and Earn"
                  />{" "}
                </figure>
              </div>
              {/* <!-- section_inner --> */}
            </div>
            {/* <!-- section_row --> */}
            <div id="referral-program-tnc" className="section_row p-b-20">
              <div className="section_inner clearfix">
                <h3>Terms and Conditions</h3>
                <ol>
                  <li>
                    The Referral Scheme offer is valid only for existing Active
                    Subscribers (Referred as "Referrer Subscriber") who are
                    currently availing Elxer Fiber Internet Services and does
                    not apply to our SME customers.
                  </li>
                  <li>
                    The Referrer Subscriber is entitled to refer any number of
                    new customers (hereinafter referred as "Referred
                    Subscriber") for Elxer, however the Referral benefit shall
                    be conferred only once per customer.
                  </li>
                  <li>
                    The Referral benefit is given in the form of ₹250/- discount
                    on the next bill/recharge of subscribed plan. This is
                    regardless of whether the user is on a monthly plan or a
                    fixed-term plan of 6 months or 12 months and is applicable
                    for the referrals done.
                  </li>
                  <li>
                    The user would be eligible for Referral benefit if the
                    reference is made through the Elxer website.
                  </li>
                  <li>
                    This plan shall apply only when the Referrer Subscriber at
                    the time of making the referral does not have any dues
                    payable to Elxer in his Account.
                  </li>
                  <li>
                    The Referrer Subscriber is free to refer any subscriber
                    where Elxer is currently functional and is providing
                    internet broadband services.
                  </li>
                  <li>
                    The Referral Scheme may be changed/ modified/ altered/
                    withdrawn at the discretion of Elxer anytime without any
                    prior notice.
                  </li>
                  <li>
                    In case of any dispute arising out of this Offer the matter
                    shall be referred to Arbitration as per the Arbitration and
                    Conciliation Act, 1996 and any amendments made to it from
                    time to time. The Arbitration shall be conducted by a Sole
                    Arbitrator appointed by Elxer. The language of the
                    Arbitration shall be English and the venue shall be Raipur,
                    Chhattisgarh. Courts at Raipur shall have the exclusive
                    jurisdiction.
                  </li>
                </ol>
              </div>
              {/* <!-- section_inner --> */}
            </div>
            {/* <!-- section_row --> */}
          </div>
        </div>
        {/* <!-- .pagemid --> */}
      </div>
      {/* <!-- #main --> */}
      <Footer />
    </>
  );
};

export default ReferFriends;
