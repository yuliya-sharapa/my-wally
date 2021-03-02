import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import IncomeExpenseForm from './IncomeExpenseForm';

function EditOperetion() {
    const match = useRouteMatch();
    const [operation, setOperation] = useState();

    const history = useHistory();
    
    useEffect(()=>{
        const getOperation = async () => {
            const operation = await axios.get(`http://localhost:5000/operations/${match.params.id}`);
            setOperation(operation.data)
            console.log(operation.data.category.name)
        }
        getOperation()
    }, []);

    const onSubmit = async (data) => {
        await axios.patch(`http://localhost:5000/operations/${match.params.id}`, data)
        history.push('/operations')
    }

    return operation ? (
        <div className="container">
            <div className="mt-3 mx-auto p-5" style={{maxWidth: 730}}>
                <h3>Edit an operation</h3>
                <IncomeExpenseForm operation={operation} onSubmit={onSubmit} />
            </div>
        </div>
    ) : (
    <div>Loading...</div>
    )
}

export default EditOperetion;


