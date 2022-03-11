import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import Modal from 'react-modal';
import VendorsForm from '../Vendors/VendorsForm';

const useStyles = makeStyles((theme) => ({
 
    button:{
        textDecoration:'none',
        background:'purple',
        color:'white',
        "&:hover":{
            color:'black',
            background:'skyblue'
        }
    },
    modal:{
            marginTop:theme.spacing(10),
            marginLeft:theme.spacing(40),
            height: '80%',
            width: theme.spacing(100),
        //    border:'2px solid grey',
            background: '#F5F5F5',
            overflowY: 'scroll'
                    
    },
    Closebutton:{
        float:'right',
        background:'crimson',
        color:'white',
        marginTop:theme.spacing(3)
    }
}));

function VendorModal(){

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    const classes = useStyles();
 
   return(
        <>
       
        <div className={classes.heading}>
            <Grid container>
                <Grid item sm={6} xs={6} lg={6}></Grid>
                <Grid item sm={6} xs={6} lg={6}>
                    <button style={{padding:12,margin:15,backgroundColor:'skyblue',border:'none'}} onClick={setModalIsOpenToTrue}>Add Notice</button>
                </Grid>
            </Grid>  
         </div> 
                
             <Modal isOpen={modalIsOpen} className={classes.modal}>
              <div className='card'>
                <div className='card-body'>
                    <button 
                     type="button" 
                     class="btn btn-danger"style={{float:'right',marginTop:10}}
                     onClick={setModalIsOpenToFalse}>
                       X
                    </button>
                  <VendorsForm/>
                </div>
              </div>
              <div style={{marginTop:40}}>
                  rest....
              </div>
              
            </Modal>
        </>
    )
}
export default VendorModal;