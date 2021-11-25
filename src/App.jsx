import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Details from "./details";

function App() {
  return (
    <BrowserRouter>
      <div>
        test
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
