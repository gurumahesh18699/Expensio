import React from 'react'
import { Paper } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import useStyles from './Styles'
import 'chart.js/auto';
import useTransaction from '../../../Utils/useTransactions';
export default function DoughnutChartComp(props) {
    const { filteredCategories, amount, chartData } = useTransaction(props.title)
    const classes = useStyles()
    console.log(chartData.datasets[0].data)
    return (
        <Paper elevation={0} className={classes.paperContainer}>

            <div style={{ position: "relative", height: '30vh', marginBottom: "1%", padding: "1%" }}>
                <Doughnut data={chartData} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                }} width={'50%'}
                    height={'50%'} />
            </div>
            <div className={classes.footerTitle}>
                <div>
                    <span>{props.title} Till now</span>
                </div>
            </div>
        </Paper>
    )
}
