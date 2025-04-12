import React, { useState } from 'react';
import "./Login.css";
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/login' , {email : email , password:password});
        const result = JSON.stringify(res.data);
        localStorage.setItem('User' , result);
        navigate('/dashboard');
    }

    return (
        <div className="login-container">
            <div className='form-box'>
                <div className="form-header"> 
                    <h3> SIGN-IN </h3>
                </div>
                <div className="form-avatar">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar" />
                </div>
                <form className='form-container' onSubmit={handleSubmit}>
                    <div className="input-box">
                        <FaUser className="icon" />
                        <input type="text" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-box">
                        <FaLock className="icon" />
                        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className='options'>
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="/register">Register</a>
                    </div>

                    <button type="submit" className="login-btn">LOGIN</button>

                </form>
            </div>
            
        </div>
    )
}


export default Login ;