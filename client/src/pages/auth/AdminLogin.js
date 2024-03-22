import React, { useState } from "react";
import axios from "axios";
import Success from "../../components/customizedComponents/Success";
import Error from "../../components/customizedComponents/Error";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState(null);

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/admin/login", {
        username,
        password,
      });
      setStatus(true);
      const { token } = response.data.token;
      localStorage.setItem("adminToken", token);
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
    } catch (err) {
      console.log("Invalid credentials. Please try again.");
      setStatus(false);
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
        <div class="input input-bordered flex items-center gap-2 mb-10 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            class="grow focus:outline-none"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="password"
            class="grow"
            value={formData.password}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary my-10"
          // className="bg-violet-700 w-3/4 mx-auto text-white px-6 py-2 my-5 rounded-xl hover:bg-white hover:border-2 hover:border-violet-700 hover:text-violet-700 "
        >
          Login
        </button>
      </form>
      {status === true ? <Success message="Logged In Successfully" /> : <></>}
      {status === false ? <Error message="Try again" /> : <></>}
    </div>
  );
};

export default AdminLogin;
