import React from "react";
import OwlCarousel from "react-owl-carousel";
import Slider1 from "../Images/Slider-1.webp";
import Slider2 from "../Images/Slider-2.webp";
import Slider3 from "../Images/Slider-3.webp";
import Slider4 from "../Images/Slider-4.webp";
import Slider5 from "../Images/Slider-5.webp";
import Slider6 from "../Images/Slider-6.webp";
function Slider() {
  return (
    <OwlCarousel
      className="owl-theme"
      loop={true}
      mouseDrag={true}
      margin={10}
      dotsEach={true}
      autoplay={true}
      autoplayTimeout={3500}
    >
      <div className="item">
        <img
          src={Slider1}
          alt="candle"
          className="border border-dark border-1 SlideIn"
        />
        <h3 className="text-center">Dual Scent Experience</h3>
      </div>
      <div className="item">
        <img
          src={Slider2}
          alt="candle"
          className="border border-dark border-1 SlideIn"
        />
        <h3 className="text-center">AuraDecor Fragrance Votive </h3>
      </div>
      <div className="item">
        <img
          src={Slider3}
          alt="candle"
          className="border border-dark border-1 SlideIn"
        />
        <h3 className="text-center">Long-Lasting Scent Throw</h3>
      </div>
      <div className="item">
        <img
          src={Slider4}
          alt="candle"
          className="border border-dark border-1 SlideIn"
        />
        <h3 className="text-center">Vanilla-scented candles</h3>
      </div>
      <div className="item">
        <img
          src={Slider5}
          alt="candle"
          className="border border-dark border-1 SlideIn"
        />
        <h3 className="text-center">Mother's Day Gift Wrapped</h3>
      </div>
      <div className="item">
        <img
          src={Slider6}
          alt="candle"
          className="border border-dark border-1 SlideIn"
        />
        <h3 className="text-center">Rose-scented candles</h3>
      </div>
    </OwlCarousel>
  );
}

export default Slider;
