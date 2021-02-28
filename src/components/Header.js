import React from 'react';
import {Link} from 'react-router-dom'

function Header() {

    return (
        <header className="row mt-3 align-items-center">
            <h2 className="col-9">My Wally</h2>
            <Link to="/register" className="col-1">Register</Link>
            <Link to="/login" className="col-2">Login</Link>
        </header>
    )
}

export default Header
