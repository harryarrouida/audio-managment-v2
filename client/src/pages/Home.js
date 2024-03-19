import React from "react";
import { SideMenu } from "../components/customizedComponents/SideMenu";

export default function Home() {
  return (
    <div className="flex flex-between">
      <SideMenu />
      <div className="my-10 mx-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/Logo_SNRT.svg"
            alt="not found"
            className="w-1/4 mx-auto"
          ></img>
      </div>
    </div>
  );
}
