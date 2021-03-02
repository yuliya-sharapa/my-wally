import React, {useEffect} from 'react'

function Balance({balance, setBalance, operations}) {

    const updateTheBalance = () => {
        let temp = 0;
        for(let i = 0; i < operations.length; i++) {
            operations[i].type ?
            temp += parseInt(operations[i].amount) :
            temp -= parseInt(operations[i].amount)
        }
        setBalance(temp);
    }

    useEffect(()=>{
        updateTheBalance()
    }, [operations])

    return (
        <div className="mx-auto mb-3 card text-center" style={{width: 170}}>
            <h3 className="card-body p-1">
                {balance < 0 ? `-$${-balance}` : `$${balance}`}
            </h3>
        </div>
    )
}

export default Balance
