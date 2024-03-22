import React from "react";

export default function AdminLogout() {
  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };
  return (
    <div className="text-center">
      <button
        className="bg-red-500 text-white py-3 px-5 mx-auto my-10 rounded-lg"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
