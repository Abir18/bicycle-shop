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

const Navigation = () => {
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
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: '#000' }}
              >
                Home
              </Typography>

              <Button variant="outlined" color="inherit" sx={{ color: '#000' }}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Navigation;
