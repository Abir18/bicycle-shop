import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slider1 from '../../../Images/Slider/slider1.jpg';
import slider2 from '../../../Images/Slider/slider2.jpg';
import slider3 from '../../../Images/Slider/slider3.jpg';

const Slider = () => {
  return (
    <Carousel
      sx={{ height: '100px' }}
      autoPlay
      infiniteLoop
      useKeyboardArrows
      showThumbs="false"
      transitionTime={2000}
      showStatus="false"
    >
      <div>
        <img src={slider1} alt="" />
        <h1 className="legend">Haibike XDURO AMT</h1>
        {/* <p className="legend">Haibike XDURO AMT</p> */}
      </div>
      <div>
        <img src={slider2} alt="" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={slider3} alt="" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Slider;
