import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Ensure this matches your server

const Service = {
  signup: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users`, userData);
      return response.data; // Returns the created user
    } catch (error) {
      console.error('Error during signup:', error);
      throw error; // Throw error to be handled in the component
    }
  },

  login: async (credentials) => {
    try {
      // Fetch the users matching the provided email and password
      const response = await axios.get(`${API_URL}?email=${credentials.email}&password=${credentials.password}`);
      
      // Check if any users were returned
      if (response.data.length > 0) {
        return response.data[0]; // Return the first matching user
      } else {
        return []; // Return an empty array if no user matches
      }
    } catch (error) {
      console.error('Error during login:', error);
      throw error; // Throw error to be handled in the component
    }
  },
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data; // Returns all users
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Throw error to be handled in the component
    }
  },
  };

export default Service;
