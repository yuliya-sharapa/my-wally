import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

function Login() {
  const {register, handleSubmit} = useForm();

  const onSubmit = async (data)=>{
      console.log(JSON.stringify(data));
      try {
        await axios.post('http://localhost:5000/auth/login', data)
      } catch (error) {
          console.error(error)
      }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 p-5 mx-auto bg-light rounded" style={{width: 400}}>
                <h2 className="text-center mb-3">Log in</h2>       
                <div className="form-group">
                  <input 
                      className="form-control"
                      ref={register }
                      name="email"
                      type="text"
                      placeholder="Email"
                      />
                    
                </div>
                <div className="form-group">
                    <input 
                      className="form-control"
                      ref={register }
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block font-weight-bold">Log in</button>
                </div>
                <span>Have an account?</span><Link to="/register" className="col-1">Register</Link>    
            </form>
        </div>
      );
    };


export default Login
