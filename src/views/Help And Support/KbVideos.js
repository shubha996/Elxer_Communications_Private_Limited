import React, { useContext } from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import { NavLink } from "react-router-dom";
import ApiContext from "../../ContextApi";

const KbVideos = () => {
  document.title = 'Videos - Knowledge Base | Elxer Broadband';
  const {videos} = useContext(ApiContext);
  return (
    <>
      <Header />
      <div id="main">
        <div id="primary" className="pagemid">
          <div id="subheader" className="sleft">
            <div className="subheader-inner">
              <div className="subdesc">
                <h1 className="page-title">Videos - Knowledge Base</h1>
              </div>
            </div>
          </div>
          <div className="section_row kb-articles p-t-40 p-b-40">
            <div className="section_inner clearfix">
              {videos.map((item, index) => {
                return (
                  <>
                    <div className="one_third" key={index}>
                      <h4
                        className="heading"
                        style={{ color: "black", fontWeight: "600" }}
                      >
                        #{index + 1}. {item.title}
                      </h4>{" "}
                      <video width="400" controls controlsList="nodownload">
                        <source src={item.video_url} type="video/mp4" /> Your browser
                        does not support the video tag.
                      </video>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="section_inner clearfix">
              <div
                className="fb-like"
                data-href="https://elxer.com/kb/videos"
                data-width=""
                data-layout="button"
                data-action="recommend"
                data-size="small"
                data-show-faces="false"
                data-share="true"
              ></div>{" "}
              <br /> <br />{" "}
              <NavLink
                to="/kb"
                className="btn medium btn-primary"
                style={{ background: "#233141" }}
              >
                {" "}
                <span className="btn-text">Back to Knowledge Base</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default KbVideos;
