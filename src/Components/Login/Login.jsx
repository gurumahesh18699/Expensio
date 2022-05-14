import React, { useState } from 'react'
import './LoginStyle.js'
import { useEffect } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { signInWithGoogle,auth } from '../../firebase-config'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import useStyles from './LoginStyle';
import { useAuthState } from "react-firebase-hooks/auth";
import LandingOne from '../../Assets/LandingPage2.jpg'

export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const classes = useStyles();
    const navigate= useNavigate();
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
      if (loading)
        return
      if (user) navigate('/Dashboard')
    }, [user])
   
    return loading ? null :  (
        <Grid container className={classes.root} spacing={0}>
            <Grid item xs={6} className={classes.imgGrid}>
                <Grid item xs={8} className={classes.imgContainer}>
                    <img src={LandingOne} className={classes.img} alt="fireSpot" />
                </Grid>
            </Grid>
            <Grid item xs={6} className={classes.rightContainer}>
                <Paper className={classes.signupContainer}>
                    <div className={classes.typoContainer}>
                        <Typography variant="h6" component="h6" >
                            Sign Up to Expensio
                        </Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <Button variant='outlined' onClick={()=>{signInWithGoogle()}}>
                            Sign Up With Google
                        </Button>
                    </div>
                    <div className={classes.buttonContainer}>
                        <Button variant='outlined'>
                            Sign Up With Github
                        </Button>
                    </div>
                </Paper>

            </Grid>
        </Grid>
    )
}
