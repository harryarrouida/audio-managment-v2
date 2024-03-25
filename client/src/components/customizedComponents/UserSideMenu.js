import { Card, Typography, List, ListItem } from "@material-tailwind/react";

import { Link } from "react-router-dom";

export function UserSideMenu() {
  return (
    <Card
      className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
      style={{ position: "fixed", top: "0" }}
    >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/Logo_SNRT.svg"
            alt="not found"
            className="w-2/3 mx-auto"
          ></img>
        </Typography>
      </div>
      <List>
        <ListItem>
          <Link to={"/user/dashboard"}>Home</Link>
        </ListItem>
        <ListItem>
          <Link to={"/user/audios"}>Audios</Link>
        </ListItem>
        <ListItem>
          <Link to={"/user/playlists"}>Playlists</Link>
        </ListItem>
        <ListItem>
          <Link to={"/user/create-playlist"}>Create Playlist</Link>
        </ListItem>
        <ListItem>
          <Link to={"/user/search"}>Search</Link>
        </ListItem>
        <ListItem>
          <Link to={"/user/logout"}>Logout</Link>
        </ListItem>
      </List>
    </Card>
  );
}
