import React from 'react'; 
import { useForm } from 'react-hook-form';

function IncomeExpenseForm ({operation, onSubmit}) {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: operation ? operation.name : "",
            amount: operation ? operation.amount : "",
            category: operation ? operation.category.name : "",
            date: operation ? operation.date : "",
        },
    });

    const submitHandler = handleSubmit((data)=>{
        onSubmit(data);
    });

    return (
        <form onSubmit={submitHandler} >
            <div className="form-row mt-3">
                <div className="col-3">
                    <input ref={register} name="name" type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-2">
                    <input ref={register} name="amount" type="number" className="form-control" placeholder="Amount" />
                </div>
                <div className="col-2">
                    <select ref={register} className="form-control" name="categoryId">
                        <option value="1">Food</option>
                        <option value="2">Health</option>
                        <option value="3">Leisure</option>
                        <option value="4">Taxes</option>
                        <option value="5">Pets</option>
                        <option value="6">Car</option>
                        <option value="11">Salary</option>
                        <option value="12">Present</option>
                    </select>
                </div>
                <div className="col-3">
                    <input ref={register} name="date" type="date" className="form-control" placeholder="Date" />
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-secondary">Save</button>
                </div>
            </div>
        </form>
    )
}

export default IncomeExpenseForm
