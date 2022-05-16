import React from 'react'
import useStyles from './Styles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

export default function CustomizedCard(props) {
  const classes = useStyles()

  return (
    <Paper  elevation={1} className={classes.paperContainer}>
       <div className={classes.header}>
          <div className={classes.titleContainer}>
               <span>{props.displayFeature.title}</span>
          </div>
       </div>
       <div className={classes.valueContainer}>
           <div className={classes.value}>
                <span>{props.displayFeature.amount}</span>
           </div>
       </div>
       <div className={classes.subValueContainer}>
           <div className={classes.subValue}> 
               <span>In {props.displayFeature.format}</span>
           </div>
       </div>
    </Paper>
  )
}
