import React from "react";
import { gql, useQuery } from "@apollo/client";

const FETCH_AUDIO = gql`
  query fetchAudio($input: ID!) {
    audio(_id: $input) {
      _id
      title
    }
  }
`;

export default function AudioDetailsComponent(props) {
  const id = props.audioId._id;
  const { data, loading, error } = useQuery(FETCH_AUDIO, {
    variables: { input: id },
  });
  console.log("id is ", id);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error happened: {error.message}</div>;

  return <div>{data.audio.title}</div>;
}
