import React from 'react';

const HomePage = () => {
   
        return (
            <div className="homepage-container">
                <label >Faites le choix d'un thème musical et on vous emmène</label>
                <form className="homepage-form">
                <div className="homepage-form-container">
                <div className="homepage-form-toggle">
                  <label>Blues</label>
                <input className="homepage-form-input"
                type="checkbox"
                name="Blues"
                />
                </div>
                <div className="homepage-form-toggle" >
                <label>Jazz</label>
                <input className="homepage-form-input"
                type="checkbox"
                name="Jazz"
                />
                </div>
                <div className="homepage-form-toggle">
                <label>Rap</label>
                <input className="homepage-form-input"
                type="checkbox"
                name="Rap"
                />
                </div>
                <div className="homepage-form-toggle">
                <label>Reggae</label>
                <input className="homepage-form-input"
                type="checkbox"
                name="Reggae"
                />
                </div>
                <div className="homepage-form-toggle">
                <label htmlFor="Rock">Rock</label>
                <input className="homepage-form-input" 
                id="Rock"
                type="checkbox"
                name="Rock"
                />
                </div>
                </div>
                <div className="homepage-label">
                <label>Ton budget</label>
                <input type="text" id="budget"></input>
                </div>
                <button className="homepage-form-button" type="submit">J'y vais</button>
              </form>
            </div>
          );

};

export default HomePage;