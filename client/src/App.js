import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAudio from "./pages/CreateAudio";
import FetchAudios from "./pages/FetchAudios";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/create-audio" Component={CreateAudio} />
        <Route path="/fetch-audios" Component={FetchAudios} />
      </Routes>
    </div>
  );
}

export default App;
