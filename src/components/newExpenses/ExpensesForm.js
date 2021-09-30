import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {

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
        date : new Date(enteredDate)
    }

    props.onSave(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('')

    }


    return(
        <form onSubmit={submitForm}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    value={enteredTitle} 
                    onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' 
                    value={enteredAmount} 
                    onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' 
                    value={enteredDate} 
                    onChange={dateChangeHandler}/>
                </div>  
            </div>              
            <div className='new-expense__actions'>
                <button type='button' onClick={props.stopEditingHandler}>Cancel</button>
                <button type='submit'>Add Expenses</button>
           </div>     
        </form>
    )
}
export default ExpensesForm