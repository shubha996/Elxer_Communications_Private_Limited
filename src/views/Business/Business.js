import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Business.css'
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import ApiContext from '../../ContextApi';

const Business = () => {
  document.title = 'Internet for Corporate | Leased line connection in Raipur | Commercial Broadband | Elxer Broadband';
  
  const {corporate} = useContext(ApiContext);
  return (
    <>
      <Header/>
      <div id="main">
        <div id="primary" className="pagemid">
          <div className="section_row corporate-hero-banner p-t-50 p-b-30">
            <div className="section_inner clearfix">
              <div className="two_third m-0 p-t-20">
                {/* <!-- <h4>Give your business/corporate a boost with<br />Dedicated Enterprise Internet</h4> --> */}
                <h1>
                  <small>Experience the Uninterrupted Internet Connectivity with</small>
                  <br />
                  <span>Elxer Enterprise</span>
                </h1>
                <h2>Connect Now!!</h2>
              </div>
              <div className="one_third m-0">
                <figure>
                  <img loading="lazy" src="https://elxer.com/assets/images/svg/rocket.svg" alt="Refer a Friend" />
                </figure>
              </div>
            </div>
            {/* <!-- section_inner --> */}
          </div>
          {/* <!-- section_row --> */}
          <div className='page-wrapper'>
            <div className="section_row p-0">
              <div className="section_inner">
                <div className="box-intersect-section">
                  <p>The Internet these days plays a major role in day-to-day life whether in
                      corporate places or in homes. If there is a common internet line with multiple
                      users, it can cause inefficiency in speed of the internet. To overcome this
                      problem, the Elxer Enterprise Solution has come up with different internet plans
                      to help improve and enhance the internet connection that is more reliable,
                      consistent and profitable. As we are one of the best internet leased line
                      providers in Chhattisgarh, we provide the best high speed and committed internet
                      leased lines to all our customers.
                  </p>
                </div>
              </div>
              {/* <!-- section_inner --> */}
            </div>
            {/* <!-- section_row --> */}
            <div className="section_row p-t-50 p-b-40">
              <div className="section_inner">
                <h3>Industries we serve:</h3>
                <div className="industries-served clearfix">
                  {
                    corporate?.industriesWeServe?.map((item, index) => {
                      return(
                        <div key={index}>
                          <div className={index === 4 ? ("one_fifth last") : ("one_fifth")} >
                            <div className="box p-20 aligncenter">
                              <figure className="m-b-20">
                                <img src={item.image} alt={item.industry_name}/>
                              </figure>
                              <h5>{item.industry_name}</h5>
                              <p>{item.content}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              {/* <!-- section_inner --> */}
            </div>
            {/* <!-- section_row --> */}
            <div className="section_row p-t-50 p-b-40" style={{backgroundColor: "#f5f5f5"}}>
              <div className="section_inner">
                <h3 className="aligncenter m-b-50">Why choose Elxer Enterprise?</h3>
                <ul className="transition-list">
                {
                  corporate?.whyChooseElxerEnterprise?.map((item, index) => {
                    return(
                      <div key={index}>
                        <li ><span>{item.content}</span></li>
                      </div>
                    )
                  })
                }
                </ul>
              </div>
              {/* <!-- section_inner --> */}
            </div>
            {/* <!-- section_row --> */}
            <div className="section_row p-t-50 p-b-40" style={{backgroundColor: "#0077db"}}>
              <div className="section_inner">
                <h3 className="whitetext aligncenter m-b-50">Elxer Enterprise Plans has got you covered!!</h3>
                {
                  corporate?.elxerBroadbandLeased?.map((item, index) => {
                    return(
                    <div className="one_half" key={index} >
                      <div className="box">
                        <figure className="m-b-20 aligncenter">
                          <img src={item.image} alt={item.title}/>
                        </figure>
                        <h4 className="aligncenter">{item.title}</h4>
                        <div className='styleList listStyle' dangerouslySetInnerHTML={{__html: item.content}}/>
                        <div className="aligncenter">
                          <NavLink to={item.id === 1 ? "/corporate/broadband" : "/corporate/leased-line"} className="btn rounded medium flex_button_one">
                            <span className="btn-text rounded-btn">Click here to know more</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    )
                  })
                }
                <div className="clearfix"></div>
              </div>
              {/* <!-- section_inner --> */}
            </div>
            {/* <!-- section_row --> */}
          </div>
        </div>
      </div>
      <Footer/>  
    </>
  )
}

export default Business