import React, {useContext} from "react";
import HeaderCareers from "../Common/Header/HeaderCareers";
import Footer from "../Common/Footer/Footer";
import "./Careers.css";
import ApiContext from "../../ContextApi";


const Careers = () => {
  document.title = "Work at Elxer! | Elxer Broadband";
  const {careers} = useContext(ApiContext);
  return (
    <>
      <HeaderCareers />
      <div id="main">
        <div id="primary" className="pagemid">
          <div className="section_row p-t-50 career-hero">
            <div className="section_inner clearfix aligncenter">
              <h2>Work @ Elxer</h2>
              <h4>
                We're looking for people to join the team who are as excited as
                we are!
              </h4>
              <h4 className="font-montserrat text-bold">
                We're growing. Come work with us!
              </h4>
              <a
                href="#career-opportunities"
                className="btn btn-primary medium m-b-30"
              >
                <span className="btn-text text-upper">
                  Explore Career Opportunities
                </span>
              </a>
              <div className="m-t-30 m-b-30">
                <img
                  className="lazyload"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                  alt="Careers as Elxer"
                />
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="wave">
              <pattern
                id="wave"
                x="-180"
                y="0"
                width="1441"
                height="68"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M1441 68.3H1.93954e-06V20C-0.499998 20.1 277.5 -22.5 727.9 19.6C1149.3 59.1 1441 20 1441 20V68.3Z"
                  className="ttcgub-0 jqwwRC"
                ></path>
              </pattern>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#wave)"
              ></rect>
            </svg>
          </div>
          {/* <!-- career-hero --> */}
          <div id="who-are-we" className="section_row aligncenter">
            <div className="section_inner"
                style={{color: "#222", fontSize: "1.2rem", lineHeight: "1.5", maxWidth: "800px"}}>
                <h2>Who are we?</h2>
                <p>With a vision to provide the best in class internet solutions, Elxer as an organization
                    strives to create opportunities for all its stakeholders to build and constantly grow
                    together as a strong community. This vision has helped us to develop innovative products
                    & solutions that would help customers with enhanced user experience.</p>
            </div>
            </div>
            {/* who are we */}
            <div id="why-join-us" className="section_row why-work-with-us">
            <div className="section_inner">
                <div className="m-b-50 aligncenter"
                    style={{color: '#222', fontSize: '1.2rem', lineHeight: 1.5, maxWidth: '800px'}}>
                    <h2>Why you'll love working with us?</h2>
                    <p>We constantly strive to have a compassionate extended family. An environment where
                        you can be yourself. We believe collective productivity in an organization comes at
                        its best, when employees are given the flexibility and autonomy to devise their own
                        methods and techniques to accomplish their goals. And that's what defines our
                        culture!</p>
                </div>
                <h2 className="aligncenter m-b-50">Perks & benefits</h2>
                <div className="benefits-container">
                {
                  careers?.perksAndBenefits?.map((item, index) => {
                    return(
                      <div className="benefit" key={index}>
                        <figure className="m-b-20"><img
                                src={item.image}
                                alt={item.title}/></figure>
                        <h4 className="title">{item.title}</h4>
                    </div>
                    )
                  })
                }
                </div>
            </div>
        </div>
        {/* Why Youwill Love working with us */}
        <div id="career-opportunities" className="section_row p-t-70 p-b-60 career-opportunities">
            <div className="section_inner clearfix"
            style={{fontSize: '1.2rem', lineHeight: '1.5', color: '#222'}}>
                <h2 className="m-b-50 aligncenter whitetext">Career Opportunities</h2>
                <div className="one_half"
                    style={{background: "#fff", padding: "2rem", borderRadius: "8px", marginBottom: "1rem"}}>
                    <h3 className="font-montserrat text-bold">Job Opportunities</h3>
                    <p className="m-b-40">Problem solvers, creative thinkers and those who aspire to greatness.
                        Join us to reach your full potential.</p><a
                        href="/careers/open-positions"
                        className="font-montserrat text-bold">See all of our current Job Openings &nbsp;<i
                            className="fa fa-long-arrow-right"></i></a>
                </div>
                <div className="one_half"
                    style={{background: "#fff", padding: "2rem", borderRadius: "8px", marginBottom: "1rem"}}>
                    <h3 className="font-montserrat text-bold">Internships</h3>
                    <p className="m-b-40">Our interns are bright, innovative and dedicated to carving their own
                        career path in. Are you ready to join them?</p><a
                        href="/careers/internship" className="font-montserrat text-bold">See
                        all of our current Internship Programs &nbsp;<i
                            className="fa fa-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
        {/* Career Opportunities */}
        <div id="meet-the-team" className="section_row our-team">
            <div className="section_inner clearfix">
                <h2 className="aligncenter m-b-50">Explore Our Teams</h2>
                <div className="team-container">
                {
                    careers?.exploreOurTeams?.map((item, index) => {
                        return(
                            <div className="team clearfix" key={index}>
                                <h4 className="department">{item.title}</h4>
                                <p>{item.content}</p>
                            </div>
                        )
                    })
                }
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

export default Careers;
