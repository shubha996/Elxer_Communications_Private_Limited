import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import ApiContext from "../../../ContextApi";

const HappyCustomers = () => {
  const {home} = useContext(ApiContext);
  return (
    <>
      <div className="section_row p-t-0 p-b-0" style={{background: "#f4f8ff"}}>
        <div className="section_inner clearfix">
          <div className="one_half p-t-40 p-b-40">
            <h2 className="m-b-50">
              Don't just take our word for it...
              <br /> see what others have to say.
            </h2>
            <div className="happyCustomersCarouselDiv">
              <Carousel>
                {
                  home?.testimonials?.map((item, index) => {
                    return(
                        <Carousel.Item key={index}>
                          <div id={`testimonial-${index}`} >
                          <div className="testimonial-item">
                              <div className="quote-icon">
                              <img
                                  src="https://elxer.com/assets/images/icons/left-quotes-sign.svg"
                                  alt="quote sign"
                              />
                              </div>
                              <div className="content">
                              <p>
                                  {item.content}
                              </p>
                              <div className="testimonial-full" style={{display: 'none'}}>
                                  <p>
                                  {item.content}
                                  </p>
                              </div>
                              </div>
                              <div className="meta">
                              <div className="avatar">
                                  <img
                                  src="https://elxer.com/assets/images/avatar.png"
                                  alt={`${item.name}`}
                                  />
                              </div>
                              <div className="author">
                                  <div className="testimonial-author">
                                  <h4>{item.name}</h4>
                                  </div>
                                  <div className="star-rating">
                                  {
                                    item.rating === '5' ? 
                                      (<>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                      </>) : 
                                      (<>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                      </>)
                                  }
                                  </div>
                              </div>
                              </div>
                              <div className="clearfix"></div>
                          </div>
                          </div>
                        </Carousel.Item>
                    )
                  })
                }
              </Carousel> 
            </div>
            <div id="testimonial-popup" className="popup">
              <div className="popup-overlay"></div>
              <div className="popup-close" aria-label="Close" role="button" tabIndex="0" 
                onClick={() => document.getElementById('testimonial-popup').style.display = 'none'}>
              </div>
              <div className="popup-container">
                <div className="popup-content">
                  <div className="title"></div>
                  <div className="star-rating m-t-0 m-b-20"></div>
                  <div className="content"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="one_half textcenter p-t-40 p-b-40">
            <h2>Happy Customers. Happy Us.</h2>
            <h4 className="m-b-20">A few of our happy customers!</h4>
            <div className="customers-list">
              <div className="customers-list-inner">
                <ul className="list-inline">
                {
                    home?.clients?.map((item, index) => {
                      return(
                        <>
                        <li key={index}>
                          <figure>
                            <img
                              loading="lazy"
                              alt={item.title}
                              src={`${item.image}`}
                            />
                          </figure>
                        </li>
                        </>
                      )
                    }) 
                  }
                  {/* {
                    clients?.map((item, index) => {
                      return(
                        <>
                        <li key={index}>
                          <figure>
                            <img
                              loading="lazy"
                              alt={item.title}
                              src={`${item.image}`}
                            />
                          </figure>
                        </li>
                        </>
                      )
                    }) 
                  } */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- section_inner--> */}
      </div>
      {/* <!-- section_row--> */}
    </>
  );
};

export default HappyCustomers;
