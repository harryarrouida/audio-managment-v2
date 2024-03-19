import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const FETCH_BY_NAME = gql`
  query FetchByName($title: String!) {
    audioByTitle(title: $title) {
      _id
      title
    }
  }
`;

export default function FetchByTitleComponent() {
  const [title, setTitle] = useState(null);
  const { data, loading, error, refetch} = useQuery(FETCH_BY_NAME, {
    variables: { title },
  });

  useEffect(() => {
    refetch()
  }, [title])

  return (
    <div className="relative w-4/5 mx-auto my-20">
      <form>
        <label htmlFor="Search" className="sr-only">
          Title
        </label>
        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm p-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <div className="my-20">
        {loading ? <div>Loading...</div> : <></>}
        {/* {error ? <div>Error: {error.message}</div> : <></>} */}
        {data &&
          data.audioByTitle.map((audio) => (
            <li key={audio._id} className="my-5">
              <Link to={`/fetch-audios/details/${audio._id}`}>
                {audio.title}
              </Link>
            </li>
          ))}
      </div>
    </div>
  );
}
