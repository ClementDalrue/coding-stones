import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Details from "./Details";
import DetailsLondon from "./DetailsLondon"
import Propositions from "./Propositions";

function App() {
  return (
    <BrowserRouter>
      <div>
       
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/propositions" element={<Propositions />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details/london" element={<DetailsLondon />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
