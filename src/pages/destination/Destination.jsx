import React, { useState } from "react";
import Tabs from "../../components/Tabs";
import NumberedTitle from "../../components/NumberedTitle";
import data from "../../data.json";
import PrimaryHeader from "../../components/PrimaryHeader";

import moon from "../../assets/destination/image-moon.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";
import mars from "../../assets/destination/image-mars.png";

import "./destination.css";

function Destination() {
  const destinations = data["destinations"];
  const planteImages = [moon, mars, europa, titan];
  const [planteIndex, setPlanetIndex] = useState(0);

  const planet = destinations[planteIndex];
  const imgPlanet = planteImages[planteIndex];

  const changeDestination = (e) => {
    setPlanetIndex(e.target.id);
  };

  return (
    <div className="destination">
      <PrimaryHeader page="destination" />
      <main className="grid grid__container grid__container--destination flow">
        <NumberedTitle title="pick your destination" number="01" />
        <img src={imgPlanet} alt="alt" />
        <Tabs changeDestination={changeDestination} />
        <article>
          <h2 className="uppercase fs-900 ff-serif">{planet.name}</h2>
          <p>{planet.description}</p>
          <div className="destination-meta flex">
            <div>
              <h3 className="uppercase text-accent fs-200">distance</h3>
              <p className="uppercase fs-600">{planet.distance}</p>
            </div>
            <div>
              <h3 className="uppercase text-accent fs-200">travel</h3>
              <p className="uppercase fs-600">{planet.travel}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Destination;
