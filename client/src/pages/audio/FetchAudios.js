import React from "react";
import FetchAudiosComponent from "../../components/fetchComponents/FetchAudiosComponent";
import { SideMenu } from "../../components/customizedComponents/SideMenu";

export default function FetchAudios() {
  const token = localStorage.getItem("adminToken")
  if(!token){
    window.location.href = "/admin/login"
    return null
  }
  return (
    <div className="flex flex-between h-screen">
    <SideMenu/>
      <div  className="w-3/5 ml-96">
        <div className="text-2xl my-10 text-center">Fetch Audios</div>
        <FetchAudiosComponent />
      </div>
    </div>
  );
}
