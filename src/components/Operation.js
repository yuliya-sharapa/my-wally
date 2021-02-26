import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

function Operation({operation, onDelete, index}) {

    const removeHandler = i => {
        onDelete(i);
      }

    return (
        <tr className={operation.type ? 'table-success' : 'table-danger'}>
            <td>{operation.name}</td>
            <td>{operation.amount}</td>
            <td>{operation.category}</td>
            <td>{operation.date}</td>
            <td>
                <Link to={`/operations/edit/${operation.id}`}>
                <BsPencilSquare/>
                </Link>
                <BsFillTrashFill role="button" onClick={() => removeHandler(index)} />
            </td>
        </tr>
    )
}

export default Operation
