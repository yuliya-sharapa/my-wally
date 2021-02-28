import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="container">
          
          <div className="mt-5 p-5 mx-auto bg-light rounded" style={{width: 400}}>
            <form >
                <h2 className="text-center mb-3">Log in</h2>       
                <div className="form-group">
                  <input 
                      className="form-control"
                      
                      name="email"
                      type="text"
                      placeholder="Email"
                      />
                    
                </div>
                <div class="form-group">
                    <input 
                      className="form-control"
                      
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    
                </div>
                <div class="form-group">
                    <button type="submit" className="btn btn-primary btn-block font-weight-bold">Log in</button>
                </div>    
            </form>
            <span>Have an account?</span><Link to="/register" className="col-1">Register</Link>
        </div>
        </div>
      );
    };


export default Login
