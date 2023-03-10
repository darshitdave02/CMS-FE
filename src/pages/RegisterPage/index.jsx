import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homePageImage from '../../assests/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';
import './registerPage.css';
import { AUTH_URL } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
  });

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const data  = await makeRequest(
        AUTH_URL,
        {
          method: 'POST',
          url: '/register',
          data: registerData
        },
        { },
        navigate
      );
      if (data.status === 201) {
        alert('Registration successful. Please login to continue.');
        navigate('/login');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <div className="image-container">
        <div className="page-title">
          <h2>Design APIs fast,</h2> <br />
          <h2>Manage content easily.</h2>
        </div>
        <img src={homePageImage} alt="logo" />
      </div>
      <div className="register-container">
        <div className="title">Create Your CMS+ Account</div>
        <div className="form-container">
          <div className="email-container">
            <h4>Email</h4>
            <input
              type="username"
              name="username"
              id="username"
              value={registerData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="password-container">
            <h4>Password</h4>
            <input
              type="password"
              name="password"
              id="password"
              value={registerData.password}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" onClick={handleRegister}>
            Register
          </button>
          <div className="login-link">
            <span>Already have an account?</span>
            <button onClick={() => navigate('/login')}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
