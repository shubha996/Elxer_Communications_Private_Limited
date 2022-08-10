import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

const PageNotFound = () => {
  document.title = 'Page not found | Elxer Broadband';
  return (
    <>
      <Header/>
      <div id="main">
        <div id="primary" className="pagemid">
          <div className="section_row">
            <div className="section_inner clearfix">
              <div className="one_half aligncenter">
                <img
                  loading="lazy"
                  src="https://elxer.com/assets/images/elxer_404.jpg"
                  alt="Elxer_Page_Not_Found"
                />
              </div>
              <div className="one_half last aligncenter m-t-100">
                <h2 className="at-fancy-title-v1">Page Not Found</h2>
                <p>Sorry! we are unable to reach the requested URL.</p>
                <NavLink
                  to="/"
                  className="btn center medium rounded flex_button_one"
                >
                  <span className="btn-details">
                    <span className="btn-text">Back to Home</span>
                  </span>
                </NavLink>
              </div>
            </div>
            {/* <!-- section_inner --> */}
          </div>
          {/* <!-- section_row --> */}
        </div>
        {/* <!-- .pagemid --> */}
      </div>
      {/* <!-- #main --> */}
      <Footer/>
    </>
  );
};

export default PageNotFound;
