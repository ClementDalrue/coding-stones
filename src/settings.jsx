import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
   
        return (
            <div className="settings-container">
              <form className="form">
                <label >Ton genre musical</label>
                <input id="music-choice"></input>
                <button type="submit">Ok</button>
                <label >Ton budget</label>
                <input id="music-choice"></input>
                <Link to="/details"><button type="submit">J'y vais</button></Link>
 
              </form>
            </div>
          );

};

export default Settings;