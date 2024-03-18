import React from "react";
import Form from "../components/Form";
import { SideMenu } from "../customComponents/SideMenu";

export default function CreateAudio() {
  return (
    <div className="flex flex-between h-screen">
      <SideMenu />
      <div className="w-full">
        <div className="text-2xl w-1/1 mx-auto text-center my-12">
          Create An Audio
        </div>
        <Form />
      </div>
    </div>
  );
}
