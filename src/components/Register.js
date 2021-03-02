import axios from 'axios';
import React, { useContext } from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserSchema } from '../validations/UserValidation'; 
import { useHistory, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Register() {
    const {getLoggedIn} = useContext(AuthContext);

    const history = useHistory();

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(UserSchema),
    });

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
        {errors.name && <small class="form-text text-muted">{errors.name.message}</small>}
        </div>
        
        <div className="form-group">
        <input
            className="form-control"
            ref={register }
            placeholder="Last name"
            name="lastName"
            type="text"
        />
        {errors.lastName && <small class="form-text text-muted">{errors.lastName.message}</small>}
        </div>

        <div className="form-group">
        <input
            className="form-control"
            ref={register }
            placeholder="Email"
            name="email"
            type="text"
        />
        {errors.email && <small class="form-text text-muted">{errors.email.message}</small>}
        </div>

        <div className="form-group">
        <input
            className="form-control"
            ref={register }
            placeholder="Password"
            name="password"
            type="password"
        />
        {errors.password && <small class="form-text text-muted">{errors.password.message}</small>}
        </div>

        
        <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block font-weight-bold">Submit</button>
        </div>
        <span>Have an account?</span><Link to="/login" className="col-1">Login</Link> 
    </form>
)
}

export default Register
