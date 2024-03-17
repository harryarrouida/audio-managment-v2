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

const TYPES = ["Music", "Quran", "News", "Emission", "Causerie", "Fiction"];

export default function Form() {
  const [formData, setFormData] = useState({});

  const [createAudio] = useMutation(CREATE_AUDIO);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
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
      <GeneralFields handleChange={handleChange} formData={formData} />
      <div className="w-1/1 text-center my-5">
        <select
          name="type"
          onChange={handleChange}
          id="HeadlineAct"
          class="w-3/5 mx-auto px-3 py-3  w-1/3 mt-1.5 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        >
          <option selected disabled>
            select a type
          </option>
          {TYPES.map((type) => (
            <option value={type}>{type}</option>
          ))}
        </select>
      </div>

      {formData.type === "Music" ? (
        <MusicFields handleChange={handleChange} />
      ) : (
        <></>
      )}
      {formData.type === "Emission" ? (
        <EmissionFields handleChange={handleChange} />
      ) : (
        <></>
      )}
      {formData.type === "Quran" ? (
        <QuranFields handleChange={handleChange} />
      ) : (
        <></>
      )}
      {formData.type === "News" ? (
        <NewsFields handleChange={handleChange} />
      ) : (
        <></>
      )}
      {formData.type === "Fiction" ? (
        <FictionFields handleChange={handleChange} />
      ) : (
        <></>
      )}
      {formData.type === "Causerie" ? (
        <CauserieFields handleChange={handleChange} />
      ) : (
        <></>
      )}
      <div className="mx-auto text-center">
        <button
          class="my-5 group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          type="submit"
        >
          <span class="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>

          <span class="relative block border border-current bg-white px-8 py-3">
            submit
          </span>
        </button>
      </div>
    </form>
  );
}
