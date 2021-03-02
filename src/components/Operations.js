import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

function Operations ({ operations, onDelete }) {

    const renderOperations = () => {
        return (
            <tbody>
            {    operations.map((operation, i)=> (
                    <tr key={i} className={operation.type ? 'table-success' : 'table-danger'}>
                        <td>{operation.name}</td>
                        <td>$ {operation.amount}</td>
                        <td>{operation.category.name}</td>
                        <td>
                            <Moment format="D MMM YYYY">
                                {operation.date}
                            </Moment>
                        </td>
                        <td>
                            <Link to={`/operations/edit/${operation.id}`}>
                            <BsPencilSquare size="1.5rem" color="#084c61" className="mr-1" />
                            </Link>
                            <BsFillTrashFill size="1.5rem" color="#661714" role="button" onClick={()=>onDelete(operation.id)}/>
                        </td>
                    </tr>
                
                )
            )}
        </tbody>
        )
        
    }

    return (
        <>
            {renderOperations()}
       </>
    )
}

export default Operations;
