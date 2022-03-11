import { Button, makeStyles } from '@material-ui/core';
import React, {useState} from 'react';
import Modal from 'react-modal';


const useStyles = makeStyles((theme) => ({
    
    modal:{
            marginTop:theme.spacing(30),
            marginLeft:theme.spacing(40),
            height: '40%',
            width: theme.spacing(50),
        //    border:'2px solid grey',
            background: '#F5F5F5',
                           
    },
    Closebutton:{
        float:'right',
        background:'crimson',
        color:'white',
        marginTop:theme.spacing(3)
    },
    YesBtn:{
        background: '#292929',
        height: '55.4499282836914px',
        width: '160.6894073486328px',
        left: '109px',
        top: '103.0000305175781px',
        borderRadius: '35px',
        color:'white',
        border:'none',
        "&:hover":{
            width:'165.6894073486328px'
        }   
    },
    NoBtn:{
        background: '#4D64FA',
        height: '55.4499282836914px',
        width: '160.6894073486328px',
        // left: '109px',
        top: '283.0000305175781px',
        borderRadius: '35px',
        color:'white',
        border:'none',
        "&:hover":{
            width:'165.6894073486328px'
        }
    },
    text:{
        height: '63px',
        width: '587px',
        left: '53px', 
        top: '93px',
        borderRadius: null

    }
}));

function Logout(){ 
    const classes = useStyles()
    return(
        <>
        <div class='card m-8' className={classes.modal}>
            <div class='card-body'>
                <p class='h4'style={{padding:25}}>Do you want to logout ?</p>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <button className={classes.YesBtn}>Yes</button>
                    <button  class='btn btn-primary'className={classes.NoBtn}>No</button>
                </div> 
            </div>
        </div>
    </>
    );
    
}
export default Logout;