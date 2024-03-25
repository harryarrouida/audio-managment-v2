import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col text-center my-10 gap-3">
      <Link to={"/user/login"}>
        <button className="w-[7rem] bg-blue-500 text-white py-3 px-5 rounded-xl uppercase hover:bg-blue-600">login</button>
      </Link>
      <Link to={"/user/register"}>
        <button className="w-[7rem] bg-blue-500 text-white py-3 px-5 rounded-xl uppercase hover:bg-blue-600">register</button>
      </Link>
    </div>
  );
}
