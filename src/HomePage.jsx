import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "./logo.svg";

const musicGenres = ["Blues", "Jazz", "Rap", "Reggae", "Rock"];

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
   

  return (
    <div className="homepage">
      <div className="homepage-container">
        <img src={logo} alt="Logo of the website StepSound"/>
        <label>Faites le choix d'un thème musical et on vous emmène</label>
        <form className="homepage-form">
          <div className="homepage-form-container">
            {musicGenres.map((genre) => (
              <div key={genre} className={`homepage-form-toggle ${selectedGenre === genre ? 'selected-chart' : ''}`}>
                <label htmlFor={genre}>{genre}</label>
                <input
                  className="homepage-form-input"
                  type="checkbox"
                  required
                  name={genre}
                  id={genre}
                  value={genre}
                  checked={selectedGenre === genre}
                  onChange={(e) => setSelectedGenre(e.target.checked ? genre : '')}
                />
              </div>
            ))}
          </div>
          <input
            className="homepage-form-input-budget"
            type="text"
            id="budget"
            placeholder="Votre budget"
          />

          <hr/>

          <Link to="/Propositions"><button className="homepage-form-button" type="submit">
            GO
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
