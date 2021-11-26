import React from "react";
import Chatbot from "react-chatbot-kit";
import { Link } from "react-router-dom";

const Propositions = () => {
  return (
    <div className="proposition-bg">
      
      <Link to="/details"><button className="proposition-btn">+ Détail</button></Link>
      <Chatbot />
    </div>
  );
};

export default Propositions;
