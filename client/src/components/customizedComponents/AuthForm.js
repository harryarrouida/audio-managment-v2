import React from "react";
import { Link } from "react-router-dom";

export default function AuthForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <span className="text-center mx-auto">
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
