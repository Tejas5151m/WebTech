import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Service from '../../Service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Service.signup(formData);
      setFormData({ name: '', dob: '', email: '', password: '' });
      navigate('/login');
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container d-flex align-items-center justify-content-center">
      <div className="signup-box p-4">
        <h2 className="text-center signuptext">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <label>Name</label>
            <div className="input-group">
              <span className="input-group-text">
              <i class="fa-solid fa-user emoji-person"></i>
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Date of Birth</label>
            <div className="input-group">
              <span className="input-group-text">
              <i class="fa-solid fa-cake-candles"></i>
              </span>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <div className="input-group">
              <span className="input-group-text">
              <i class="fa-solid fa-envelope"></i>        
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
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
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block w-100 mt-4">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
