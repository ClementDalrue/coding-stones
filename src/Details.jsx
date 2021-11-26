import React from "react";
import { useState } from "react";
import Detail from "./details.jpg";
import Sydney from "./sydney.png";
import londres from "./londres.png";
import newyork from "./newyork.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const activities = [
  {
    label: "Bars",
    image: londres,
  },
  {
    label: "Clubs",
    image: newyork,
  },
  {
    label: "Concerts",
    image: Sydney,
  },
  {
    label: "Musées",
    image: londres,
  },
  {
    label: "Festivals",
    image: londres,
  },
  {
    label: "Opéras",
    image: londres,
  },
];

const Details = () => {
  const [carte, setCarte] = useState(Sydney);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState(activities);

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
        <img src={Detail} alt="" className="details-bg-img" />

        <div className="details-elements-container">
          <div className="carte-container">
            {isLoading ? (
              <div className="flou">
                <Box className="loading" sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              </div>
            ) : (
              <img src={carte} alt="carte" className="" />
            )}
          </div>

          <form>
            <div className="preferences-container">
              {activities.map((activity) => (
                <span>
                  <input
                    onChange={(e) => {
                      onCarteClick(activity.image);
                      
                      if (e.target.checked) {
                        setSelectedActivities([
                          ...selectedActivities,
                          activity,
                        ])
                      } else {
                        setSelectedActivities(selectedActivities.filter(a => a.label !== activity.label))
                      }
                    }}
                    type="checkbox"
                    checked={selectedActivities.find(a => a.label === activity.label)}
                  />

                  <label for="bars">{ activity.label }</label>
                </span>
              ))}
            </div>
          </form>
        </div>
      </div>
      <div className="proposition-bg1">
        <Link to="/Propositions" className="proposition-btn">
          Voir un autre voyage
        </Link>
      </div>
    </div>
  );
};

export default Details;
