import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import GeneralFields from "./GeneralFields";
import MusicFields from "./MusicFields";

const CREATE_AUDIO = gql`
  mutation CreateAudio($input: AudioInput!) {
    createAudio(audioInput: $input) {
      _id
      title
    }
  }
`;

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    date_production: "",
    productors: [],
    nbr_invoice: "",
    nbr_contract: "",
    type_support: "",
    nbr_support: "",
    tech_comments: "",
    quality: "",
    language: "",
    frequency: "",
    format: "",
    synopsis: "",
    version: "",
    event_location: "",
    event_date: "",
    sequence: "",
    genres: [],
    type: ""
  });

  const [createAudio] = useMutation(CREATE_AUDIO);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createAudio({
        variables: {
          input: formData,
        },
      });
      console.log("successful", result);
    } catch (error) {
      console.log("failed", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <GeneralFields handleChange={handleChange} formData={formData}/>
      <select name="type" onChange={handleChange}>
        <option value={"Music"}>Music</option>
        <option value={"Quran"}>Quran</option>
        <option value={"Music"}>Music</option>
        <option value={"Hosting"}>Hosting</option>
      </select>
      <MusicFields handleChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}
