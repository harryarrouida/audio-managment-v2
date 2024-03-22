import React from "react";
import Form from "../../components/Form";
import { SideMenu } from "../../components/customizedComponents/SideMenu";


export default function CreateAudio() {
  const token = localStorage.getItem("adminToken")
  if(!token){
    window.location.href = "/admin/login"
    return null
  }
  return (
    <div className="flex flex-between h-screen">
      <SideMenu />
      <div className="w-3/5 ml-96">
        <div className="header">
          Create An Audio
        </div>
        <Form />
      </div>
    </div>
  );
}
