import React from 'react'
import { Paper } from '@material-ui/core';
import useStyles from './Styles'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Income and Expense For Last Six Month',
        },
    },
    maintainAspectRatio: false,

};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels,
    datasets: [
        {
            label: 'Income',
            data: [1, 0, 20, 30, 40, 50],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Savings',
            data: [1, 0, 20, 30, 40, 50],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function BarChartComp() {
    const classes = useStyles()
    return (
        <Paper elevation={0} className={classes.paperContainer} >
            <div style={{ position: "relative", height: '40vh', marginBottom: "1%", padding: "1%" }}>
                <Bar options={options} data={data}/>
            </div>
        </Paper >
    )
}
