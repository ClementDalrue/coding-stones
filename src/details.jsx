import React from "react";
import { useState } from "react";
import details from "./details.jpg";
import Sydney from "./sydney.png";
import londres from "./londres.png";
import newyork from "./newyork.png";
import * as React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Details = () => {
  const [carte, setCarte] = useState(Sydney);
  const [isLoading, setIsLoading] = useState(false);

  function onCarteClick(ville) {
    setIsLoading(true);
    setTimeout(() => {
      setCarte(ville);
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="details-container">
      <div className="details-header">
        <img src={details} alt="" className="details-bg-img" />
        <h2>Mon parcours</h2>
        <div clasName="details-elements-container">
          <div className="carte-container"></div>

          {isLoading ? (
            <div>
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          </div>
          ) : (
            <img src={carte} alt="carte" className="" />
          )}

          <h3>Mes préférences</h3>
          <p>
            Pas tout à fait convaincu par le programme ? Tu peux personnaliser
            encore plus ton voyage en sélectionnant ou en supprimant des types
            d'expériences !{" "}
          </p>
          <form>
            <div className="preferences-container">
              <span>
                <input
                  onChange={() => onCarteClick(londres)}
                  type="checkbox"
                  //id="bars"
                />
                <label for="bars">Bars</label>
              </span>
              <span>
                <input
                  onChange={() => setCarte(`${newyork}`)}
                  type="checkbox"
                  id="clubs"
                />
                <label for="clubs">Clubs</label>
              </span>
              <span>
                <input type="checkbox" id="concerts" />
                <label for="concerts">Concerts</label>
              </span>
              <span>
                <input type="checkbox" id="musees" />
                <label for="musees">Musées</label>
              </span>
              <span>
                <input type="checkbox" id="festivals" />
                <label for="festivals">Festivals</label>
              </span>
              <span>
                <input type="checkbox" id="opera" />
                <label for="opéra">Opéra</label>
              </span>
            </div>
            <div>
              <button type="submit">Ok</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
