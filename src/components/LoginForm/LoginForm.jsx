import React, { useState } from 'react'
import './LoginForm.css'
import logo from '../../assets/images/logo.png'

const LoginForm = () => {
    const[userId, setUserId] = useState('');
    const[password, setPassword] = useState('');

     const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic:
    // - Send userId and password to your backend API
    // - Handle success (e.g., redirect to dashboard) or error (e.g., display error message)
    console.log('Login attempt:', { userId, password });
    alert('Login functionality not implemented yet!'); // Placeholder
  };

  return (
    <div className='login-form-container'>
        <img src={logo} alt="ThePageOfUs Logo" className='login-logo' />
        <h1 className='app-title'>ThePageOfUs</h1>

        <form action="" onSubmit={handleSubmit} className='login-form'>
            <div className="form-group">
                <label htmlFor="userId">UserID</label>
                <input type="text"
                id="userId"
                placeholder='Email or UserId' 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                id='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <div className="forgot-button">
                <a href="">Forgot Password</a>
            </div>

            <button type='submit' className='login-button'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm