// import {makeStyles, Typography,Container} from "@material-ui/core";
// import LanguageIcon from '@mui/icons-material/Language';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
// import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
// import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
// import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
// import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
// import BoyTwoToneIcon from '@mui/icons-material/BoyTwoTone';
// import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
// import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
// import { useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu';
// import Divider from '@mui/material/Divider';
// import {Link} from "react-router-dom";
// import '../Components/Link.css';

// const useStyles = makeStyles((theme) => ({
//     container:{
//         height:"100vh",
//         paddingTop:theme.spacing(8),
//         backgroundColor:'#ffff',
//         cursor:'pointer',
// //         [ theme.breakpoints.down("lg")]:{
// //             marginBottom:theme.spacing(3),
// //             cursor:'pointer',
// //             height:'100vh'
// //        },
// //        [ theme.breakpoints.up("sm")]:{
// //         marginBottom:theme.spacing(3),
// //         cursor:'pointer',
// //         height:'100vh'
// //    },
       
//     },
//     item:{
//         display:'flex',
//         alignItems:'center',
//         marginBottom:theme.spacing(5),
//        [ theme.breakpoints.up("sm")]:{
//             marginBottom:theme.spacing(3),
//             cursor:'pointer'
//        },
//     },
//     text:{
//         [theme.breakpoints.down("sm")]:{
//             display:"none"
//         },       
//         color:'black',      
//      },
    
//     icon:{
//     marginRight:theme.spacing(1),
//     [theme.breakpoints.up("sm")]:{
//         fontSize:'8px'
//     },
//     },
//     divider:{
//         paddingBottom:8,     
//         width:'100%',
//         height:8,
//         cursor:'grab'
//     },
//     hamberg:{
//         maxWidth: 310,
//         transition: "transform 0.15s ease-in-out",
//     },

// }));



// const LeftBar = () => {

//     const [openDrawer,setOpenDrawer] = useState(true);
//     const classes=useStyles();
  
//     const List = ['Dashboard','Profile Details',]

//     const hideList=(e)=>{
//         e = e || window.event;
//         var elements = document.getElementsByClassName('element');
//         for(var i = 0; i < elements.length; i++){
//             if(!openDrawer){
//                 elements[i].style.display = 'none'; 
//               var mainId=  document.getElementById('main')
//               mainId.style.width="50%"
//                 setOpenDrawer(!openDrawer)// Hide all elements.
//             }
//             else if(openDrawer){
//                 setOpenDrawer(!openDrawer)
//                 var mainId=  document.getElementById('main')
//                 mainId.style.width="100%"
//                 elements[i].style.display = 'inline-block'
//             }
//         }
//     }
        
//     return(
//     <div id="main">
//         <div class='card'>
//             <div class='card-body'>
//             <Container className={classes.container} >
//          <div className={classes.hamberg}>
//             <MenuIcon onClick={hideList}/>
//          </div>
//            <div className={classes.divider}>
//             <Divider/>
//            </div>
//             <div className={classes.item}>
//             <Link to="/dashboard">
//                    <LanguageIcon className = {classes.icon}/>
//             </Link>
//                 <div className="element">
//                  <Typography className={classes.text}>
//                      <Link to="/dashboard"className="navLink">Dashboard</Link>
//                  </Typography>
//                 </div> 
//             </div>
//             <div className={classes.item}>
//             <Link to="/profile">
//                    <LightbulbIcon className = {classes.icon}/>
//             </Link>
//                 <div className="element">
//                 <Typography className={classes.text}>
//                     <Link to="/profile"className="navLink">Profile Details</Link>
//                 </Typography>
//                 </div> 
//             </div>
//             <div className={classes.item}>
//             <Link to="/management"className={classes.link}>
//                  <MeetingRoomIcon className = {classes.icon}/>
//             </Link>
//                 <div className='element'>
//                 <Typography className={classes.text}>
//                     <Link to="/management"className="navLink">Gate Management</Link>
//                 </Typography>
//                 </div>   
//             </div>
//             <div className={classes.item}>
//             <Link to="services"className={classes.link}>
//                   <ElectricalServicesIcon className = {classes.icon}/>
//             </Link>
//                 <div className='element'>
//                 <Typography className={classes.text}>
//                     <Link to="services"className="navLink">Community Services</Link>
//                 </Typography>
//                 </div> 
//             </div>
//             <div className={classes.item}>
//             <Link to="assets"className={classes.link}>
//                  <PeopleAltOutlinedIcon className = {classes.icon}/>
//             </Link>
//                 <div className='element'>
//                 <Typography className={classes.text}>
//                     <Link to="assets"className="navLink">Assets</Link>
//                 </Typography>
//                 </div>   
//             </div>
//             <div className={classes.item}>
//             <Link to="vendors"className={classes.link}>
//                 <GroupsTwoToneIcon className = {classes.icon}/>
//             </Link>
//                 <div className='element'>
//                 <Typography className={classes.text}>
//                     <Link to="vendors"className="navLink">Vendors</Link>
//                 </Typography>
//                 </div>     
//             </div>
//             <div className={classes.item}>
//             <Link to="complaints"className={classes.link}>
//                   <HelpOutlineTwoToneIcon className = {classes.icon}/>
//             </Link>
//                 <div className='element'>
//                 <Typography className={classes.text}>
//                     <Link to="complaints"className="navLink">Complaints</Link>
//                 </Typography>
//                 </div>   
//             </div>
//             <div className={classes.item}>
//             <Link to="owners"className={classes.link}>
//                   <BoyTwoToneIcon className = {classes.icon}/>
//             </Link>
//                 <div className='element'>
//                 <Typography className={classes.text}>
//                     <Link to="owners"className="navLink">Owners & Tenants</Link>
//                 </Typography>
//                 </div>  
//             </div>
//             <div className={classes.item}>
//             <Link to="accounts"className={classes.link}>
//                  <ManageAccountsTwoToneIcon className = {classes.icon}/>
//             </Link>

//                 <div className='element'>
//                 <Typography className={classes.text}>
//                     <Link to="accounts"className="navLink">Accounts</Link>
//                 </Typography>
//                 </div>  
//             </div>
//             <div className={classes.item}>
//             <Link to="settings"className={classes.link}>
//                 <SettingsApplicationsTwoToneIcon className = {classes.icon}/>
//             </Link>
//                 <div className='element'>
//                   <Typography className={classes.text}>
//                       <Link to="settings"className="navLink">Settings</Link>
//                   </Typography>
//                 </div>
//             </div>
//             <div className={classes.item}>
//             <Link to="logout"className={classes.link}>
//                 <SettingsApplicationsTwoToneIcon className = {classes.icon}/>
//             </Link>
//                 <div className='element'>
//                   <Typography className={classes.text}>
//                       <Link to="logout"className="navLink">Logout</Link>
//                   </Typography>
//                 </div>
//             </div>
//         </Container>
//             </div>
//         </div>
//         </div>
//     )
// }
// export default LeftBar