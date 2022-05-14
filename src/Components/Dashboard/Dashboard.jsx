import React from 'react'
import Grid from '@material-ui/core/Grid'
import Details from './Details/Details'
import Main from './Main/Main'
import useStyles from './DashboardStyle'
export default function Dashboard() {
    const classes = useStyles()
    return (
        <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
            <Grid item xs={12} sm={3} className={classes.mobile}>
                <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.main}>
                <Main />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.desktop}>
                <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.last}>
                <Details title="Expense" />
            </Grid>
        </Grid>
    )
}
