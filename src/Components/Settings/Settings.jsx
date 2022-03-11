import React from 'react'
import { Grid,Typography } from '@material-ui/core';
import SelectDropdown from "./SelectDropdown"
import InputFields from "./InputFields"
import CustomInputField from "./CustomInput"
import ControlledCheckbox from "./CheckboxSelection"
import SaveButton from "./SaveButton"

function Settings() {
  return (
    <React.Fragment class="py-4">
      <div class='card'>
        <div class="card-body">
        <Grid container>
        <Grid item xs={4}sm={4}lg={4}></Grid>
        <Grid item xs={4}sm={4}lg={4}>
          <Typography>
            <h4>Settings</h4>
          </Typography>
        </Grid>
        <Grid item xs={4}sm={4}lg={4}></Grid>
      </Grid>
        </div>
      </div>
      <div class='card'>
        <div class='card-body'>
          <Grid container>
            <Grid item xs={5}lg={5}sm={5}></Grid>
            <Grid item xs={2}lg={2}sm={2}>
              <Typography>Add Rooms</Typography>
            </Grid>
            <Grid item xs={5}lg={5}sm={5}></Grid>
          </Grid>
        </div>
      </div>
      <div class='card'>
        <div class='card-body'>
          <Grid container>
            {/* <Grid item xs={3}sm={3}lg={3}></Grid> */}
            <Grid item xs={6}sm={4}lg={2}>
              <Typography style={{fontWeight:'bolder',paddingBottom:10,fontSize:18}}>Floor 1-Room 1</Typography>
            </Grid>
            <Grid item sm={8}xs={6}lg={10}></Grid>
            <Grid item xs={2}sm={2}lg={2}>
              <Typography>
                Select Flat Type
                 <SelectDropdown/>
              </Typography>
            </Grid>
            <Grid xs={6}lg={8}sm={6}></Grid>
            {/* <Grid item xs={1}sm={1}lg={1}></Grid> */}
            <Grid item xs={6}sm={8}lg={4}>
              <InputFields/>
            </Grid>
            {/* <Grid sm={10}xs={10}lg={10}></Grid> */}
          </Grid>
          <Grid item xs={6}sm={6}lg={4}>
              <Typography style={{fontWeight:'bolder',paddingBottom:10,fontSize:18}}>Pictures of Property</Typography>
              <ControlledCheckbox/>
              <span>Owned By Society/Builder</span>
            </Grid>
            <Grid item sm={6}xs={6}lg={8}></Grid>
            <Grid item xs={6}sm={6}lg={2}>
              <Typography style={{fontWeight:'bolder',paddingBottom:10,fontSize:18}}>Property Size</Typography>
              <CustomInputField/>
            </Grid>
            <Grid item sm={6}xs={6}lg={10}></Grid>
            <Grid item xs={6}sm={6}lg={2}>
              <Typography style={{fontWeight:'bolder',paddingBottom:10,fontSize:18}}>Water Tank Capacity</Typography>
              <CustomInputField/>
            </Grid>
            <Grid item sm={6}xs={6}lg={10}></Grid>
            <Grid item xs={6}sm={6}lg={8}>
              <Typography style={{fontWeight:'bolder',paddingBottom:10,fontSize:18}}>Add Owner</Typography>
              <CustomInputField/>
            </Grid>
            <Grid item sm={6}xs={6}lg={2}></Grid>
            <div style={{margin:20}}>
              <Grid item sm={4}xs={4}lg={4}></Grid>
              <Grid item sm={3}lg={3}xs={3}>
                 <SaveButton/>
              </Grid>
              <Grid item sm={5}xs={5}lg={5}></Grid>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Settings