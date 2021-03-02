import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserLoginSchema } from '../validations/UserValidation';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Login() {
  const {getLoggedIn} = useContext(AuthContext);

  const history = useHistory();

  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(UserLoginSchema)
}); 

  const onSubmit = async (data)=>{
      console.log(JSON.stringify(data));
      try {
        await axios.post('http://localhost:5000/auth/login', data)
        await getLoggedIn();
        history.push("/operations")
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
                  {errors.email && <small className="form-text text-muted">{errors.email.message}</small>}
                </div>
                <div className="form-group">
                    <input 
                      className="form-control"
                      ref={register }
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    {errors.password && <small className="form-text text-muted">{errors.password.message}</small>}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block font-weight-bold">Log in</button>
                </div>
                <span>Don't have an account?</span><Link to="/register" className="col-1">Register</Link>    
            </form>
        </div>
      );
    };


export default Login
