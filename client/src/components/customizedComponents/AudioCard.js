import React from "react";
import { Link } from "react-router-dom";

export default function AudioCard(props) {
  return (
    <div class="my-10 card sm:card-side bg-base-100 shadow-xl w-1/1 h-48 border-2 border-neutral-300">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <div className="flex justify-between">
          <h2 class="card-title">{props.title}</h2>
          <button>
            <img src="/assets/heart.png"></img>
          </button>
        </div>
        <p>Audio Playing is Not Available Now</p>
        <div class="card-actions justify-end">
          <div className="flex justify-around gap-5">
            <Link to={props.toPath}>
              <button class="btn-cyan">Add</button>
            </Link>
            <button class="btn-blue">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
}
