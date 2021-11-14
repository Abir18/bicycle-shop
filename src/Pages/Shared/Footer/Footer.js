import React from 'react';
import {
  Container,
  Grid,
  Box,
  Divider,
  Typography,
  OutlinedInput,
  Button,
} from '@mui/material';
import footerLogo from '../../../Images/footer-logo.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#151C29' }}>
      <Container>
        <Grid container columns={{ xs: 4, md: 12 }}>
          <Grid item xs={12} md={6}>
            <img
              src={footerLogo}
              style={{ float: 'left', marginTop: '50px' }}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                mt: 5,
                ml: 27,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <FacebookOutlinedIcon
                sx={{
                  fontSize: '40px',
                  color: '#fff',
                  backgroundColor: '#151C29',
                  '&:hover': {
                    color: '#FE495C',
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  fontSize: '40px',
                  color: '#fff',
                  backgroundColor: '#151C29',
                  '&:hover': {
                    color: '#FE495C',
                  },
                }}
              />
              <YouTubeIcon
                sx={{
                  fontSize: '40px',
                  color: '#fff',
                  backgroundColor: '#151C29',
                  '&:hover': {
                    color: '#FE495C',
                  },
                }}
              />
              <LinkedInIcon
                sx={{
                  fontSize: '40px',
                  color: '#fff',
                  backgroundColor: '#151C29',
                  '&:hover': {
                    color: '#FE495C',
                  },
                }}
              />
              <PinterestIcon
                sx={{
                  fontSize: '40px',
                  color: '#fff',
                  backgroundColor: '#151C29',
                  '&:hover': {
                    color: '#FE495C',
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Divider sx={{ color: '#FFF', my: 10 }} />
          </Grid>
          <Grid xs={12} sm={12} md={3}>
            <Box sx={{ textAlign: 'start' }}>
              <Typography
                sx={{
                  color: '#FFF',
                  fontSize: '30px',
                  fontWeight: 700,
                  // '&:after': {
                  //   backgroundColor: '#fff',
                  //   height: '2px',
                  //   width: '40px',

                  //   content: '""',
                  //   position: 'absolute',
                  //   bottom: 0,
                  //   left: 0,
                  // },
                }}
                variant="h3"
                gutterBottom
                component="div"
              >
                About Us
              </Typography>
              <Divider
                sx={{
                  color: '#FFF',
                  my: 3,
                  width: '30%',
                }}
              />
              <Typography
                sx={{ color: '#FFF', mr: 7, lineHeight: '30px' }}
                variant="body1"
                gutterBottom
              >
                We’re a bike shop, a family and a team of riders, helping folks
                in New York explore their passion for cycling. Biking is more
                than transportation or exercise, it’s a lifestyle. Whether you
                need help with where to ride or are in need.
              </Typography>
            </Box>
          </Grid>

          <Grid xs={12} sm={12} md={3}>
            <Box sx={{ textAlign: 'start' }}>
              <Typography
                sx={{ color: '#FFF', fontSize: '30px', fontWeight: 700 }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Services
              </Typography>
              <Divider
                sx={{
                  color: '#FFF',
                  my: 3,
                  width: '30%',
                }}
              />
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Free Bike Check-Up
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Bicycle Spare Parts
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Custom Parts & Accessories
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Full Package Cleaning
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />
                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Bike Personal Fitting
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Stationary Service Points
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ textAlign: 'start' }}>
              <Typography
                sx={{ color: '#FFF', fontSize: '30px', fontWeight: 700 }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Quick Links
              </Typography>
              <Divider
                sx={{
                  color: '#FFF',
                  my: 3,
                  width: '30%',
                }}
              />
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Home
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  About
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Blog
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Products
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />
                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  RTL Tested
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <ArrowForwardIosIcon
                  sx={{
                    color: '#FFF',
                    fontSize: '14px',
                    margin: '5px 8px 0 0',
                  }}
                />

                <Typography
                  sx={{
                    color: '#FFF',
                    textAlign: 'start',
                    '&:hover': { color: '#FE495C' },
                  }}
                  variant="body1"
                  gutterBottom
                >
                  Contact
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ textAlign: 'start' }}>
              <Typography
                sx={{ color: '#FFF', fontSize: '30px', fontWeight: 700 }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Newsletter
              </Typography>
              <Divider
                sx={{
                  color: '#FFF',
                  my: 3,
                  width: '30%',
                }}
              />
              <Typography
                sx={{
                  color: '#FFF',
                  mb: 4,
                  '&:hover': { color: '#FE495C' },
                }}
                variant="body1"
                gutterBottom
              >
                The best bicycling experience
              </Typography>
              <form>
                <OutlinedInput
                  style={{
                    lineHeight: 'normal',
                    height: '54 px',
                    padding: '0 15px',
                    width: '100%',
                    backgroundColor: ' #fff',
                    color: '#222',
                    border: 'none',
                    fontSize: '17px',
                    fontWeight: 500,
                    textAlign: 'center',
                    '&:focus': {
                      backgroundColor: '#333',
                      color: '#FFF',
                      border: 'none',
                      outline: 'none',
                    },
                  }}
                  placeholder="Enter Your Email"
                />
                <Button
                  sx={{
                    backgroundColor: '#cfdc28',
                    border: 'none',
                    color: '#000',
                    cursor: 'pointer',
                    transition: 'all .3s',
                    padding: '0 15px',
                    fontSize: '17px',
                    fontWeight: 500,
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: 'normal',
                    height: '54px',
                    marginTop: '5px',
                    '&:hover': {
                      backgroundColor: '#333',
                      color: '#FFF',
                      border: 'none',
                    },
                  }}
                  variant="outlined"
                >
                  Subscribe
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Divider sx={{ color: '#FFF', my: 5 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              sx={{
                color: '#FFF',
                textAlign: 'start',
                '&:hover': { color: '#FE495C' },
              }}
              variant="body1"
              gutterBottom
            >
              &copy; Copyright 2021 Bicycle Shop. All Rights Reserved
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              sx={{
                color: '#FFF',
                textAlign: 'end',
                mb: 4,
              }}
              variant="h6"
              gutterBottom
            >
              Designed by{' '}
              <span style={{ color: '#FE495C' }}>Rifat Salman Abir</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
