import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-center">
      <Link to={"/user/login"}>
        <button className="btn-blue">login</button>
      </Link>
      <Link to={"/user/register"}>
        <button className="btn-blue">register</button>
      </Link>
    </div>
  );
}
