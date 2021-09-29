import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (event) => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitForm = (event) => {
        event.preventDefault()

    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : enteredDate
    }

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('')

    }


    return(
        <form onSubmit={submitForm}>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input type='number' value={setEnteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input type='date' value={setEnteredDate} onChange={dateChangeHandler}></input>
            </div>                
            <div className='new-expense__actions'>
                <button type='submit'>Add Expenses</button>
            </div>
        </form>
    )
}
export default ExpensesForm