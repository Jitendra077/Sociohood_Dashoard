// import React from 'react';
// import { AppBar,Typography,Toolbar,useMediaQuery,useTheme } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import SociohoodLogo from '../assets/SociohoodLogo.png'
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import DrawerComponent from '../Sidebar/DrawerComponent';

// const  Appbar = () => {

//     const theme = useTheme()
//     const isMatch = useMediaQuery(theme.breakpoints.down('md'))
//     const isMatch1 = useMediaQuery(theme.breakpoints.down('sm'))
//     console.log('ismatch',isMatch)
//     console.log(theme  )
//     return(
//         <>
//             <AppBar sx={{background:'navyblue'}}>
//                 <Toolbar>
//                    <img src={SociohoodLogo} alt="SociohoodLogo" width={90}/>
                   
//                    {
                   
//                    isMatch ? 
//                    (
//                        <>
//                          <Typography sx={{marginLeft:4}}>
//                             Good Evening, Admin !
//                          </Typography> 

//                          <NotificationsNoneIcon sx={{marginLeft:3}}/>
//                          <MoreVertSharpIcon sx={{marginLeft:2}}/>
//                          <Typography sx ={{marginLeft:'auto'}}>
//                                 Admin
//                          </Typography>
//                          <AccountCircleRoundedIcon sx={{marginLeft:4}}/>  
//                           <DrawerComponent/>
//                        </>
                
//                   ) : (
//                    <>
//                          <Typography sx={{marginLeft:4}}>
//                             Good Evening, Admin !
//                          </Typography> 

//                          <NotificationsNoneIcon sx={{marginLeft:3}}/>
//                          <MoreVertSharpIcon sx={{marginLeft:2}}/>
//                          <Typography sx ={{marginLeft:'auto'}}>
//                                 Admin
//                          </Typography>
//                          <AccountCircleRoundedIcon sx={{marginLeft:4}}/>  
//                           <DrawerComponent/>
//                    </>
                  
//                 )
                   
//                 }               
//                 </Toolbar>  
//             </AppBar>
//             {/* <DrawerComponent/> */}
//         </>
        
//     )
// }

// export default Appbar