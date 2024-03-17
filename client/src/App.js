import { Routes, Route } from "react-router-dom";
import GeneralFormComponent from "./components/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={GeneralFormComponent} />
      </Routes>
    </div>
  );
}

export default App;
