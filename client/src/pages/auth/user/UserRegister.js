import React, { useState } from "react";
import axios from "axios";
import Success from "../../../components/customizedComponents/Success";
import Error from "../../../components/customizedComponents/Error";
import AuthForm from "../../../components/customizedComponents/AuthForm";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState()

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/register", {
        username,
        password,
      });
      setStatus(true);
      setMessage(response.data.message)
      const { token } = response.data.token;
      localStorage.setItem("userToken", token);
      setTimeout(() => {
        window.location.href = "/user/dashboard";
      }, 4000);
    } catch (err) {
      setStatus(false);
      setMessage(err.response.data.message)
      console.log("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="text-center mx-auto my-20 flex flex-col">
      <AuthForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title={"Register Now"}
        button={"register"}
        toPath={"/user/login"}
        message="Have An Account ? Login Now"
      />
      {status === true ? <Success message={message} /> : <></>}
      {status === false ? <Error message={message} /> : <></>}
    </div>
  );
};

export default UserRegister;
