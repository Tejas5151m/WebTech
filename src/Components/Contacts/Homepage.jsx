// HomePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../../Service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Service.getAllUsers();
        setUsers(response);
      } catch (error) {
        setError('Failed to fetch users.');
        console.error('Fetch users error:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center  mb-4  head1 ">All Users</h1>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card">
        <div className="card-header text-center">
        </div>
        <ul className="list-group list-group-flush">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{user.name}</h5>
                  <p className="mb-1"><strong>Email:</strong> {user.email}</p>
                  <small><strong>DOB:</strong> {user.dob}</small>
                </div>
              </li>
            ))
          ) : (
            <li className="list-group-item text-center">No users found.</li>
          )}
        </ul>
      </div>

      <div className="text-center mt-4 ">
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
};

export default HomePage;
