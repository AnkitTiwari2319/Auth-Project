import React, { useState } from 'react';
import './Login.css'; // Reuse your existing CSS
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail, MdDateRange } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        name : name,
        dob : dob,
        email : email,
        password : password,
      });

      const result = JSON.stringify(res.data);
      localStorage.setItem('User', result);
      alert('Registration successful!');
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert('Registration failed!');
    }
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <div className="form-header">
          <h3>REGISTER</h3>
        </div>
        <div className="form-avatar">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar" />
        </div>
        <form className="form-container" onSubmit={handleRegister}>
          <div className="input-box">
            <FaUser className="icon" />
            <input  type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="input-box">
            <MdDateRange className="icon" />
            <input  type="date"  placeholder="Date of Birth"  value={dob}  onChange={(e) => setDob(e.target.value)}  required />
          </div>

          <div className="input-box">
            <MdEmail className="icon" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input  type="password"  placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}  required />
          </div>

          <button type="submit" className="login-btn">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
