import React from "react";

export default function Input(props) {
  return (
    <div className="my-1">
      <label
        for={props.for}
        class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          onChange={props.handleChange}
          name={props.name}
          type="text"
          id={props.id}
          placeholder={props.placeholder}
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          {props.text}
        </span>
      </label>
    </div>
  );
}
