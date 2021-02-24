import React, { useState, useEffect } from 'react';
import IncomeExpenseForm from './IncomeExpenseForm';

function EditOperetion() {
    const [operation, setOperation] = useState();
    
    useEffect(()=>{
        setOperation({
            name: "test",
            amount: 12,
            date: "2012-12-12"
        })
    }, []);

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return operation ? (
        <div className="container">
            <div className="mt-3">
                <h3>Edit an operation</h3>
                <IncomeExpenseForm operation={operation} />
            </div>
        </div>
    ) : (
    <div>Loading...</div>
    )
}

export default EditOperetion;


