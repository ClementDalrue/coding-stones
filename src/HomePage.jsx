import React, { useState } from "react";

const musicGenres = ["Blues", "Jazz", "Rap", "Reggae", "Rock"];

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <div className="homepage">
      <div className="homepage-container">
        <label>Faites le choix d'un thème musical et on vous emmène</label>
        <form className="homepage-form">
          <div className="homepage-form-container">
            {musicGenres.map((genre) => (
              <div className={`homepage-form-toggle ${selectedGenre === genre ? 'selected-chart' : ''}`}>
                <label htmlFor={genre}>{genre}</label>
                <input
                  className="homepage-form-input"
                  type="checkbox"
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
          <button className="homepage-form-button" type="submit">
            GO
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
