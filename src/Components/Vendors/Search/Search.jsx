import * as React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@material-ui/core';

export default function Search() {

  return (
     <Grid container>
        <Grid item sm={1} lg={1}xs={1}></Grid>
        <Grid item sm={10} lg={10}xs={10}>
        <div className='card'>
          <div className='card-body'>
          {/* <input type='text' placeholder='search text'/> */}
          <TextField label="Search vendors"/>
          </div>
        </div>
        </Grid>
        <Grid item sm={1} lg={1}xs={1}></Grid>
      </Grid>
  );
}
