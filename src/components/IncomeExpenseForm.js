import React from 'react'

function IncomeExpenseForm() {
    return (
        <form>
            <div className="form-row mt-3">
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-3">
                    <input type="number" className="form-control" placeholder="Amount" />
                </div>
                <div className="col-3">
                    <input type="date" className="form-control" placeholder="Date" />
                </div>
                <div className="col-1">
                    <input className="btn btn-success" type="submit" value="Income" />
                </div>
                <div className="col-1">
                    <input className="btn btn-danger ml-1" type="submit" value="Expense" />
                </div>
            </div>
        </form>
    )
}

export default IncomeExpenseForm
