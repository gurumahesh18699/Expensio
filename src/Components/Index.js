import React, { useEffect } from 'react'
import NavBar from './NavBar/NavBar'
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth';
export default function Index() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {

        if (!user) navigate('/SignIn')
    }, [user])
    if (!user)
        return null
    return (

        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/Dashboard" element={<Dashboard />} >
                </Route>
            </Routes>
        </React.Fragment>
    )
}
