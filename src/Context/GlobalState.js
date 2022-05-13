import React, { useReducer, useContext } from 'react'
import { ContextReducer, CREATE_TRANSACTION,GET_TRANSACTION,DELETE_TRANSACTION } from './ContextReducer'
import TransactionContext from './TransactionContext'
import { db, auth } from '../firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirestore, query, getDocs,doc, collection, where, addDoc, deleteDoc, } from "firebase/firestore";


export const Provider = (props) => {
    const [transactions, dispatch] = useReducer(ContextReducer, [])
    const createTransactionDispatcher = async (transaction) => {
        try {

            await addDoc(collection(db, "expenses"), transaction);
            dispatch({ type: CREATE_TRANSACTION, payload: transaction })
        } catch (err) {
            console.log('Error in catching')
        }
    }
    const deleteTransaction = async(id) =>{
        try{
            const transactionDoc = doc(db,"expenses",id)
            await deleteDoc(transactionDoc)
            dispatch({type:DELETE_TRANSACTION,payload:id})
        }catch(err){
           console.log(err)
        }
    }
    const getTransactions = async (uuid) => {
        try {
            console.log(uuid)
            const q = query(collection(db, "expenses"), where("userId", "==", uuid))
            const data = await getDocs(q);
            
            const dataToDispatch =  data.docs.map((docsnapshot) => {
                return {...docsnapshot.data(),id :docsnapshot.id}
            })
            dispatch({type:GET_TRANSACTION,payload:dataToDispatch})
        }
        catch (Err) {
            console.log("Error ", Err)
        }
    }

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - parseInt(currVal.amount) : acc + parseInt(currVal.amount)), 0);
    return (
        <TransactionContext.Provider
            value={{
                transactions: transactions,
                createTransaction: createTransactionDispatcher,
                getTransactions: getTransactions,
                deleteTransaction:deleteTransaction,
                balance:balance
            }}
        >
            {props.children}
        </TransactionContext.Provider>
    );
}
