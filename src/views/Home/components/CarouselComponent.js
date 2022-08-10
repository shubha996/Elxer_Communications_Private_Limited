import React, {  useContext } from "react";
import { Carousel } from 'react-bootstrap'
import ApiContext from "../../../ContextApi";
// import { NavLink } from 'react-router-dom';

const CarouselComponent = () => {
  const {home} = useContext(ApiContext);
  return (
    <>
      <section id="featured_slider">
        <div className="slider_wrapper">
          <div className="flexslider">
            <ul className="slides">
            <Carousel fade>
            {
              home?.banners?.map((item, index) => {
                return(
                  <Carousel.Item key={index}>
                    <li>
                      <img
                        loading="lazy"
                        src={item.image_url}
                        alt={item.alternate_text}
                      />
                    </li>
                  </Carousel.Item>
                )
              })
            }
            </Carousel>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselComponent;
