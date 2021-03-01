import axios from 'axios';
import React from 'react';
import IncomeExpenseForm from './IncomeExpenseForm'

function CreateIncome() {

    const onSubmit = async(data) => {
        try {
            data.type = true;
            //console.log(data)
            await axios.post("http://localhost:5000/operations/", data)
        } catch (error) {
            console.error(error)
        }
        
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
