import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { UserSideMenu } from "../../../components/customizedComponents/UserSideMenu";
import Input from "../../../components/customizedComponents/Input";
import Success from "../../../components/customizedComponents/Success";
import Error from "../../../components/customizedComponents/Error";

const CREATE_PLAYLIST = gql`
  mutation CreatePlaylist($name: String!, $description: String!) {
    createPlaylist(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

export default function CreatePlaylist() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };
  const [createPlaylist] = useMutation(CREATE_PLAYLIST);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createPlaylist({
        variables: {
          name: formData.name,
          description: formData.description,
        },
      });
      console.log("successful", result);
      setStatus("success");
    } catch (error) {
      console.log("failed", error);
      setStatus("failed");
    }

    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };
  return (
    <div className="flex flex-between h-screen">
      <UserSideMenu />
      <div className="w-3/5 ml-96 my-20">
        <h1 className="title">create a playlist</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto w-1/4">
          <Input
            for="name"
            name="name"
            id="name"
            placeholder="name"
            text="name"
            value={formData.name}
            handleChange={handleChange}
          />
          <Input
            for="description"
            name="description"
            id="description"
            placeholder="description"
            text="description"
            value={formData.description}
            handleChange={handleChange}
          />
          <button type="submit" className="btn-blue">
            create
          </button>
        </form>
      </div>
      {status === "success" ? (
        <Success message={"Playlist Created Successfully"} />
      ) : (
        <></>
      )}
      {status === "failed" ? (
        <Error message={"Failed To Create Playlist"} />
      ) : (
        <></>
      )}
    </div>
  );
}
