import React from 'react'; 
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 

function IncomeExpenseForm ({operation, onSubmit}) {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: operation ? operation.name : "",
            amount: operation ? operation.amount : "",
            date: operation ? operation.date : ""
        },
    });
    const history = useHistory();

    const submitHandler = handleSubmit((data)=>{
        onSubmit(data);
        history.push("/operations");
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-row mt-3">
                <div className="col-5">
                    <input ref={register} name="name" type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-2">
                    <input ref={register} name="amount" type="number" className="form-control" placeholder="Amount" />
                </div>
                <div className="col-3">
                    <input ref={register} name="date" type="date" className="form-control" placeholder="Date" />
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-secondary">Add</button>
                </div>
            </div>
        </form>
    )
}

export default IncomeExpenseForm