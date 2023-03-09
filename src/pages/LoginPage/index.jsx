import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homePageImage from '../../assests/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';
import './loginPage.css';
import { AUTH_URL } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await makeRequest(
        AUTH_URL,
        {
          method: 'POST',
          url: '/login',
          data: loginData,
        },
        {},
        navigate
      );
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <div className="image-container">
        <div className="page-title">
          <h2>Design APIs fast,</h2> <br />
          <h2>Mange content easily.</h2>
        </div>
        <img src={homePageImage} alt="logo" />
      </div>
      <div className="login-container">
        <div className="title">Login To Your CMS+ Account</div>
        <div className="form-container">
          <div className="email-container">
            <h4>Email</h4>
            <input
              type="email"
              name="username"
              id="username"
              value={loginData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="password-container">
            <h4>Password</h4>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
