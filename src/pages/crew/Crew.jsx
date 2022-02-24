import React, { useState } from "react";
import PrimaryHeader from "../../components/PrimaryHeader";
import NumberedTitle from "../../components/NumberedTitle";
import DotSlide from "../../components/DotSlide";

import data from "../../data.json";

import hurley from "../../assets/crew/image-douglas-hurley.png";
import shuttleworth from "../../assets/crew/image-mark-shuttleworth.png";
import glover from "../../assets/crew/image-victor-glover.png";
import ansari from "../../assets/crew/image-anousheh-ansari.png";

import "./crew.css";

function Crew() {
  const crew = data["crew"];
  const crewImage = [hurley, shuttleworth, glover, ansari];
  const [crewInd, setCrewInd] = useState(0);

  const crewMembre = crew[crewInd];
  const imgCrewMembre = crewImage[crewInd];

  const changeCrewMembre = (e) => {
    console.log(e.target.parentNode);
    setCrewInd(e.target.id);
  };

  return (
    <div className="crew">
      <PrimaryHeader page="crew" />
      <main className="grid grid__container grid__container--crew flow">
        <NumberedTitle title="meet your crew" number="02" />

        <article className="flow">
          <h3 className="uppercase fs-600 ff-serif">{crewMembre.role}</h3>
          <h2 className="uppercase fs-700 ff-serif">{crewMembre.name}</h2>
          <p className="text-accent">{crewMembre.bio}</p>
        </article>
        <DotSlide changeCrewMembre={changeCrewMembre} />
        <img src={imgCrewMembre} alt={crewMembre.name} />
      </main>
    </div>
  );
}

export default Crew;
