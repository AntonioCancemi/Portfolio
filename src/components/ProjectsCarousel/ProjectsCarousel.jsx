import React, { useState } from "react";
import Slider from "react-slick";
import "./ProjectsCarousel.css";
function ProjectsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const settings = {
    focusOnSelect: true,
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 3,
    speed: 500,
    arrow: true,
    beforeChange: (current, next) => setActiveSlide(next),
    afterChange: (current) => setActiveSlide2(current),
  };

  return (
    <div>
      <div className="text-light"> {activeSlide + "  " + activeSlide2}</div>
      <Slider {...settings}>
        <div className="slider-content d-flex justify-content-center">
          <img src="../login.png" alt="" />
        </div>
        <div className="slider-content d-flex justify-content-center">
          <img src="../adsDashboard.png" alt="" />
        </div>
        <div className="slider-content d-flex justify-content-center">
          <img src="../login.png" alt="" />
        </div>
        <div className="slider-content d-flex justify-content-center">
          <img src="../login.png" alt="" />
        </div>
        <div className="slider-content d-flex justify-content-center">
          <img src="../login.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default ProjectsCarousel;
