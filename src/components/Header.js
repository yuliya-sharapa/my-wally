import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import LogOut from './LogOut';
import { BiWallet } from "react-icons/bi";

function Header() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <header className="row mt-3 mb-3 align-items-center">
            
            {loggedIn === false && (
                <>
                <h2 className="col-md-9 col-7 font-weight-bold font-italic"><span><BiWallet color="#448c40" /></span>My Wally</h2>
                <Link to="/register" className="btn btn-outline-secondary">Register</Link>
                <Link to="/login" className="btn btn-secondary ml-2">Login</Link>
                </>
            )}
            {loggedIn ===true && (
                <>
                <Link to="/operations" className="col-md-10 col-8 text-decoration-none justify-content-end"><h2 className=" text-dark font-weight-bold font-italic mr-1"><span><BiWallet color="#448c40" /></span>My Wally</h2></Link>
                <LogOut />
                </>)}

            
        </header>
    )
}

export default Header
