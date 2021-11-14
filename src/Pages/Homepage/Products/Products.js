import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import useProducts from '../../../hooks/useProducts';
import { Container, Grid, Typography } from '@mui/material';
import Bike from '../Bike/Bike';
import Footer from '../../Shared/Footer/Footer';

const Products = () => {
  const { bikes } = useProducts();

  return (
    <>
      <Navigation />
      <Typography
        sx={{ fontWeight: 600, mt: 20, color: '#5Ce7ed' }}
        variant="h4"
        component="div"
      >
        All Products
      </Typography>
      <Container>
        <Grid
          sx={{ m: 5 }}
          container
          // spacing={{ xs: 2, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {bikes.map(bike => (
            <Bike key={bike._id} bike={bike} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Products;
