import React, { useEffect, useState } from 'react'
import NavBar from './NavBar/NavBar'
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase-config'
import useStyles from './styles'
import { useAuthState } from 'react-firebase-hooks/auth';
import clsx from 'clsx'
import LandingPage from './LandingPage/LandingPage';
import CustomizedSideBar from './CustomizedSideBar/CustomizedSideBar';
import CustomizedAppBar from './CustomizedAppBar/CustomizedAppBar';
import { Backdrop } from '@material-ui/core';
export default function Index() {
    const [user, loading, error] = useAuthState(auth);
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const navigate = useNavigate()
    useEffect(() => {

        if (!user) navigate('/SignIn')

        return () => {
            // This worked for me
        };
    }, [user])

    const handleMenuBar = () => {
        setOpen(!open)
    }

    if (!user)
        return null
    return (

        <div className={classes.Container}>
            <div className={clsx(classes.overlay, {
                [classes.overlayFix]: open,
            })} onClick={handleMenuBar}></div>
            <CustomizedSideBar menuOpen={open} />

            <CustomizedAppBar handleMenuBar={handleMenuBar}></CustomizedAppBar>
            <Routes>
                <Route path="/Dashboard" element={<LandingPage />} >
                </Route>
            </Routes>

        </div>
    )
}
