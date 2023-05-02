import React from "react";
import Carousel from "react-bootstrap/Carousel";
import manali1 from "../images/manali1.jpg";
import manali2 from "../images/manali2.jpg";
import manali3 from "../images/manali3.jpg";
const Crousel = () => {
  return (
    <>
      <Carousel   autoPlay={true}
    interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100 crousel-image"
            src={manali1}
            alt="manali"
          />
          <Carousel.Caption>
            <h3>Manali</h3>
            <p>Beautifull rohtang mountains</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 crousel-image"
            src={manali2}
            alt="dharamshala"
          />

          <Carousel.Caption>
            <h3>Dharamshala</h3>
            <p>Sceneary of Dharamshala</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 crousel-image"
            src={manali3}
            alt="palampur"
          />

          <Carousel.Caption>
            <h3>Palampur</h3>
            <p>awesome view of dhauladhar</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Crousel;
