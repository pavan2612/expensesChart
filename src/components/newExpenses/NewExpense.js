import './NewExpense.css';

import ExpensesForm from './ExpensesForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setisEditing] = useState(false);


    const saveExpense = (data) => {
        const ExpenseData = {...data,id:Math.random().toString};
    }

    const startEditingHandler = () => {
        setisEditing(true)
    }
    const stopEditingHandler = () => {
        setisEditing(false)
    }

    return(
        <div className='new-expense'>
            {!isEditing  &&
             <button onClick={startEditingHandler}>Add Expense</button>
             }
             {isEditing &&  
             <ExpensesForm 
                onSave={saveExpense}
                onCancel={stopEditingHandler}
             />}
        </div>
    )
}

export default NewExpense