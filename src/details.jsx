import React from "react";
import test from "./test.png";
import carte from "./carte.png";

const Details = () => {
  return (
    <div className="details-container">
      <div className="details-header">
        <img src={test} alt="" />
        <h2>Mon parcours</h2>
        <div clasName="details-elements-container">
          <div className="carte-container"></div>
          <img src={carte} alt="carte" className=""/>

          <h3>Mes préférences</h3>
          <p>
            Pas tout à fait convaincu par le programme ? Tu peux personnaliser
            encore plus ton voyage en sélectionnant ou en supprimant des types
            d'expériences !{" "}
          </p>
          <form>
            <div className="preferences-container">
              <span>
                <input type="checkbox" id="bars" />
                <label for="bars">Bars</label>
              </span>
              <span>
                <input type="checkbox" id="clubs" />
                <label for="bars">Clubs</label>
              </span>
              <span>
                <input type="checkbox" id="concerts" />
                <label for="concerts">Concerts</label>
              </span>
              <span>
                <input type="checkbox" id="musees" />
                <label for="concerts">Musées</label>
              </span>
              <span>
                <input type="checkbox" id="festivals" />
                <label for="concerts">Festivals</label>
              </span>
              <span>
                <input type="checkbox" id="opera" />
                <label for="concerts">Opéra</label>
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
