import {
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Bike = ({ bike }) => {
  const { _id, name, description, price, image } = bike;
  const url = `/purchase/${_id}`;
  return (
    <div>
      <Grid item xs={2} sm={4} md={4} sx={{ m: 2 }}>
        <Card sx={{ minWidth: 345 }}>
          <CardMedia
            style={{
              width: 'auto',
              height: '200px',
              //   margin: '0 auto',
            }}
            component="img"
            image={image}
            alt="bike"
          />
          <CardContent>
            <Typography sx={{ mb: 3 }} variant="h5" component="div">
              {name}
            </Typography>

            <Typography variant="h6" color="text.disabled">
              {description}
            </Typography>
          </CardContent>
          <Link to={url} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              style={{
                padding: '7px 20px',
                background: 'linear-gradient(to right, #2FE1AE , #5Ce7ed)',
                fontSize: '16px',
                border: 'none',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              Buy Now
            </Button>
          </Link>
        </Card>
      </Grid>

      {/* <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={2} sx={{ py: 5 }}>
          <img src={image} alt="" />
          <Typography
            variant="h5"
            sx={{ mb: 1, color: '#1CC7C1', fontWeight: 500 }}
          >
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 0.5, fontWeight: 700 }}>
            {description}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{ mb: 2, color: 'text.secondary' }}
          >
            {price}
          </Typography>
          <Button
            variant="contained"
            style={{
              padding: '7px 20px',
              background: 'linear-gradient(to right, #2FE1AE , #5Ce7ed)',
              fontSize: '16px',
              // border: 'none',
              fontWeight: 700,
            }}
          >
            BUY NOW
          </Button>
        </Paper>
      </Grid> */}
    </div>
  );
};

export default Bike;
