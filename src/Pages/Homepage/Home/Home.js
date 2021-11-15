import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Slider from '../../Homepage/Slider/Slider';
import Footer from '../../Shared/Footer/Footer';
import Bikes from '../Bikes/Bikes';
import Innovation from '../Innovation/Innovation';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <Bikes />
      <Reviews />
      <Innovation />
      <Footer />
    </div>
  );
};

export default Home;
