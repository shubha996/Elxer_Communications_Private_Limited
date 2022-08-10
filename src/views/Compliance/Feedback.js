import React from "react";
import "./FeedbackInternal.css";

const Feedback = () => {
  document.title = 'Feedback | Elxer Communications Pvt. Ltd.';
  return (
    <>
      <div className="feedback-body">
        <header id="feedback-header">
          <div className="inner">
            <h1 className="feedback-logo">ELXER</h1>
            <p>Communications Pvt. Ltd.</p>
          </div>
        </header>
        <main>
          <div className="inner">
            <div className="wrapper">
              <div className="feedback-heading">
                <h2 style={{fontWeight: '800'}}>We value your Feedback!</h2>
                <p style={{fontWeight: '600'}}>
                  We would love to hear your thoughts, concerns or problems with
                  our service so we can improve!
                </p>
                
                  <div className="auth-template">
                    <div className="form-group text-left mobile-wrapper m-b-1 feedbackFormDiv">
                      {" "}
                      <label for="mobile" style={{marginBottom: '-10px'}}>
                        Enter your Registered mobile number (without +91)
                      </label>{" "}
                      <input
                      className="inputForFeedbackMobile"
                        type="number"
                        name="mobile"
                        id="mobile"
                        required
                        placeholder="Registered mobile number"
                        pattern="[6789][0-9]{9}"
                        maxLength="10"
                        title="Mobile number should starts with 6-9 only!"
                      />
                      <div className="spinner"></div>
                    </div>
                    <div className="form-group text-left otp-wrapper m-b-1">
                      {" "}
                      <label for="mobile">Enter OTP</label>
                      <input
                        type="number"
                        name="otp"
                        id="otp"
                        required
                        placeholder="OTP"
                        pattern="[0-9]{4}"
                        maxLength="4"
                        title="OTP should be numbers only!"
                      />
                      <div className="spinner"></div>
                      <div className="resend-otp-timer">
                        Resend OTP in <span className="counter">30</span>s
                      </div>
                      <div className="resend-otp-btn">Resend OTP</div>
                    </div>
                  </div>
                  {/* <response></response> */}
                  <div className="subscriptions-template"></div>
                  <div className="feedback-template"></div>
                
              </div>
              <div className="footer">
                {" "}
                &copy; 2022 Elxer Communications Private Limited. All Rights
                Reserved.{" "}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Feedback;
