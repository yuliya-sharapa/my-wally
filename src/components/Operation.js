import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

function Operation({operation}) {
    return (
        <tr>
            <td>{operation.name}</td>
            <td>{operation.amount}</td>
            <td>{operation.date}</td>
            <td>
                <Link to={`/operations/edit/${operation.id}`}>
                <BsPencilSquare/>
                </Link>
                <BsFillTrashFill/>
            </td>
        </tr>
    )
}

export default Operation
