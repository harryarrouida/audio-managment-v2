import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import GeneralFields from "./GeneralFields";
import MusicFields from "./MusicFields";
import PodcastFields from "./PodcastFields";
import QuranFields from "./QuranFields";

const CREATE_AUDIO = gql`
  mutation CreateAudio($input: AudioInput!) {
    createAudio(audioInput: $input) {
      _id
      title
    }
  }
`;

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
        <option value={"Music"}>Music</option>
        <option value={"Quran"}>Quran</option>
        <option value={"Podcast"}>Hosting</option>
      </select>
      
      {formData.type === "Music" ? <MusicFields handleChange={handleChange}/> : <></>}
      {formData.type === "Podcast" ? <PodcastFields handleChange={handleChange}/> : <></>}
      {formData.type === "Quran" ? <QuranFields handleChange={handleChange}/> : <></>}
      <button type="submit">Submit</button>
    </form>
  );
}
