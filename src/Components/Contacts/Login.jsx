import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Service from '../../Service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await Service.login(credentials);
      if (user.length > 0) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/home');
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-box p-4">
        <h2 className="text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <label>Email</label>
            <div className="input-group">
              <span className="input-group-text">
              <i class="fa-solid fa-user emoji-person"></i>
               </span>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <div className="input-group">
              <span className="input-group-text">
              <i class="fa-solid fa-eye"></i>
              </span>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block w-100 mt-4">Login</button>
        </form>
        <div className="text-center mt-3">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
