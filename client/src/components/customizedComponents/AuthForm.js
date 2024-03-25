import React from "react";
import { Link } from "react-router-dom";

export default function AuthForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <span className="text-center mx-auto">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={"80px"}>
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg> */}
        <img src="/assets/user.png"></img>
      </span>
      <div className="title">{props.title}</div>
      <input
        type="text"
        className="input"
        placeholder="Username"
        name="username"
        value={props.formData.username}
        onChange={props.handleChange}
      />

      <input
        type="password"
        className="input"
        value={props.formData.password}
        placeholder="Password"
        name="password"
        onChange={props.handleChange}
      />
      <button type="submit" className="btn-blue">
        {props.button}
      </button>
      <hr></hr>
      <Link to={props.toPath}>{props.message}</Link>
    </form>
  );
}
