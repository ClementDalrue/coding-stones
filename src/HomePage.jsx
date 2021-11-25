import React from 'react';

const HomePage = () => {
   
        return (
            <div className="homepage-container">
                <label >Faites le choix d'un thème musical et on vous emmène</label>
                <form className="homepage-form">
                <div className="homepage-form-container">
                <div className="homepage-form-toggle">
                  <label htmlFor="Blues">Blues</label>
                <input className="homepage-form-input"
                type="checkbox"
                name="Blues"
                id="Blues"
                />
                </div>
                <div className="homepage-form-toggle" >
                <label htmlFor="Jazz">Jazz</label>
                <input className="homepage-form-input"
                type="checkbox"
                name="Jazz"
                id="Jazz"
                />
                </div>
                <div className="homepage-form-toggle">
                <label htmlFor="Rap">Rap</label>
                <input className="homepage-form-input"
                type="checkbox"
                name="Rap"
                id="Rap"
                />
                </div>
                <div className="homepage-form-toggle">
                <label htmlFor="Rock">Reggae</label>
                <input className="homepage-form-input"
                type="checkbox"
                name="Reggae"
                id="Reggae"
                />
                </div>
                <div className="homepage-form-toggle">
                <label htmlFor="Rock">Rock</label>
                <input className="homepage-form-input" 
                id="Rock"
                type="checkbox"
                name="Rock"
                id="Rock"
                />
                </div>
                </div>
                <input className="homepage-form-input-budget"
                type="text" 
                id="budget"
                placeholder="Votre budget"
                />
                <button className="homepage-form-button" type="submit">GO</button>
              </form>
            </div>
          );

};

export default HomePage;