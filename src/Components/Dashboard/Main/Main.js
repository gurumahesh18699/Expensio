import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import TransactionContext from '../../../Context/TransactionContext';
import useStyles from './MainStyle';
import Form from './Form/Form';
import List from './List/List';
import formatAmount from '../../../Utils/formatAmount';
export default function Main() {
    const classes = useStyles()
    const {balance} = useContext(TransactionContext)
    return (
        <Card className={classes.root}>
            
            <CardContent>
                <Typography align="center" variant="h5">Total Balance : {formatAmount(balance)}</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* <InfoCard /> */}
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
