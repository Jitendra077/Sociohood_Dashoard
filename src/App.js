// import logo from './logo.svg';
import React from 'react'
import './App.css';
import LeftBar from './Components/LeftBar';
import Login from '../src/Login/Login';
// import SignUp from '../src/SignUp/SignupPage';
import Table from "../src/Table/Table"
import Navbar from './Components/Navbar';
import { Grid ,makeStyles} from '@material-ui/core';
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom'
import Dashboard from "./Components/Dashboard/dashboard"
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails"
import Accounts from "./Components/Accounts/Accounts"
import Assets from "./Components/Assets/Assets"
import CommunityServices from "./Components/Community_Services/CommunityServices"
// import GateManagement from "./Components/Gate Management/GateManagement"
import OwnersAndTenants from "./Components/Owners&Tenants/OwnersAndTenants"
import Settings from "./Components/Settings/Settings"
import Vendors from "./Components/Vendors/Vendors"
import Complaints from "./Components/Complaints/Complaints"
import AddVendorsModal from "./Components/Vendors/VendorsModal"
import Logout from './Logout/Logout';
import ResponsiveDrawer from "../src/Components/Drawer/Drawer";
import DrawerComponent from  "../src/Components/Drawer/DrawerComponent"

// import {Switch,Route} from 'react-router-dom'
const useStyles = makeStyles((theme)=>({
  table:{
    marginTop:theme.spacing(7),
  },
  container:{
    background:'#E5E5E5',
    marginTop:theme.spacing(7),
  }
}))

function App() {
  const classes=useStyles();
  return (
    <div >
      {/* <Navbar/> */}
      <Grid container className={classes.container}>
        <Grid item sm={2} xs={2}>
            <DrawerComponent/>
        </Grid>
        <Grid item sm={10}lg={10}xs={10}></Grid>
          <Grid item sm={1}xs={1}lg={1}></Grid>
          <Grid item sm={10} xs={10} lg={10}>
          <Routes>
          <Route exact path="/" element={<Login/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route path="/profile" element={<ProfileDetails/>} />     
            <Route path="/accounts"   element={<Accounts/>} />   
            <Route path="/assets" element={<Assets/>} />     
            <Route path="/services" element={<CommunityServices/>} />  
            {/* <Route path="/management" element={<GateManagement/>} />   */} */}
            <Route path="/owners" element={<OwnersAndTenants/>} />   
            <Route path="/settings" element={<Settings/>} />     
            <Route path="/vendors" element={<AddVendorsModal/>} />      
            <Route path="/complaints" element={<Complaints/>} />
            <Route path="/modal" element={<AddVendorsModal/>} />
            <Route path="/logout" element={<Logout/>} />
            </Routes>
        </Grid>
        <Grid item sm={1}xs={1}lg={1}></Grid>
        </Grid>
    </div>
  );
}

export default App;
