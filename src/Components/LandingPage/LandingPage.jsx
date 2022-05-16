import React, { useEffect, useContext } from 'react'
import useStyles from './LandingPageStyle'
import { Grid, Paper, Typography } from '@material-ui/core'
import CustomizedCard from '../CustomizedCard/CustomizedCard'
import BarChartComp from '../ChartComponents/BarChartComp/BarChartComp'
import DoughnutChartComp from '../ChartComponents/DoughnutChartComp/DoughnutChartComp'
import TransactionContext from '../../Context/TransactionContext'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase-config'
export default function LandingPage() {
    const classes = useStyles()
    const { transactions, getTransactions, deleteTransaction } = useContext(TransactionContext)
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        getTransactions(user.uid)

        return () => {

        }
    }, [user])

    return (
        <Grid className={classes.grid} container spacing={0} >
            <Grid item xs={12} sm={12} className={classes.main}>
                <div className={classes.welcomeContainer}>
                    <span>Hi, Welcome back</span>
                </div>
            </Grid>
            <Grid item xs={12} lg={12} sm={12} >
                <Grid container spacing={0} className={classes.cardContainer}>
                    <Grid item xs={12} lg={3} md={3} sm={6} className={classes.cardGrid}>
                        <CustomizedCard displayFeature={{ title: 'Total Amount Left', amount: '24,000', format: 'Rupees' }}></CustomizedCard>
                    </Grid>
                    <Grid item xs={12} lg={3} md={3} sm={6} className={classes.cardGrid}>
                        <CustomizedCard displayFeature={{ title: 'Total Amount Spent', amount: '50,000', format: 'Rupees' }}></CustomizedCard>
                    </Grid>
                    <Grid item xs={12} lg={3} md={3} sm={6} className={classes.cardGrid}>
                        <CustomizedCard displayFeature={{ title: 'This month income', amount: '34,000', format: 'Rupees' }}></CustomizedCard>
                    </Grid>
                    <Grid item xs={12} lg={3} md={3} sm={6} className={classes.cardGrid}>
                        <CustomizedCard displayFeature={{ title: 'This month expense', amount: '24,000', format: 'Rupees' }}></CustomizedCard>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={12} sm={12}>
                <Grid container spacing={2} className={classes.cardContainer}>
                    <Grid item xs={12} lg={6} md={6} sm={6}>
                        <DoughnutChartComp title={'Income'}></DoughnutChartComp>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} sm={6}>
                        <DoughnutChartComp title={'Expense'}></DoughnutChartComp>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={12} sm={12}>

                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <BarChartComp></BarChartComp>
                </Grid>


            </Grid>
        </Grid>
    )
}
