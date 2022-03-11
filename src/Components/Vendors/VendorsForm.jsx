import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
      
    formContainer:{
        margin:theme.spacing(10),
    }  
    }));

function VendorsForm() {

    const classes=useStyles();

  return (
    <div className={classes.formContainer}>
    <form>
        <div class="form-group">
            <label for="VendorNameInput">Vendor Name</label>
            <input type="text" class="form-control" id="VendorNameInput" placeholder="Type Name"/>
        </div>
        <div class="form-group">
            <label for="PointOfContactName">Point of Contact Name</label>
            <input type="text"class="form-control" id="PointOfContactName" placeholder="name of Vendor"/>
        </div>
        <div class="form-group">
        <label for="ContactNumber">Contact No.</label>
            <input type="number" class="form-control" id="ContactNumber" placeholder="Contact No."/>
        </div>
        <div class="form-group">
         <label for="uploadsDocuments">Uploads/Documents</label>
         <input type="dropdown"class="form-control"id="uploadsDocuments"placeholder="select documents"/>
        </div>
        <div class="form-group">
         <label for="vendorAddress">Vendor Address</label>
         <input type="text"class="form-control"id="vendorAddress"placeholder="Vendor Address"/>
        </div>
        <div class="form-group">
         <label for="VendorEmail">Vendor Email</label>
         <input type="dropdown"class="form-control"id="VendorEmail"placeholder="Give Email"/>
        </div>
        <div class="form-group">
         <label for="aboutCompany">About Company</label>
         <input type="dropdown"class="form-control"id="aboutCompany"placeholder="Give some description about vendor"/>
        </div>
            <button type="button" class="btn btn-primary"style={{float:'right',borderRadius:10,textTransform:'uppercase'}}>Add Vendor</button>
     </form>
    </div>
  )
}

export default VendorsForm