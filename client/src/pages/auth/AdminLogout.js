import React from "react";
import { SideMenu } from "../../components/customizedComponents/SideMenu";

export default function AdminLogout() {
  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };
  return (
    <div className="text-center">
      <SideMenu />
      <div>
        <div className="header">logout</div>
        <button
          className="btn btn-error uppercase"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
