import React from "react";
import { SideMenu } from "../../components/customizedComponents/SideMenu";
import FetchByTitleComponent from "../../components/fetchComponents/FetchByTitleComponent";

export default function FetchByTitle() {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    window.location.href = "/admin/login";
    return null;
  }
  return (
    <div className="flex flex-between h-screen">
      <SideMenu />
      <div className="w-3/5 ml-96">
      <div className="header">fetch an audio with title</div>
        <FetchByTitleComponent />
      </div>
    </div>
  );
}
