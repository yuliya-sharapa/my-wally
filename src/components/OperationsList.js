import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import Balance from './Balance';
import Operation from './Operation';
import OperationOptions from "./OperationOptions";

function OperationsList() {
    
    const [operations, setOperations] = useState([]);
    const [balance, setBalance] = useState(0);
    
    const history = useHistory();

    useEffect(()=>{
        setOperations([
            {id:1, name: "grocery", amount: 100, date: "12/12/12", category: "food", type: true},
            {id:2, name: "farmacy", amount: 103, date: "13/12/12", category: "health", type: true},
            {id:3, name: "vet", amount: 300, date: "12/12/12", category: "pets", type: false},
            {id:4, name: "restaurant", amount: 103, date: "13/12/12", category: "food", type: true},
        ])
    }, [operations])

    const onDelete = (i) => {
        let temp = operations.filter(index => index !=i);
        setOperations(temp);
        history.push("/operations")
    }

    return (
        <>
        <Balance operations={operations} balance={balance} setBalance={setBalance} />
        <OperationOptions/>
        <table className="table mt-3">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                operations.map((operation, index) => (
                    <Operation key={operation.id} operation={operation} index={index} onDelete={onDelete} />
                ))
            }
            </tbody>
        </table>
        </>
    )
}

export default OperationsList
