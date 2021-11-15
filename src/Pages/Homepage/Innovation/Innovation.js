import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import bike from '../../../Images/bicycle-img.png';

const Innovation = () => {
  return (
    <Box sx={{ flexGrow: 1, my: 12 }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <img src={bike} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ textAlign: 'left', ml: 5, mt: 5 }}
            >
              Innovating to Reimagine riding bicycle
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ textAlign: 'left', ml: 5, mt: 5 }}
            >
              We are one of the biggest bicycle-families in the world. Our
              services include all types of repair, search of a perfect bike for
              every customer, sport events organization and much more. Join our
              community and become a part of the bike-family.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Innovation;
