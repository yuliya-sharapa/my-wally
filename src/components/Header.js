import React, {useEffect} from 'react';
import Balance from './Balance'

function Header({balance, setBalance, operations}) {

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
        <header className="row mt-3 align-items-center">
            <h2 className="col-10">My Wally</h2>
            <Balance balance={balance}/>
        </header>
    )
}

export default Header
