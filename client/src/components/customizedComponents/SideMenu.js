import {
  Card,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export function SideMenu() {
  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
      <ListItem>
          <Link to={"/"}>Home</Link>
        </ListItem>
        <ListItem>
          <Link to={"/create-audio"}>Create Audio</Link>
        </ListItem>
        <ListItem>
          <Link to={"/fetch-audios"}>Fetch Audios</Link>
        </ListItem>
        <ListItem>
          <Link to={"/fetch-byTitle"}>Fetch By Title</Link>
        </ListItem>
      </List>
    </Card>
  );
}
