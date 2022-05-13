import React, { useContext, useState } from 'react'
import useStyles from './FormStyle'
import formatDate from '../../../../Utils/formatDate';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TransactionContext from '../../../../Context/TransactionContext';
import {auth } from '../../../../firebase-config'
import {expenseCategories,incomeCategories} from '../../../../Utils/Constants'
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from 'uuid';
const intialState = {
    type : '',
    value : '',
    category:'',
    amount : '',
    date:''
}

export default function Form() {
    const classes = useStyles()
    let menuItem = [{ displayValue: "Income", refValue: "Income" }, { displayValue: "Expense", refValue: "Expense" }]
  
    const [category,setCategory] = useState(incomeCategories)
    const [formData, setFormData] = useState(intialState)
    const {createTransaction} = useContext(TransactionContext)
    const [user, loading, error] = useAuthState(auth);
    
    const selectMenu = (e) =>{
        setFormData({ ...formData, type: e.target.value })
        if(e.target.value ==='Income')
           setCategory(incomeCategories)
        else
           setCategory(expenseCategories)
    }

    return (
        <Grid container spacing={2}>
            {/* <Snackbar open={open} setOpen={setOpen} /> */}
           
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={selectMenu}>
                        {menuItem.map(menu => {
                            return <MenuItem value={menu.refValue} key={menu.refValue}>{menu.displayValue}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {category.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={()=>{createTransaction({...formData,id:uuidv4(),userId:user.uid})}}>Create</Button>
        </Grid>
    )
}
