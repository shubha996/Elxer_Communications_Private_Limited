import React, { useContext } from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import "./Compliance.css";
import ApiContext from "../../ContextApi";

const Terms = () => {
  document.title = 'Elxer Terms & Conditions | Contact Us | Broadband Connection | Wifi Connection | Elxer Broadband';
  const {terms} = useContext(ApiContext);
  console.log(terms);
  return (
    <>
      <Header />
      <div id="main">
        <div id="primary" className="pagemid">
          <div id="subheader" className="sleft">
            <div className="subheader-inner">
              <div className="subdesc">
                <h1 className="page-title">Terms & Conditions</h1>
              </div>
            </div>
          </div>
          <div className="section_row p-t-20 p-b-20 termsAndConditions">
            <div className="section_inner clearfix">
              <div className="one_third aligncenter">
                <figure className="m-t-40">
                  <img
                    loading="lazy"
                    src="https://elxer.com/assets/images/svg/terms-and-conditions.svg"
                    alt="Terms and Conditions"
                  />
                </figure>
              </div>
              <div className="two_third last p-40">
                <h3>
                  <strong>Welcome to Elxer Communications Pvt Ltd</strong>
                </h3>
                <h5>
                  These terms and conditions outline the rules and regulations
                  for the use of Elxer Communications Pvt Ltd's Website, located
                  at elxer.com.
                </h5>
                <p>
                  By accessing this website we assume you accept these terms and
                  conditions. Do not continue to use Elxer Communications Pvt
                  Ltd if you do not agree to take all of the terms and
                  conditions stated on this page.
                </p>
              </div>
              <div className="one">
                <p>
                  The following terminology applies to these Terms and
                  Conditions, Privacy Statement and Disclaimer Notice and all
                  Agreements: "Client", "You" and "Your" refers to you, the
                  person log on this website and compliant to the Company’s
                  terms and conditions. "The Company", "Ourselves", "We", "Our"
                  and "Us", refers to our Company. "Party", "Parties", or "Us",
                  refers to both the Client and ourselves. All terms refer to
                  the offer, acceptance and consideration of payment necessary
                  to undertake the process of our assistance to the Client in
                  the most appropriate manner for the express purpose of meeting
                  the Client’s needs in respect of provision of the Company’s
                  stated services, in accordance with and subject to, prevailing
                  law of Netherlands. Any use of the above terminology or other
                  words in the singular, plural, capitalization and/or he/she or
                  they, are taken as interchangeable and therefore as referring
                  to same.
                </p>
                {
                  terms.map((item, index) => {
                    return(
                      <div className="styleList" key={index}>
                        <h4>
                          <strong>{item.title}</strong>
                        </h4>
                        <div dangerouslySetInnerHTML={{__html: item.content}}/>
                      </div>
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

export default Terms;
