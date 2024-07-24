import Slides from "./Slides";
import TopSells from "./TopSells";
import Under from "./Under";
import CloseButton from "react-bootstrap/CloseButton";
import { useState } from "react";
import Slider from "./Slider";

function ControlledCarousel() {
  let [close, setClose] = useState(true);

  let handleclose = () => {
    setClose(false);
  };
  let handleopen = () => {
    setClose(true);
  };

  let button;
  if (close === true) {
    button = (
      <CloseButton
        aria-label="Hide"
        onClick={handleclose}
        className="my-1 mx-2"
      />
    );
  } else {
    button = <CloseButton aria-label="Hide" onClick={handleopen} />;
  }

  return (
    <>
      {button}
      {close && <Slides />}
      {close && <TopSells />}
      {close && <Slider />}
      {close && <Under />}
    </>
  );
}

export default ControlledCarousel;
