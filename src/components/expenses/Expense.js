import React,{useState} from 'react'
import './Expense.css'
import ExpenseChart from './ExpenseChart'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'

const Expense = (props) => {

    const[filteredyear,setfilteredyear] = useState('2020')
    
    const setyear = (id) => {
        setfilteredyear(id)
    }

    const filteredExpense = props.item.filter((user) => {
    return user.date.getFullYear().toString() === filteredyear
    })
    
    return(
        <div>
            <ExpenseFilter year={filteredyear} onchangeyear={setyear} />
            <ExpenseChart item={filteredExpense}/>
            <ExpenseList item={filteredExpense}/>
        </div>
    )
}
export default Expense