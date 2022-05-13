import {useContext} from 'react'
import TransactionContext from '../Context/TransactionContext'
import { incomeCategories,expenseCategories,resetCategories } from './Constants'

const useTransaction = (title) =>{
    resetCategories()
    const {transactions} = useContext(TransactionContext)

    const filterdTransaction = transactions.filter(transaction=>transaction.type===title)
    const amount = filterdTransaction.reduce((prev,curr)=> prev+=parseInt(curr.amount),0)
    const categories = title==='Income'?incomeCategories:expenseCategories
    filterdTransaction.forEach(t => {
        const category = categories.find(c => c.type === t.category)
        console.log("categoru",t.category)
        if(category)
           category.amount += parseInt(t.amount)
    })

    const filteredCategories = categories.filter((sc) => sc.amount > 0);


    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
          }],
          labels: filteredCategories.map((c) => c.type),
          
    }

    return { filteredCategories, amount, chartData };
}
export default useTransaction