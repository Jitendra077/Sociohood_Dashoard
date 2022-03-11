import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
  //   toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  SocioLogo:{ 
    Width:830,
    Height:1321,
    Top:10,
  },
  paper: {
    backgroundColor: "#4d5850",
    // marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "17vw",
    height: "30vh",
    backgroundColor: "black",
    marginTop: -30,
  },
  button: {
    borderRadius: 10,
    // marginTop: theme.spacing(5),
    backgroundColor: "#fb861b",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
    "&:hover": {
      backgroundColor: "#fb861b",
      color: "#fff",
    },
  },
  textField: {
    backgroundColor: "white",
    padding: 2,
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 7,
    marginTop: 7,
    width: 500,
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 20,
  },
  label2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  account: {
    textAlign: "center",
    color: "#fb861b",
    marginTop: 20,
    fontWeight: "bold",
    textDecoration: "underline",
    marginLeft: 10,
    "&:hover": {
      color: "#fff",
    },
  },

  loginLeft: {
    // backgroundColor: "#EFAF0B",
    textAlign: "center",

    flex: 1,
  },

  loginRight: {
    // backgroundColor: "#4d5850",
    textAlign: "center",
    flex: 1,
  },
  loginLeftlogo: {
    height: "auto",
    width: "48%",
    marginTop: 10,
  },
  sideBySide:{
   
    height:32,
    borderRadius:10,
    backgroundColor: "#d9d9d9",
    width:160
    
  },

  loginLeftText: {
    marginTop: 120,
    fontWeight: "bold",
    fontSize: "3rem",
    fontFamily: "Arial",
    textShadow: "0px 4px 5px #414142",
    color: "#fff",

  },
  loginLeftTitle: {
    marginTop: 20,
    width: 320,
    fontSize: "1.1rem",
    color: "#fff",
  },
  signInButton: {
    width:300,
    marginTop: 28,
    color: "#fff",
    backgroundColor: "#292929",
    borderRadius: 35,
    // padding: 10,
    // width: "100%",
    fontWeight: "bold",
    // marginBottom: 35,
    // paddingLeft: 100,
    // paddingRight: 100,
    height:53,
    top:532,
    left:219

  },
  loginRightText: {
    color: "#FFFFFF",
    fontSize: "2.5rem",
    // marginTop: 80,
    fontWeight: "bold",
  },
  loginRightTitle: {
    color: "#929292",
    marginBottom: 20,
    fontSize: "1.2rem",
  },
  automateButton: {
    marginTop: 40,
    color: "white",
    backgroundColor: "#4D64FA",
    borderRadius: 50,
    padding: 10,
    fontWeight: "bold",
    marginBottom: 35,
    paddingLeft: 100,
    paddingRight: 100,
  },

  Input: {
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#d9d9d9",
    display: "relative",
    outline: 0,
    width: 310,
  },
  faIcons: {
    color: "#4d5850",
  },
  mailButton: {},

  button: {
    borderRadius: 5,
    backgroundColor: "#EFAF0B",
    padding: 7,
    fontWeight: "bold",
    fontSize: 13,
    // width: "80%",
    marginTop: 20,
    "&:hover": {
      backgroundColor: "#EFAF0B",
      color: "#fff",
    },
  },
}));
