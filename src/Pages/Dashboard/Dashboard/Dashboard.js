import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
// import AddDoctor from '../AddDoctor/AddDoctor';
// import DashboardHome from '../DashboardHome/DashboardHome';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { admin } = useAuth();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Link to="/">
        <ListItemText primary="Home" />
      </Link>
      <Link to={`${url}`}>
        <ListItemText primary="Dashboard" />
      </Link>
      {admin && (
        <>
          <Link to={`${url}/add-doctor`}>
            <ListItemText primary="Add Doctor" />
          </Link>
          <Link to={`${url}/make-admin`}>
            <ListItemText primary="Make Admin" />
          </Link>
        </>
      )}
      <Divider />
      <Link to={`${url}/my-orders`} style={{ textDecoration: 'none' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: '#000',
            mt: 3,
            '&:hover': {
              color: '#FE495C',
            },
          }}
        >
          My Orders
        </Typography>
        {/* <Button color="inherit" sx={{ color: '#000' }}>
                    Home
                  </Button> */}
      </Link>
      <Link to={`${url}/payment`} style={{ textDecoration: 'none' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: '#000',
            my: 5,
            '&:hover': {
              color: '#FE495C',
            },
          }}
        >
          Pay Now
        </Typography>
        {/* <Button color="inherit" sx={{ color: '#000' }}>
                    Home
                  </Button> */}
      </Link>
      <Link to={`${url}/review`} style={{ textDecoration: 'none' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: '#000',
            mt: 3,
            '&:hover': {
              color: '#FE495C',
            },
          }}
        >
          Review
        </Typography>
        {/* <Button color="inherit" sx={{ color: '#000' }}>
                    Home
                  </Button> */}
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          {/* <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route> */}
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
