import React from 'react';

const Settings = () => {
   
        return (
            <div className="settings-container">
              <form className="form">
                <label >Ton genre musical</label>
                <input id="music-choice"></input>
                <button type="submit">Ok</button>
                <label >Ton budget</label>
                <input id="music-choice"></input>
                <button type="submit">J'y vais</button>
              </form>
            </div>
          );

};

export default Settings;