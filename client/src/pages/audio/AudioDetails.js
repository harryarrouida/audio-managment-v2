import React from "react";
import AudioDetailsComponent from "../../components/fetchComponents/AudioDetailsComponent";
import { useParams } from "react-router-dom";
import { SideMenu } from "../../components/customizedComponents/SideMenu";

export default function AudioDetails() {
  const _id = useParams();
  console.log(_id);

  const token = localStorage.getItem("adminToken")
  if(!token){
    window.location.href = "/admin/login"
    return null
  }
  return (
    <div className="flex flex-between h-screen">
      <SideMenu/>
      <div className="w-3/5 ml-96 my-20">
      <div className="title">details of an audio</div>
        <AudioDetailsComponent audioId={_id} />
      </div>
    </div>
  );
}
