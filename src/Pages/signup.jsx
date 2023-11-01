
import "./signlog.css"
import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Handle successful signup
        response.status(200).json({ message: 'User registered successfully' });

      } else {
        // Handle error or display error message
        console.log("error")
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
    //   response.status(500).json({ message: 'Server error' });
    }

    setFormData({ username: '', password: '' })
  };

  return (
    <div className="container-div">
    <form className="form-box" onSubmit={handleSubmit}>
        <h2>signup</h2>
      <input
      className="input-field"
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br />
      <input
      className="input-field"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <br />
      <button className="button" type="submit">Sign Up</button>
    </form>
    </div>
  );
}

export default Signup;
