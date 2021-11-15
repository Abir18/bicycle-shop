import { Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/reviews`).then(res => {
      //   console.log(res.data, 'reviews');
      setUserReview(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Our Products Rating</h1>
      <Container>
        <Grid container rowSpacing={8} columnSpacing={4}>
          {userReview.map(review => (
            <Review key={review._id} review={review} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Reviews;
