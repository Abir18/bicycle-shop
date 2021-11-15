import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Slider from '../../Homepage/Slider/Slider';
import Footer from '../../Shared/Footer/Footer';
import Bikes from '../Bikes/Bikes';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <Bikes />
      <h1>Rating</h1>
      <h1>Extra Section</h1>
      <Footer />
    </div>
  );
};

export default Home;
