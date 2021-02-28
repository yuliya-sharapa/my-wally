import React, {useEffect} from 'react'

function Balance({balance, setBalance, operations}) {

    useEffect(() => {
		let temp = 0;
		for(let i = 0; i < operations.length; i++) {
            operations[i].type ?
            temp += parseInt(operations[i].amount) :
            temp -= parseInt(operations[i].amount)
		}
		setBalance(temp);
	}, [operations]);

    return (
        <div className="col-2 card mb-3">
            <h3 className="card-body p-1">
                {balance < 0 ? `-$${-balance}` : `$${balance}`}
            </h3>
        </div>
    )
}

export default Balance
