import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import LogOut from './LogOut'

function Header() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <header className="row mt-3 align-items-center">
            
            {loggedIn === false && (
                <>
                <h2 className="col-9">My Wally</h2>
                <Link to="/register" className="col-1">Register</Link>
                <Link to="/login" className="col-2">Login</Link>
                </>
            )}
            {loggedIn ===true && (
                <>
                <Link to="/operations" className="col-9 text-decoration-none"><h2 className=" text-dark">My Wally</h2></Link>
                <LogOut />
                </>)}

            
        </header>
    )
}

export default Header
