import { TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const MakeReview = () => {
  const [review, setReview] = useState({});

  const handleBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`https://polar-bastion-01816.herokuapp.com/reviews`, review)
      .then(response => {
        console.log(response);
      });
  };

  console.log(review);
  return (
    <div>
      <h1>Give Review</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ mb: 5 }}
          id="standard-basic"
          label="Product Name"
          name="productName"
          variant="standard"
          onBlur={handleBlur}
          required
        />
        <br />
        <TextField
          sx={{ mb: 5 }}
          id="standard-basic"
          label="Rating"
          name="ratings"
          variant="standard"
          required
          type="number"
          min="0"
          max="5"
          step="1"
          onBlur={handleBlur}
        />
        <br />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MakeReview;
