import React, { useContext } from "react";
import ApiContext from "../../ContextApi";
import Footer from "../../views/Common/Footer/Footer";
import Header from "../../views/Common/Header/Header";

const PrivacyPolicy = () => {
  document.title = 'Elxer Privacy Policy | Contact Us | Broadband | Wifi Connection | Elxer Broadband';
  const { privacy } = useContext(ApiContext);
  return (
    <>
      <Header />
      <div id="main">
        <div id="primary" className="pagemid">
          <div id="subheader" className="sleft">
            <div className="subheader-inner">
              <div className="subdesc">
                <h1 className="page-title">Privacy Policy</h1>
              </div>
            </div>
          </div>
          <div className="section_row p-t-20 p-b-20">
            <div className="section_inner clearfix">
              <div className="one_third aligncenter">
                <figure className="m-t-40">
                  <img
                    loading="lazy"
                    src="https://elxer.com/assets/images/svg/privacy-policy.svg"
                    alt="Privacy Policy"
                  />
                </figure>
              </div>
              <div className="two_third last p-40">
                <h4>
                  At Elxer Communications Pvt Ltd, accessible from elxer.com,
                  one of our main priorities is the privacy of our visitors.{" "}
                </h4>
                <p>
                  This Privacy Policy document contains types of information
                  that is collected and recorded by Elxer Communications Pvt Ltd
                  and how we use it.
                </p>
                <p>
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us
                  through email at support@elxer.com
                </p>
              </div>
              <div className="clearfix"></div>
              <div className="one">
              {
                privacy?.map((item, index) => {
                  return(
                    <>
                      <h4>
                        <strong>{item.title}</strong>
                      </h4>
                      <div dangerouslySetInnerHTML={{__html: item.content}}/>
                    </>
                  )
                })
              }
              </div>
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

export default PrivacyPolicy;
