import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import GeneralFields from "./formComponents/GeneralFields";
import MusicFields from "./formComponents/MusicFields";
import QuranFields from "./formComponents/QuranFields";
import NewsFields from "./formComponents/NewsFields";
import EmissionFields from "./formComponents/EmissionFields";
import FictionFields from "./formComponents/FictionFields";
import CauserieFields from "./formComponents/CauserieFields";
import Success from "./customizedComponents/Success";
import Error from "./customizedComponents/Error";

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
  const [status, setStatus] = useState(null);

  const [createAudio] = useMutation(CREATE_AUDIO);

  const handleCSVFieldChange = (name, value) => {
    const updatedValue = value.split(",").map((item) => item.trim());
    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      [
        "productors",
        "presenter",
        "preparation",
        "singer",
        "author",
        "actor",
      ].includes(name)
    ) {
      handleCSVFieldChange(name, value);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
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
          className="bg-violet-500 text-white py-3 px-5 mx-auto my-10 rounded-lg uppercase"
          type="submit"
        >
          submit
        </button>
      </div>
      {status === "success" ? <Success /> : <></>}
      {status === "failed" ? <Error /> : <></>}
    </form>
  );
}
