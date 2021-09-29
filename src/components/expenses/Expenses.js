import ExpensesItem from './ExpensesItem'
import './expenses.css'

const Expenses = (props) => {
    
    

    return(
        <div>
            <ExpensesItem 
            title = {props.expenses[0].title} 
            amount = {props.expenses[0].amount}
            date = {props.Expenses[0].date}
            />
            <ExpensesItem 
            title = {props.expenses[1].title} 
            amount = {props.expenses[1].amount}
            date = {props.Expenses[1].date}
            />
            <ExpensesItem 
            title = {props.expenses[2].title} 
            amount = {props.expenses[2].amount}
            date = {props.Expenses[2].date}
            />
        </div>
    )
}

export default Expenses