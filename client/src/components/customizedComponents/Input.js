import React from "react";

export default function Input(props) {
  return (
    <div className="my-1">
        <input
          onChange={props.handleChange}
          name={props.name}
          type="text"
          id={props.id}
          placeholder={props.placeholder}
          className="input input-bordered focus:outline-none max-w-xs w-full"
          // class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
    </div>
  );
}
