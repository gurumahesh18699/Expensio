import React, { useEffect } from 'react'
import Login from './Components/Login/Login'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';
import { signInWithGoogle, auth } from './firebase-config'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Index from './Components/Index';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    primary:{
       main : '#f9fafb'
    },
    secondary: {
      main: '#ebf4fa'
    }
  }
});
export default function App() {




  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/SignIn" element={<Login />} >
          </Route>
          <Route path="/*" element={<Index />} >
          </Route>
        </Routes>
      </Router>
    </MuiThemeProvider>
  )
}

