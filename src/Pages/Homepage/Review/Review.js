import { Grid, Paper, Rating, Stack, Box, Typography } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
  const { productName, ratings } = review;
  console.log(ratings);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={2} sx={{ py: 5 }}>
        <Typography
          variant="h5"
          sx={{ mb: 1, color: '#1CC7C1', fontWeight: 500 }}
        >
          {productName}
        </Typography>
        <Box sx={{ mt: 5, ml: 15 }}>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              value={ratings}
              precision={0.5}
              readOnly
            />
          </Stack>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Review;
