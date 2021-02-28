import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext'

function Header() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <header className="row mt-3 align-items-center">
            <h2 className="col-9">My Wally</h2>
            {loggedIn === false && (
                <>
                <Link to="/register" className="col-1">Register</Link>
                <Link to="/login" className="col-2">Login</Link>
                </>
            )}
            {loggedIn ===true && <Link to="/logout" className="col-2">Logout</Link>}

            
        </header>
    )
}

export default Header
