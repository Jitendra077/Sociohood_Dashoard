import React from "react";
import { Button, Paper, Grid, Typography, Box } from "@material-ui/core";
import loginRightImage from "../assets/SignUp3w.jpg";
import loginLeftImage from "../assets/SignUp3b.jpg";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Checkbox, Divider, IconButton,CardMedia } from "@mui/material";
import { Close, Email, Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "../Login/styles";
import SocioLogo from '../assets/SociohoodLogo.png';


  const Login=()=>{
    const classes = useStyles();
      return(
          <div>
               <Grid padded style={{ height: "100vh" }} container>
          {/* LOGIN LEFT CONTAINER */}
          {/* <CardMedia
            //  className={classes.media}
             image={require("../assets/SocioHood Logo 4.png")} // require image
            //  title="Contemplative Reptile"
            //  style={styles.media} // specify styles
            /> */}

          <Grid
            style={{
              backgroundImage: `url(${loginLeftImage})`,
              backgroundSize: "cover",
            }}
               xs={12}
               className={classes.loginRight}
          >     
            <img src={SocioLogo} alt="SocioLogo"className={classes.SocioLogo}/>
            <Typography className={classes.loginRightText}>Create new account</Typography>
            <Typography className={classes.loginRightTitle}>
             or use your email for registration
            </Typography>
            <Grid container style={{ justifyContent: "center" }}>
              <GoogleLoginButton
                style={{
                  width: 233,
                  borderRadius: 50,
                  color: "#818182",
                  fontSize: 18,
                  height: 40,
                }}
              />
              <FacebookLoginButton
                style={{
                  width: 233,
                  borderRadius: 50,
                  fontSize: 18,
                  height: 40,
                }}
                onClick={() => {
                  alert("Coming Soon");
                }}
              />
            </Grid>
            <Grid>
              <form style={{ marginTop: 30 }}>
              <Grid container style={{justifyContent:'center'}}>    
                    <input
                        // style={{ marginLeft: 38 }}
                        className={classes.sideBySide}
                        type="name"
                        name="First Name"
                        placeholder="First Name"
                        // onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                        // style={{ marginLeft: 30 }}
                        className={classes.sideBySide}
                        type="name"
                        name="Last Name"
                        placeholder="Last Name"
                        // onChange={(event) => setEmail(event.target.value)}
                        />
                </Grid>
                <input
                  // style={{ marginLeft: 30 }}
                  className={classes.Input}
                  type="email"
                  name="email"
                  placeholder="Email"
                 // onChange={(event) => setEmail(event.target.value)}
                />
                {/* <IconButton>
                  <Email
                    style={{ color: "#EFAF0B", fontSize: 26, marginTop: -10 }}
                  />
                </IconButton> */}
               <br/>
    
                <input
                  // style={{ marginLeft: 30 }}
                  className={classes.Input}
                  // type={changeType ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                //  onChange={(event) => setPassword(event.target.value)}
                />
                <br/>
                {/* <IconButton
                // onClick={() => {
                //   setchangeType(!changeType);
                // }}
              >
                <Visibility
                  style={{ color: "#EFAF0B", fontSize: 26, marginTop: -10 }}
                />
              </IconButton> */}
              <input
                  // style={{ marginLeft: 30 }}
                  className={classes.Input}
                //   type="flat No."
                  name="Flat No."
                  placeholder="Flat No"
                 // onChange={(event) => setEmail(event.target.value)}
                />
                <br/>
                <input
                  // style={{ marginLeft: 30 }}
                  className={classes.Input}
                //   type="House No."
                  name="House No."
                  placeholder="House No"
                 // onChange={(event) => setEmail(event.target.value)}
                />
                <br></br>
                <Grid
                  container
                  style={{
                    justifyContent: "center",
                  }}
                >
                </Grid>
                <button
                  type="submit"
                  className={classes.automateButton}
                //  onClick={handleLogin}
                >
                  SIGN UP
                </button>
              </form>
            </Grid>
          </Grid>
            {/*  {/* LOGIN RIGHT CONTAINER */}
          <Grid
            style={{
              backgroundImage: `url(${loginRightImage})  `,
            }}
            className={classes.loginLeft}
            xs={12}
          >
            <Grid conatiner>   
              <Typography className={classes.loginLeftText}>
                Welcome Back!
              </Typography>
            </Grid>
    
            <Grid
              container
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <Typography className={classes.loginLeftTitle}>
              If you are new to us please sign up with us!
              </Typography>
            </Grid>
            <button
            className={classes.signInButton}
              >
              SIGN UP
            </button>
          </Grid>      
        </Grid>
   
          </div>
      )
  }
    
  export default Login
  