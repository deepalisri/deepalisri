import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, ROUTE_JOBS } from "../constants";
import './style.scss';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
   const callApi = () => {
        let raw = {
            "email": email,
            "password": password
        }
        let requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            headers: {
                'Content-Type': 'application/json'
              },
          };
          
          fetch(`${API_BASE_URL}/auth/login`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.success === false) {
                    setError(true);
                } else {
                    const userDetails = {"isLoggedIn": true, "name": result.data.name}
                    setError(false);
                    navigate(ROUTE_JOBS, {state: {"token": result.data.token}});
                    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
                }
                })
            .catch(error => setError(true));
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            <div>
                <h4>Email Address</h4>
                <input type="text" placeholder="Enter your email" className={`${error ? 'error' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <div className="flex space-between align-center">
                    <h4>Password</h4>
                    <h4 className="light-blue-text">Forgot your password?</h4>
                </div>
                <input type="password" placeholder="Enter your password" className={`${error ? 'error' : ''}`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                {error ? <p className="error-text">Incorrect email address or password</p> : null}
            </div>
            <div className="login-btn text-center">
                <button className="btn bg-light-blue" onClick={callApi}>
                    Login
                </button>
            </div>
            <div className="text-center">
                <p>New to MyJobs? <button className="light-blue-text">Create an account</button></p>
            </div>
        </div>
    )
}
export default Login