import React from "react";
import { gql, useQuery } from "@apollo/client";
import { UserSideMenu } from "../../../components/customizedComponents/UserSideMenu";
import AudioCard from "../../../components/customizedComponents/AudioCard";

const FETCH_AUDIOS = gql`
  query {
    audios {
      _id
      title
      date_production
      productors
      nbr_invoice
      nbr_contract
      type_support
      nbr_support
      tech_comments
      quality
      language
      frequency
      synopsis
      type
      commentator
      event_location
      event_date
      sequence
      presenter
      preparation
      format
      version
      speaker
      causerie_reciter
      causerie_location
      quran_reciter
      recite_type
      singer
      interpreter
      composer
      music_writer
      musical_genre
      lyrics
      orchestra
      distribution
      author
      actor
      fiction_writer
      adaptation
    }
  }
`;


export default function UserAudios() {
    const {loading, data, error} = useQuery(FETCH_AUDIOS)
    if(loading) return <p>loading ...</p>
    if(error) return <p>error: {error.message}</p>
  return (
    <div className="flex flex-between h-screen">
      <UserSideMenu />
      <div className="w-3/5 ml-96 my-20">
      <h1 className="title">audios</h1>
      <div>
        {data.audios.map(audio => (<AudioCard title = {audio.title} />))}
      </div>
      </div>
    </div>
  );
}
