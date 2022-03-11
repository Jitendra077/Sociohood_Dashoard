import {makeStyles,AppBar,Toolbar,Typography,Badge,image, Grid} from "@material-ui/core";
// import {createTheme} from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SociohoodLogo from '../assets/SociohoodLogo.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';



const Navbar = () => {
    // const classes = useStyles();
    return(
        <AppBar position="fixed">
          <Toolbar >
              <Grid container>
                <Grid item xs={2}sm={2}lg={2}> 
                    <Typography>
                    <img src={SociohoodLogo} alt="SociohoodLogo"style={{width:80}} />
                    </Typography>
                </Grid> 
                <Grid item xs={2}sm={2}lg={2}>
                    <Typography>
                         Good Evening,Admin
                    </Typography>
                </Grid>
                <Grid item xs={2}sm={2}lg={2}>
                    <Typography>
                       <SearchIcon/>
                    </Typography>
                </Grid>
                <Grid item xs={2}sm={2}lg={2}>
                <Typography>
                    <NotificationsIcon />
                </Typography>
                </Grid>
                <Grid item xs={2}sm={2}lg={2}>
                   <Typography>
                        Admin
                    </Typography> 
                </Grid>
                <Grid item xs={2}sm={2}lg={2}>
                    <Typography>
                    <AccountBoxIcon />   
                    </Typography>
                </Grid>

              </Grid>
          
                {/* <SearchIcon />
                    <InputBase placeholder="Search..."/>
                    <Badge color="secondary" badgeContent=" ">
                    <NotificationsIcon />
                    </Badge>
                    <Typography>
                        Admin
                    </Typography>             
                    <AccountBoxIcon />                        */}
         </Toolbar>
        </AppBar>
    )
}
export default Navbar