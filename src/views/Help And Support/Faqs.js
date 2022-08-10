import React, { useContext, useState } from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import { NavLink } from 'react-router-dom';
import './HelpAndSupport.css';
import ApiContext from "../../ContextApi";

const Faqs = () => {
  const {faqs} = useContext(ApiContext);
  const [accordion, setAccordion] = useState(-1);
  const [accordion2, setAccordion2] = useState(-1);
  const [accordion3, setAccordion3] = useState(-1);

  const divToggle = (index) => {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  };
  const divToggle2 = (index) => {
    if (index === accordion2) {
      setAccordion2(-1);
      return;
    }
    setAccordion2(index);
  };
  const divToggle3 = (index) => {
    if (index === accordion3) {
      setAccordion3(-1);
      return;
    }
    setAccordion3(index);
  };
  return (
    <>
      <Header />
      <div id="main">
        <div id="primary" className="pagemid">
          <div id="subheader" className="sleft">
            <div className="subheader-inner">
              <div className="subdesc">
                <h1 className="page-title">
                  FAQs - Frequently Asked Questions
                </h1>
              </div>
            </div>
          </div>
          <div className="section_row p-t-40 p-b-10">
            <div className="section_inner clearfix">
              <h2>You asked, we answered</h2>
              <p>Answers to the most common questions you might have</p>
              <div className="ac_wrap">
                <div className="one_half">
                  <h4>General</h4>
                  {faqs?.general?.map((item, index) => {
                    return (
                      <>
                        <div
                          className="toggle-title arrow"
                          key={index}
                          onClick={() => divToggle(index)}
                          style={
                            accordion === index
                              ? { backgroundColor: "#0077db", color: "#fff" }
                              : {}
                          }
                        >
                          {item.title}
                          {accordion === index ? (
                            <span>-</span>
                          ) : (
                            <span>+</span>
                          )}
                        </div>
                        <div
                          className={
                            accordion === index
                              ? "toggle_content toggler"
                              : "toggle_content untoggler"
                          }
                          dangerouslySetInnerHTML={{
                            __html: `${item.content}`,
                          }}
                        />
                      </>
                    );
                  })}
                </div>
                <div className="one_half last">
                  <h4>Service</h4>
                  {faqs?.services?.map((item, index) => {
                    return (
                      <>
                        <div
                          className="toggle-title arrow"
                          key={index}
                          onClick={() => divToggle2(index)}
                          style={
                            accordion2 === index
                              ? { backgroundColor: "#0077db", color: "#fff" }
                              : {}
                          }
                        >
                          {item.title}
                          {accordion2 === index ? (
                            <span>-</span>
                          ) : (
                            <span>+</span>
                          )}
                        </div>
                        <div
                          className={
                            accordion2 === index
                              ? "toggle_content toggler"
                              : "toggle_content untoggler"
                          }
                          dangerouslySetInnerHTML={{
                            __html: `${item.content}`,
                          }}
                        />
                      </>
                    );
                  })}
                  <h4>Payment</h4>
                  {faqs?.payment?.map((item, index) => {
                    return (
                      <>
                        <div
                          className="toggle-title arrow"
                          id="toggle-content-div-title"
                          key={index}
                          onClick={() => divToggle3(index)}
                          style={
                            accordion3 === index
                              ? { backgroundColor: "#0077db", color: "#fff" }
                              : {}
                          }
                        >
                          {item.title}{" "}
                          {accordion3 === index ? (
                            <span>-</span>
                          ) : (
                            <span>+</span>
                          )}
                        </div>
                        <div
                          className={
                            accordion3 === index
                              ? "toggle_content toggler"
                              : "toggle_content untoggler"
                          }
                          dangerouslySetInnerHTML={{
                            __html: `${item.content}`,
                          }}
                        />
                      </>
                    );
                  })}
                </div>
                <div className="clearfix"></div>
                {/* <!-- <div className="fb-like" data-href="https://elxer.com/" data-width="" data-layout="button" data-action="recommend" data-size="small" data-show-faces="false" data-share="true"></div> --> */}
                <NavLink to="/kb" className="btn medium btn-primary m-t-20">
                  <span className="btn-text" style={{ color: "#fff" }}>
                    Back to Knowledge Base
                  </span>
                </NavLink>
              </div>
              {/* <!-- ac_wrap --> */}
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

export default Faqs;
