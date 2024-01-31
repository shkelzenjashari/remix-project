import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./accordion.css";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";

const Accordion = () => {
  const photos = [image1, image2, image3];
  return (
    <div className="accordion">
      <Slider autoplay={1500}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} className="img-responsive" alt="remix" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Accordion;
