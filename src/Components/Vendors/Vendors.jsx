// import { Button ,makeStyles} from '@material-ui/core'
// import React, {useState} from 'react';
// import Modal from 'react-modal';
// import Table from '../../Table/Table';
// import AddVendors from "./VendorsModal"

// const useStyles = makeStyles((theme) => ({
//     heading:{
//         display:"flex",
//         justifyContent:'space-between',
//         padding:theme.spacing(10)
//     },
//     button:{
//         width:'20%',
//         height:'50%',
//         background:'purple',
//         color:'white',
//         "&:hover":{
//             color:'black',
//             background:'skyblue'
//         }
//     }
// }));

// function Vendors() {
//     const classes = useStyles();

//     // const AddVendors = () => {
       
//     //   const [modalIsOpen,setModalIsOpen] = useState(false);

//     // const setModalIsOpenToTrue =()=>{
//     //     setModalIsOpen(true)
//     // }

//     // const setModalIsOpenToFalse =()=>{
//     //     setModalIsOpen(false)
//     // }

//     // return(
//     //     <>
//     //         {/* <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button> */}

//     //         <Modal isOpen={modalIsOpen}>
//     //             <button onClick={setModalIsOpenToFalse}>x</button>
//     //             <Table/>
//     //         </Modal>
//     //     </>
//     // )
//     // }
//   return (
//     <React.Fragment>
//         <div className={classes.heading}>
//         <h1>Vendors</h1>
//         <Button variant="contained" className={classes.button}onClick={AddVendors}>Add Vendor/s</Button>
//         </div>   
//     </React.Fragment>
//   )
// }

// export default Vendors