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
import {Link} from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import BoyTwoToneIcon from '@mui/icons-material/BoyTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import '../Link.css'
import SociohoodLogo from '../../assets/SociohoodLogo.png'


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openDrawer,setOpenDrawer] = React.useState(true);
    // const classes=useStyles();
  
    // const List = ['Dashboard','Profile Details',]

    const hideList=(e)=>{
        e = e || window.event;
        var elements = document.getElementsByClassName('element');
        for(var i = 0; i < elements.length; i++){
            if(!openDrawer){
                elements[i].style.display = 'none'; 
             var mainId=  document.getElementById('main')
             mainId.style.width="50%"
                //  elements.style.width="50%"
                setOpenDrawer(!openDrawer)// Hide all elements.
            }
            else if(openDrawer){
                setOpenDrawer(!openDrawer)
               var mainId=  document.getElementById('main')
                mainId.style.width="100%"
                // elements.style.width="100%"
                elements[i].style.display = 'inline-block'
            }
        }
    }

  const drawer = (
    <div id='main'>
      <Toolbar />
      <Divider />
      <List>
        
          <ListItem>
            <ListItemIcon>
            <Link to="/dashboard">
                   <LanguageIcon />
            </Link>
            </ListItemIcon>
                <div className="element">
                 <Typography >
                     <Link to="/dashboard"className="navLink">Dashboard</Link>
                 </Typography>
                </div> 
          
            {/* <ListItemText primary={text} /> */}
          </ListItem> 
          <ListItem>
              <ListItemIcon>
                <Link to="/profile">
                     <LightbulbIcon />
                </Link>
              </ListItemIcon>
                <div className="element">
                <Typography >
                      <Link to="/profile"className="navLink">Profile Details</Link>
                </Typography>
                </div>   
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Link to="/management">
                    <MeetingRoomIcon/>
                </Link>
              </ListItemIcon>
              <div className='element'>
                <Typography>
                    <Link to="/management"className="navLink">Gate Management</Link>
                </Typography>
              </div> 
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Link to="services">
                    <ElectricalServicesIcon />
                </Link>
              </ListItemIcon>
              <div className='element'>
                <Typography>
                    <Link to="services"className="navLink">Community Services</Link>
                </Typography>
                </div> 
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Link to="assets">
                    <PeopleAltOutlinedIcon />
                </Link>
              </ListItemIcon>
              <div className='element'>
                <Typography>
                    <Link to="assets"className="navLink">Assets</Link>
                </Typography>
                </div>  
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Link to="vendors">
                     <GroupsTwoToneIcon/>
                </Link>
              </ListItemIcon>
                <div className='element'>
                <Typography>
                     <Link to="vendors"className="navLink">Vendors</Link>
                </Typography>
                </div>  
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Link to="complaints">
                    <HelpOutlineTwoToneIcon />
                </Link>
              </ListItemIcon>
                <div className='element'>
                <Typography>
                     <Link to="complaints"className="navLink">Complaints</Link>
                </Typography>
                </div>  
          </ListItem>
          <ListItem>
              <ListItemIcon>
              <Link to="owners">
                  <BoyTwoToneIcon/>
            </Link>
              </ListItemIcon>
                <div className='element'>
                <Typography>
                     <Link to="owners"className="navLink">Owners & Tenants</Link>
                </Typography>
                </div>  
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Link to="accounts">
                     <ManageAccountsTwoToneIcon/>
                </Link>
              </ListItemIcon>
                <div className='element'>
                <Typography>
                     <Link to="accounts"className="navLink">Accounts</Link>
                </Typography>
                </div> 
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Link to="settings">
                     <SettingsApplicationsTwoToneIcon/>
                </Link>
              </ListItemIcon>
                <div className='element'>
                <Typography>
                     <Link to="settings"className="navLink">Settings</Link>
                </Typography>
                </div>
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Link to="logout">
                   <SettingsApplicationsTwoToneIcon />
                </Link>
              </ListItemIcon>
                <div className='element'>
                <Typography>
                     <Link to="logout"className="navLink">Logout</Link>
                </Typography>
                </div>
          </ListItem>
      </List>
      <Divider />
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,border:'none'}}
          >
            <MenuIcon />
          </IconButton>
          
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
            display: { xs: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer> 
        {/* <Drawer
          variant="permanent"
          sx={{
            display: { sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      </Box>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      > */}
        {/* <Toolbar /> */}
       
      {/* </Box> */}
    </Box>
  );
}
export default ResponsiveDrawer;