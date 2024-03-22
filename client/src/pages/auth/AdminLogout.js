import React from "react";

export default function AdminLogout() {
  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };
  return (
    <div className="text-center">
    <div className="header">logout</div>
      <button
        className="bg-red-500 text-white py-3 px-5 mx-auto my-10 rounded-lg uppercase"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
