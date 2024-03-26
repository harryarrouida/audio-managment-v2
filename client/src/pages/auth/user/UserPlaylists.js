import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserPlaylists() {
  const [playlists, setPlaylists] = useState();
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/user/playlists"
        );
        setPlaylists(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlaylists();
  }, []);
  return (
    <div>
      {playlists.map((playlist) => (
        <div>{playlist.name}</div>
      ))}
    </div>
  );
}
