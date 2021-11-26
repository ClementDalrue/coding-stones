import React from "react";
import { Link } from "react-router-dom";

const Propositions = () => {
  return (
    <div className="proposition-bg">
      
      <Link to="/details"><button className="proposition-btn">+ Détail</button></Link>
    </div>
  );
};

export default Propositions;
