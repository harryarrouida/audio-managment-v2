import { Routes, Route } from "react-router-dom";
import CreateAudio from "./pages/audio/CreateAudio";
import FetchAudios from "./pages/audio/FetchAudios";
import AudioDetails from "./pages/audio/AudioDetails";
import FetchByTitle from "./pages/audio/FetchByTitle";
import PaginationAttempt from "./pages/PaginationAttempt";
import AdminLogin from "./pages/auth/admin/AdminLogin";
import AdminLogout from "./pages/auth/admin/AdminLogout";

import "./app.css";
import "./main.css";

import UserLogin from "./pages/auth/user/UserLogin";
import UserRegister from "./pages/auth/user/UserRegister";
import AdminDashboard from "./pages/auth/admin/AdminDashboard";
import Home from "./pages/Home";
import FetchUsers from "./pages/users/FetchUsers";
import UserDashboard from "./pages/auth/user/UserDashboard";
import UserAudios from "./pages/auth/user/UserAudios";
import CreatePlaylist from "./pages/auth/user/CreatePlaylist";
import UserPlaylists from "./pages/auth/user/UserPlaylists";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/dashboard" Component={AdminDashboard} />
        <Route path="/create-audio" Component={CreateAudio} />
        <Route path="/fetch-audios" Component={FetchAudios} />
        <Route path="/fetch-audios/details/:_id" Component={AudioDetails} />
        <Route path="/fetch-byTitle" Component={FetchByTitle} />
        <Route path="/pagination" Component={PaginationAttempt} />

        <Route path="/" Component={Home}></Route>

        {/* admin */}
        <Route path="/admin/login" Component={AdminLogin}></Route>
        <Route path="/admin/logout" Component={AdminLogout}></Route>
        <Route path="/admin/users" Component={FetchUsers}></Route>
        {/* user */}
        <Route path="/user/dashboard" Component={UserDashboard}></Route>
        <Route path="/user/login" Component={UserLogin}></Route>
        <Route path="/user/register" Component={UserRegister}></Route>
        <Route path="/user/audios" Component={UserAudios}></Route>
        <Route path="/user/create-playlist" Component={CreatePlaylist}></Route>
        <Route path="/user/playlists" Component={UserPlaylists}></Route>
      </Routes>
    </div>
  );
}

export default App;
