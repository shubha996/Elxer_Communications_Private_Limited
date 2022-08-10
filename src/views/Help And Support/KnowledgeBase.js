import React, { useContext, useState } from "react";
import "./HelpAndSupport.css";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import { NavLink } from "react-router-dom";
import ApiContext from "../../ContextApi";

const KnowledgeBase = () => {
    document.title = 'Support Knowledge Base | Elxer Broadband';
    const {knowledgebase} = useContext(ApiContext);
    const [accordion, setAccordion] = useState(-1);

  const divToggle = (index) => {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  };
  return (
    <>
      <Header />
      <div id="main">
        <div id="primary" className="pagemid">
          <div className="section_row kb-header">
            <div className="section_inner clearfix">
              <h1 className="title">Hello, How can we help you today?</h1>
            </div>
          </div>
          <div className="section_row kb-links p-t-60 p-b-40">
            <div className="section_inner clearfix">
              <div className="one_third">
                {" "}
                <a href="#articles" data-scroll="articles">
                  <div className="icon">
                    {" "}
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                    >
                      <path d="M20.5 4H20V.5c0-.276-.224-.5-.5-.5h-14C4.121 0 3 1.122 3 2.5v19C3 22.878 4.121 24 5.5 24h15c.276 0 .5-.224.5-.5v-19c0-.276-.224-.5-.5-.5zm-15-3H19v3h-1V2.5c0-.276-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5s.224.5.5.5H17v1H5.5C4.673 4 4 3.327 4 2.5S4.673 1 5.5 1zM20 23H5.5c-.827 0-1.5-.673-1.5-1.5V4.499c.418.314.938.501 1.5.501H20v18z"></path>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                    </svg>
                    <h4 className="title">Articles</h4>
                  </div>
                </a>{" "}
              </div>
              <div className="one_third">
                {" "}
                <NavLink to="/faqs">
                  <div className="icon">
                    {" "}
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                    >
                      <path d="M11.5 1C5.159 1 0 6.159 0 12.5S5.159 24 11.5 24 23 18.841 23 12.5 17.841 1 11.5 1zm0 22C5.71 23 1 18.29 1 12.5S5.71 2 11.5 2 22 6.71 22 12.5 17.29 23 11.5 23z"></path>
                      <path d="M11.5 6.5C9.57 6.5 8 8.07 8 10c0 .276.224.5.5.5s.5-.224.5-.5c0-1.378 1.121-2.5 2.5-2.5S14 8.622 14 10s-1.121 2.5-2.5 2.5c-.276 0-.5.224-.5.5v3c0 .276.224.5.5.5s.5-.224.5-.5v-2.535c1.694-.244 3-1.704 3-3.465 0-1.93-1.57-3.5-3.5-3.5z"></path>
                      <circle cx="11.5" cy="18.5" r="1"></circle>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                    </svg>
                    <h4 className="title">FAQ's</h4>
                  </div>
                </NavLink>{" "}
              </div>
              <div className="one_third">
                {" "}
                <NavLink to="/kb/videos">
                  <div className="icon">
                    {" "}
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                    >
                      <path d="M14.5 5h-13C.673 5 0 5.673 0 6.5v11c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5zm.5 12.5c0 .275-.224.5-.5.5h-13c-.276 0-.5-.225-.5-.5v-11c0-.275.224-.5.5-.5h13c.276 0 .5.225.5.5v11zm8.763-11.426c-.147-.09-.332-.099-.486-.021l-6 3c-.17.085-.277.258-.277.447v5c0 .189.107.362.276.447l6 3c.071.035.147.053.224.053.091 0 .183-.025.263-.074.147-.092.237-.253.237-.426v-11c0-.173-.09-.334-.237-.426zM23 16.691l-5-2.5V9.809l5-2.5v9.382z"></path>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                    </svg>
                    <h4 className="title">Videos</h4>
                  </div>
                </NavLink>{" "}
              </div>
            </div>
          </div>
          <div id="articles" className="section_row kb-articles p-t-40 p-b-10">
            <div className="section_inner clearfix">
              <h3 className="title">Articles</h3>
              {knowledgebase.map((item, index) => {
                return (
                  <>
                    <div key={index}>
                      <div
                        className="toggle-title arrow"
                        onClick={() => divToggle(index)}
                        style={
                          accordion === index
                            ? { backgroundColor: "#0077db", color: "#fff" }
                            : {}
                        }
                      >
                        {item.title}{" "}
                        {accordion === index ? <span>-</span> : <span>+</span>}
                      </div>
                      <div
                        className={
                          accordion === index
                            ? "toggle_content div-toggle toggler"
                            : "toggle_content div-toggle untoggler"
                        }
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="section_row p-t-40 p-b-20">
            <div className="section_inner clearfix">
              <h3 className="m-b-0">
                Can't find the answer you're looking for?
                <br />
                For any further help
              </h3>
              <div className="one_third">
                <h4 className="m-b-0">We can be reached at</h4>
                <h2>0771-677-7777</h2>
                <a
                  href="tel:07716777777"
                  className="btn medium flex_button_one"
                >
                  <span className="btn-text">CALL NOW</span>
                </a>
              </div>
              <div className="two_third">
                <h4 className="m-b-0">
                  Please refer to the following email addresses when attempting
                  to email us.
                </h4>
                <h5 className="m-t-10 m-b-0">
                  For questions about service & support please email:
                </h5>
                <h4>
                  <a href="mailto:support@elxer.com" className="color-elxer">
                    support@elxer.com
                  </a>
                </h4>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KnowledgeBase;
