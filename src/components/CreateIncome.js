import React from 'react';
import IncomeExpenseForm from './IncomeExpenseForm'

function CreateIncome() {

    const onSubmit = data => {
        data.type = true;
        alert(JSON.stringify(data))
    };

    return (
        <div className="container">
            <div className="mt-3">
                <h3>New income</h3>
                <IncomeExpenseForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default CreateIncome
