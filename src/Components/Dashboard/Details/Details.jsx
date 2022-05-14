import React from 'react'
import 'chart.js/auto';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import formatAmount from '../../../Utils/formatAmount';
import useStyles from './DetailsStyle'
import useTransaction from '../../../Utils/useTransactions';
export default function Details({ title, subheader }) {
    const classes = useStyles()
    const { filteredCategories, amount, chartData } = useTransaction(title)

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <Typography variant="h5">{formatAmount(amount)}</Typography>
                <Doughnut data={chartData} options={{
                    radius: 100, layout: {
                        padding: 20
                    }
                }} />
            </CardContent>
        </Card>
    )
}
