import { Grid,Typography } from '@material-ui/core';
import React from 'react'
import DashboardTable from '../Dashboard/DashboardTable';
import DiscussionForum from '../Dashboard/DiscussionForum'
import AddNotice from "./AddNotice"

const Dashboard = () =>{
  return(
    <React.Fragment>
        <div style={{marginTop:20}}>
          <Grid container>
            {/* <Grid item sm={1}lg={1}xs={1}></Grid> */}
            <Grid item sm={12}lg={7}xs={12}>
            <div class='card'>
              <div class='card-body'>
                <DashboardTable/>
               <Typography style={{marginLeft:'auto'}}>
                   {/* <button type="button" class="btn btn-primary">Add Notice</button> */}
                   <AddNotice/>
               </Typography>
                  
                
              </div>
            </div> 
            </Grid>
            <Grid item sm={1}lg={1}xs={1}></Grid>
            <Grid item sm={12}lg={4}xs={12}>
                <div class='card'>
                  <div class='card-body'>
                      <Typography>
                        <h5>Discussion Forum</h5>
                      </Typography>
                      <DiscussionForum/>
                  </div>
                </div>
            </Grid>
          </Grid>  
        </div>
    </React.Fragment>
  );
}
export default Dashboard