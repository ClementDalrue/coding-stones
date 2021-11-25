import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./settings";
import Details from "./details";

function App() {
  return (
    <BrowserRouter>
      <div>
        test
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Settings />} />
          <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
