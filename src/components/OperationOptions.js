import React from 'react';
import {Link} from 'react-router-dom'


function OperationOptions() {
    return (
        <>
            <Link to="/operations/createIncome"> 
                <button className="btn btn-success" >New Income</button>
            </Link>
            <Link to="/operations/createExpense">
                <button className="btn btn-danger ml-2" >New Expense</button>
            </Link>
        </>
    )
}

export default OperationOptions
