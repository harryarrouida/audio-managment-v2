import React from "react";
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div>
      <div className="w-2/4 mx-auto my-20 flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/39/Logo_SNRT.svg"
          alt="not found"
          className="w-1/4"
        ></img>
      </div>
      <div className="w-2/4 mx-auto flex justify-evenly">
        <Link to={"/create-audio"} className="">CREATE AUDIO</Link>
        <Link to={"/fetch-audios"} className="">FETCH AUDIOS</Link>
      </div>
    </div>
  );
}
