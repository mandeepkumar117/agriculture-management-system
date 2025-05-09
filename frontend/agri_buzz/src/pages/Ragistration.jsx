import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (/^\d+$/.test(formData.username)) {
      newErrors.username = 'Username cannot be all numbers';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.cpassword) {
      newErrors.cpassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(true);
        const { cpassword, ...submitData } = formData; // exclude cpassword from API payload
        const response = await axios.post('http://127.0.0.1:8000/registration/', submitData);
        console.log('Registration successful:', response.data);
        alert('Registration Successful!');
        setFormData({
          username: '',
          email: '',
          password: '',
          cpassword: ''
        });
        setErrors({});
      } catch (error) {
        console.error('Registration error:', error);
        if (error.response && error.response.data) {
          alert('Registration failed: ' + JSON.stringify(error.response.data));
        } else {
          alert('Registration failed. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <div>
          <label>Confirm Password:</label><br />
          <input
            type="password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
          />
          {errors.cpassword && <p style={{ color: 'red' }}>{errors.cpassword}</p>}
        </div>

        <button type="submit" style={{ marginTop: '10px' }} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
