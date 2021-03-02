import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import Balance from './Balance';
import Operations from './Operations';
import OperationOptions from "./OperationOptions";

function OperationsList() {
    
    const [operations, setOperations] = useState([]);
    const [balance, setBalance] = useState(0);
    
    const history = useHistory();

    const getOperations = async () => {
        const operationsRes = await axios.get("http://localhost:5000/operations/");
        const data = operationsRes.data;
        setOperations(data);
    }

    useEffect(()=>{
        getOperations();
    }, [])

    const onDelete = async (id) => {
        await axios.delete(`http://localhost:5000/operations/${id}`);
        getOperations();
        history.push("/operations")
    }

    return (
        <div className="mx-auto p-5" style={{maxWidth: 680}}>
        <Balance balance={balance} setBalance={setBalance}  operations={operations} />
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
            
            <Operations operations={operations} onDelete={onDelete}/>
            
        </table>
        </div>
    )
}

export default OperationsList
