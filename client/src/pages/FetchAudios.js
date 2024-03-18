import React from "react";
import FetchAudiosComponent from "../components/fetchComponents/FetchAudiosComponent";
import { SideMenu } from "../customComponents/SideMenu";

export default function FetchAudios() {
  return (
    <div className="flex flex-between h-screen">
    <SideMenu/>
      <div className="w-full">
        <div className="text-2xl my-10 text-center">Fetch Audios</div>
        <FetchAudiosComponent />
      </div>
    </div>
  );
}
