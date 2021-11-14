import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../Images/logo.png';
import { Grid } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const { user, logOutUser } = useAuth();
  return (
    <Grid container>
      <Grid item xs={2} sm={12} md={12}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: 'white',
              height: '100px',
              padding: '10px 0',
            }}
          >
            <Toolbar>
              {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: '#000' }}
          >
            <MenuIcon />
          </IconButton> */}
              <img src={logo} style={{ marginLeft: '150px' }} alt="" />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginLeft: '30%',
                }}
              >
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: '#000',
                      mr: 3,
                      '&:hover': {
                        color: '#FE495C',
                      },
                    }}
                  >
                    Home
                  </Typography>
                  {/* <Button color="inherit" sx={{ color: '#000' }}>
                    Home
                  </Button> */}
                </Link>

                <Link to="/explore" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: '#000',
                      mr: 3,
                      '&:hover': {
                        color: '#FE495C',
                      },
                    }}
                  >
                    Explore
                  </Typography>

                  {/* <Button color="inherit" sx={{ color: '#000' }}>
                    Explore
                  </Button> */}
                </Link>
                {/* ======================================================= */}

                {user?.email ? (
                  <>
                    <Box>
                      <NavLink
                        to="/dashboard"
                        style={{ textDecoration: 'none' }}
                      >
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            color: '#000',
                            mr: 2,
                            '&:hover': {
                              color: '#5Ce7ed',
                            },
                          }}
                        >
                          DashBoard
                        </Typography>
                      </NavLink>
                    </Box>
                    <span
                      style={{ margin: '5px 15px 0px 200px', color: '#000' }}
                    >
                      {user.displayName}{' '}
                    </span>
                    {/* <span style={{ color: '#000' }}> {user.email}</span> */}
                    <Button
                      onClick={logOutUser}
                      variant="outlined"
                      color="inherit"
                      sx={{ color: '#000' }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <NavLink to="/login" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ color: '#000' }}
                    >
                      Login
                    </Button>
                  </NavLink>
                )}

                {/* ==================================================== */}

                {/* <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{ color: '#000' }}
                  >
                    Login
                  </Button>
                </Link> */}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Navigation;
