import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

function LogOut() {

    const {getLoggedIn} = useContext(AuthContext);

    const history = useHistory();

    const logOut = async() => {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push("/login")
    }

    return (
        <button onClick={logOut} className="btn btn-outline-secondary align-self-end">
            Log Out
        </button>
    )
}

export default LogOut
