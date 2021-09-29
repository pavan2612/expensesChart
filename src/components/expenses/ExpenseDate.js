import "./ExpensesDate.css";

const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('en-US',{day:"2-digit"});
    const month = props.month.toLocaleString('en-US',{month:'long'});
    const year = props.year.getFullYear();
    return(
        <div>
            <div className= "expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    )
}

export default ExpenseDate