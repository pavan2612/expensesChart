import ExpensesItem from './ExpensesItem'
import './ExpenseList.css'

const ExpenseList = (props) => {
    if (props.item.length === 0){
        return <h2>No expense found.</h2>
    }
  
    return(
        <ul>
            {props.item.map((everyItem) => (
            <ExpensesItem 
            key = {everyItem.id}
            title = {everyItem.title}
            amount = {everyItem.amount}
            date = {everyItem.date}
            />))}
        </ul>
    )
}

export default ExpenseList