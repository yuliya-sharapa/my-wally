import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import IncomeExpenseForm from './IncomeExpenseForm'

function CreateIncome() {
    const history = useHistory();

    const onSubmit = async(data) => {
            data.type = true;
            //console.log(data)
            await axios.post("http://localhost:5000/operations/", data)
            history.push('/operations')
    };

    return (
        <div className="container">
            <div className="mt-3 mx-auto p-5" style={{maxWidth: 730}}>
                <h3>New income</h3>
                <IncomeExpenseForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default CreateIncome
