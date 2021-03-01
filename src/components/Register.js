import axios from 'axios';
import React, { useContext } from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Register() {
    const {getLoggedIn} = useContext(AuthContext);

    const history = useHistory();

    const {register, handleSubmit} = useForm();

    const onSubmit = async (data)=>{
        try {
            await axios.post('http://localhost:5000/auth/', data)
            await getLoggedIn();
            history.push("/operations")
        } catch (error) {
            console.error(error)
        }
    };

    

    return (
        
    <form onSubmit={handleSubmit(onSubmit)} className="mt-3 p-5 mx-auto bg-light rounded" style={{width: 400}}>
        <h2 className="text-center mb-3">Register</h2> 
        <div className="form-group">
            <input
                className="form-control"
                ref={register }
                placeholder="Name"
                name="name"
                type="text"
            />
        
        </div>
        
        <div className="form-group">
        <input
            className="form-control"
            ref={register }
            placeholder="Last name"
            name="lastName"
            type="text"
        />
        
        </div>

        <div className="form-group">
        <input
            className="form-control"
            ref={register }
            placeholder="Email"
            name="email"
            type="text"
        />
        
        </div>

        <div className="form-group">
        <input
            className="form-control"
            ref={register }
            placeholder="Password"
            name="password"
            type="password"
        />
        
        </div>

        
        <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block font-weight-bold">Submit</button>
        </div>
    </form>
)
}

export default Register
