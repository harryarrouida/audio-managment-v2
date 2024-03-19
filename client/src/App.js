import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAudio from "./pages/CreateAudio";
import FetchAudios from "./pages/FetchAudios";
import AudioDetails from "./pages/AudioDetails";
import FetchByTitle from "./pages/FetchByTitle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/create-audio" Component={CreateAudio} />
        <Route path="/fetch-audios" Component={FetchAudios} />
        <Route path="/fetch-audios/details/:_id" Component={AudioDetails} />
        <Route path="/fetch-byTitle" Component={FetchByTitle} />
      </Routes>
    </div>
  );
}

export default App;
