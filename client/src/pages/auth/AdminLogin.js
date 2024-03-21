import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/admin/login', {
        username,
        password
      });
      const { token } = response.data.token;
      localStorage.setItem('adminToken', token); 
      window.location.href = '/';
    } catch (err) {
      console.log('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="text-center mx-auto my-20 flex flex-col">
    <form
      onSubmit={handleSubmit}
      className="text-center mx-auto flex flex-col drop-shadow-md w-1/4 px-8 py-10 border rounded-xl"
    >
      <div className="mx-auto flex justify-center gap-3">
        <div className="text-2xl mb-10 ">Welcome Back</div>
      </div>
      <div class="relative mb-3" data-twe-input-wrapper-init>
        <input
          name="username"
          onChange={handleChange}
          value={username}
          type="text"
          placeholder="Enter Username"
          className="bg-transparent border-2 rounded-xl border-black-100 px-6 py-2 mb-3 focus:outline-none"
        />
      </div>
      <div class="relative mb-3" data-twe-input-wrapper-init>
        <input
          name="password"
          onChange={handleChange}
          value={password}
          type="text"
          id="exampleFormControlInput1"
          placeholder="Enter Password"
          className="bg-transparent border-2 rounded-xl border-black-100 px-6 py-2 focus:outline-none"
        />
      </div>
      <button type="submit" className="bg-violet-700 w-3/4 mx-auto text-white px-6 py-2 my-5 rounded-xl hover:bg-white hover:border-2 hover:border-violet-700 hover:text-violet-700 ">
        Login
      </button>
    </form>
  </div>
  );
};

export default AdminLogin;
