import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';

function Register() {

    const {register, handleSubmit} = useForm();

    const onSubmit = async (data)=>{
        console.log(JSON.stringify(data));
        try {
            const registeredData = data;
            await axios.post('http://localhost:5000/auth/', registeredData)
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
