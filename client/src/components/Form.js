import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import GeneralFields from "./formComponents/GeneralFields";
import MusicFields from "./formComponents/MusicFields";
import QuranFields from "./formComponents/QuranFields";
import NewsFields from "./formComponents/NewsFields";
import EmissionFields from "./formComponents/EmissionFields";
import FictionFields from "./formComponents/FictionFields";
import CauserieFields from "./formComponents/CauserieFields";

const CREATE_AUDIO = gql`
  mutation CreateAudio($input: AudioInput!) {
    createAudio(audioInput: $input) {
      _id
      title
    }
  }
`;

const TYPES = ["Music", "Quran", "News", "Emission", "Causerie", "Fiction"]

export default function Form() {
  const [formData, setFormData] = useState({});

  const [createAudio] = useMutation(CREATE_AUDIO);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData)
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
      <option selected disabled>select a type</option>
      {TYPES.map(type => <option value={type}>{type}</option>)}
      </select>
      
      {formData.type === "Music" ? <MusicFields handleChange={handleChange}/> : <></>}
      {formData.type === "Emission" ? <EmissionFields handleChange={handleChange}/> : <></>}
      {formData.type === "Quran" ? <QuranFields handleChange={handleChange}/> : <></>}
      {formData.type === "News" ? <NewsFields handleChange={handleChange}/> : <></>}
      {formData.type === "Fiction" ? <FictionFields handleChange={handleChange}/> : <></>}
      {formData.type === "Causerie" ? <CauserieFields handleChange={handleChange}/> : <></>}
      <button type="submit">Submit</button>
    </form>
  );
}
