import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAudio from "./pages/audio/CreateAudio";
import FetchAudios from "./pages/audio/FetchAudios";
import AudioDetails from "./pages/audio/AudioDetails";
import FetchByTitle from "./pages/audio/FetchByTitle";
import PaginationAttempt from "./pages/PaginationAttempt";
import AdminLogin from "./pages/auth/AdminLogin";
import AdminLogout from "./pages/auth/AdminLogout";

import "./app.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/create-audio" Component={CreateAudio} />
        <Route path="/fetch-audios" Component={FetchAudios} />
        <Route path="/fetch-audios/details/:_id" Component={AudioDetails} />
        <Route path="/fetch-byTitle" Component={FetchByTitle} />
        <Route path="/pagination" Component={PaginationAttempt} />

        {/* auth */}
        <Route path="/admin/login" Component={AdminLogin}></Route>
        <Route path="/admin/logout" Component={AdminLogout}></Route>
      </Routes>
    </div>
  );
}

export default App;
