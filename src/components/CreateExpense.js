import React from 'react';
import axios from 'axios';
import IncomeExpenseForm from './IncomeExpenseForm';

function CreateExpense() {

    const onSubmit = async (data) => {
        data.type = false;
        await axios.post("http://localhost:5000/operations/", data)
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
