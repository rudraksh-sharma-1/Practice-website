import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../Images/First-Slide.webp";
import Slide2 from "../Images/Second-Slide.jpg";
import Slide3 from "../Images/Third-Slide.webp";

function Slides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="text-center my-2"
      >
        <Carousel.Item>
          <img
            src={Slide1}
            alt="firstSlide"
            className="image mx-auto d-block"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Slide2}
            alt="secondSlide"
            className="image mx-auto d-block"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Slide3}
            alt="thirdSlide"
            className="image mx-auto d-block"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slides;
