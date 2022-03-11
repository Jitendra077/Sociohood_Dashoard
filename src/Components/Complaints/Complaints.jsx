import React from 'react'
import SearchListFilter from './SearchList';
import SearchColumn from "./SearchColumn"
import './Complaints.css';
import Table from '../../Table/Table'
// import { createTheme } from '@material-ui/core';
// import { createStyles, makeStyles } from '@mui/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';



// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });
// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       backgroundColor: theme.palette.red,
//     },
//   }),
// );
// const themes = theme.breakpoints

// const styles = (themes) => ({
//   root: {
//     padding: theme.spacing(1),
//     [theme.breakpoints.down('md')]: {
//       backgroundColor: theme.palette.secondary.main,
//     },
//     [theme.breakpoints.up('md')]: {
//       backgroundColor: theme.palette.primary.main,
//     },
//     [theme.breakpoints.up('lg')]: {
//       backgroundColor:'red' ,
//     },
//   },
// });

function Complaints() {
  
  return (
    <>
    <div>
      <div class='card  m-2'style={{marginTop:120}}>
        <div class='card-body'>
          <div className='root'>
          <p class='h5'>Complaints catalouge</p>
           <button class='btn btn-success'>New items</button>
           <SearchColumn/>
          <SearchListFilter/>
          <button class='btn btn-primary'>Add new</button>
          </div>
        </div>
      </div>
      </div>
      <div class='card m-2'>
        <div class='card-body'>
            <Table/>
        </div>
      </div>
    </>
  )
}

export default Complaints