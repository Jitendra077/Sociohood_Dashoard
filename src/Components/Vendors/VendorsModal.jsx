import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import Modal from 'react-modal';
import VendorsForm from './VendorsForm';
import Search from '../Vendors/Search/Search'
import VendorsTable from './Vendors_Table/VendorsTable'

const useStyles = makeStyles((theme) => ({
    heading:{
        display:"flex",
        justifyContent:'space-between',
        padding:theme.spacing(7),

    },
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
            overflow: 'auto'
                    
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
                <Grid item sm={6} xs={6} lg={6}>
                    <Typography>
                      <h3>Vendors</h3>   
                    </Typography>
                </Grid>
                <Grid item sm={6} xs={6} lg={6}>
                    <Button variant="contained" className={classes.button}onClick={setModalIsOpenToTrue}>Add Vendor/s</Button>
                </Grid>
            </Grid>  
         </div>
                  <Search/>
               <Grid container>
                   <Grid item xs={1} sm={1}lg={1}></Grid>
                   <Grid  item xs={10} sm={10}lg={10}>
                       <Typography>
                         <VendorsTable/>
                       </Typography>
                   </Grid>
                   <Grid item xs={1} sm={1}lg={1}></Grid>
               </Grid>
                
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
              
            </Modal>
        </>
    )
}
export default VendorModal;