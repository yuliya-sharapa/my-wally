import React from 'react';
import IncomeExpenseForm from './IncomeExpenseForm'

function CreateExpense() {

    const onSubmit = data => {
        data.type = false;
        alert(JSON.stringify(data))
    };

    return (
        <div className="container">
            <div className="mt-3">
                <h3>New expense</h3>
                <IncomeExpenseForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default CreateExpense
