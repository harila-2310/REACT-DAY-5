import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/system';


export default function Bar() {
  return (
    
       <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit" component="div">
           My web store
          </Typography>
        </Toolbar>
      </AppBar>

  );
}