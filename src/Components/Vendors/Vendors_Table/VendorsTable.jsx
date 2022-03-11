import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography,Grid } from '@material-ui/core';

const columns = [

  { field: 'name', headerName: 'NAME', width: 120 },
  { field: 'email', headerName: 'EMAIL', width: 130 },
  { field: 'location', headerName: 'LOCATION', width: 130 },
  { field: 'phone', headerName: 'PHONE', width: 120 },
  { field: 'registration', headerName: 'REGISTRATION DATE', width: 130 },
];

const rows = [
  { id:1,name: 'Akshay',email: '#03-101-2201', location: 'Jon', phone: 'Noida sector-123' ,registration:'abc'},
  { id:2,name: "Abhay",email: '#03-101-2201',location: 'Jon', phone: 'Noida sector-123' ,registration:'abc'},
  { id:3,name: 'Sumit',email: '#03-101-2201',location: 'Jon', phone: 'Noida sector-123' ,registration:'abc'},
  { id:4,name: 'sanjay',email: '#03-101-2201',location: 'Jon', phone: 'Noida sector-123' ,registration:'abc'},
  { id:5,name: 'Hitesh',email: '#03-101-2201',location: 'Jon', phone: 'Noida sector-123' ,registration:'abc'},
];

export default function DataTable() {
  return (
    <>
    <Grid container>
   
      <Grid item xs={12}sm={12}lg={12}>
        <Typography>
          <div className='card'>
            <div className='card-body'>
              <Typography>List of Vendors</Typography>
            </div>
          </div>
        </Typography>
      </Grid>
     
    </Grid>
    <Grid container>
      {/* <Grid item xs={1}sm={1}lg={1}></Grid> */}
      <Grid item xs={12}sm={12}lg={12}>
          <Typography>
            <div class='card'>
            <div class='card-body'>
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                sx={{ minWidth: 500,height: 600, width: '100%'}} 
                // checkboxSelection
                />
            </div>
            </div>
          </Typography>
      </Grid>
      {/* <Grid item xs={1}sm={1}lg={1}></Grid> */}
    </Grid>
  
    </>
  );
}
