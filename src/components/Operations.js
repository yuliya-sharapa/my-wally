import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

function Operations ({ operations, onDelete }) {

    const renderOperations = () => {
        return (
            <tbody>
            {    operations.map((operation, i)=> (
                    <tr key={i} className={operation.type ? 'table-success' : 'table-danger'}>
                        <td>{operation.name}</td>
                        <td>{operation.amount}</td>
                        <td>{operation.category.name}</td>
                        <td>{operation.date}</td>
                        <td>
                            <Link to={`/operations/edit/${operation.id}`}>
                            <BsPencilSquare/>
                            </Link>
                            <BsFillTrashFill role="button" onClick={()=>onDelete(operation.id)}/>
                        </td>
                    </tr>
                
                )
            )}
        </tbody>
        )
        
    }

    /* const removeHandler = i => {
        onDelete(i);
      } */

    return (
        <>
            {renderOperations()}
       </>
    )
}

export default Operations;
