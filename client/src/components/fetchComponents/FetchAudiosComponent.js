import React from "react";
import { gql, useQuery } from "@apollo/client";

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

export default function FetchAudiosComponent() {
  const { data, loading, error } = useQuery(FETCH_AUDIOS);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error.message}</div>;
  return (
    <div className="text-center">
      <div class="w-3/5 mx-auto my-5 rounded-lg border border-gray-200">
        <div class="overflow-x-auto rounded-t-lg">
          <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
              <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  TITLE
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  TYPE
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  LANGUAGE
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  QUALITY
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              {data.audios.map((audio) => (
                <tr key={audio._id}>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {audio.title}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {audio.type}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {audio.language}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {audio.quality}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
