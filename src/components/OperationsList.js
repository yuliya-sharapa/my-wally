import React, { useState, useEffect } from 'react'
import Operation from './Operation'

function OperationsList() {
    const [operations, setOperations] = useState([]);
    useEffect(()=>{
        setOperations([
            {id:1, name: "grocery", amount: 100, date: "12/12/12"},
            {id:2, name: "farmacy", amount: 103, date: "13/12/12"},
            {id:3, name: "vet", amount: 300, date: "12/12/12"}
        ])
    }, [])
    return (
        <table className="table mt-3">
            <tbody>
            {
                operations.map(operation => (
                    <Operation key={operation.id} operation={operation} />
                ))
            }
            </tbody>
        </table>
    )
}

export default OperationsList
