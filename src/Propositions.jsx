import React from "react";
import { Link } from "react-router-dom";

const Propositions = () => {
  return (
    <div className="proposition-bg">
      
      <Link to="/details"><button className="proposition-btn">+ Détail</button></Link>
      <Link to="/details/london"><button className="proposition-btn proposition-btn2">+ Détail</button></Link>
      <button className="proposition-btn proposition-btn3">+ Détail</button>
    </div>
  );
};

export default Propositions;
