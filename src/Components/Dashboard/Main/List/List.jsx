import React, { useContext, useEffect } from 'react'
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './ListStyle'
import TransactionContext from '../../../../Context/TransactionContext'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { auth } from '../../../../firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";
export default function List() {
  const classes = useStyles()
  const { transactions, getTransactions, deleteTransaction } = useContext(TransactionContext)
  console.log(transactions)
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading)
      return
    if (user)
      getTransactions(user.uid)
  }, [user])
  if (!user)
    return null
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}
