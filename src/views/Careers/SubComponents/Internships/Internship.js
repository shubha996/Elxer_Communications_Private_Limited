import React from "react";
import HeaderCareers from "../../../Common/Header/HeaderCareers";
import Footer from "../../../Common/Footer/Footer";

const Internship = () => {
  return (
    <>
      <HeaderCareers />
      <div id="main">
        <div id="primary" className="pagemid">
          <div className="internship-hero">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <div className="content">
              <h1 className="heading">
                Opportunities for students and recent graduates!
              </h1>
            </div>
          </div>
          <div
            className="section_row aligncenter"
            style={{ fontSize: "1.2rem", lineHeight: "1.5", color: "#222" }}
          >
            <div className="section_inner">
              <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                <h2>Internship Programme</h2>
                <p className="m-b-40">
                  Investing in our future generation is of supreme importance to
                  us! We believe that bringing in fresh blood year after year in
                  a technical environment brings in innovation that comes out of
                  a fresh mind's creativity.
                </p>
                <p className="m-b-40">
                  If you are someone who wants to have practical exposure in
                  your chosen field of technology, work on real time projects
                  and become industry ready irrespective of where your future
                  holds, you'll find a bunch of enthusiastic folks who'd love to
                  work with you.
                </p>
                {/* <!-- <p className="m-b-40">Here's what you can explore from the bunch of internship opportunities.</p> --> */}
              </div>
              <h2 className="aligncenter m-b-40">Who are we looking for?</h2>
              <div className="clearfix"></div>
              <div
                className="aligncenter m-t-50 m-b-0"
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  lineHeight: "1.5",
                  maxWidth: "580px",
                }}
              >
                <h3
                  className="text-bold"
                  style={{
                    fontFamily: "Montserrat,Helvetica,Arial,sans-serif",
                  }}
                >
                  Are you interested?
                </h3>
                <p>
                  Drop your resume, we want to hear from you! Send us an email
                  to{" "}
                  <a href="mailto:&#104;&#114;&#64;&#101;l&#120;&#101;r.&#99;o&#109;?subject=Internship%20at%20Elxer">
                    &#104;&#114;&#64;&#101;l&#120;e&#114;.&#99;&#111;m
                  </a>
                  and let us know about you.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .pagemid --> */}
      </div>
      {/* <!-- #main --> */}
      <Footer />
    </>
  );
};

export default Internship;
