import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid,Typography } from '@material-ui/core';

export default function TextFields() {
  return (
    <Box
      sx={{ 
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Number of this property"
      /> 
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Give Name to this property"
      />
    </Box>
  );
}
