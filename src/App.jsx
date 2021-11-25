import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./settings";
import Details from "./details";
import Propositions from "./Propositions";

function App() {
  return (
    <BrowserRouter>
      <div>
       
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Settings />} />
            <Route exact path="/propositions" element={<Propositions />} />
          <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
