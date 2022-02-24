import React, { useState } from "react";
import PrimaryHeader from "../../components/PrimaryHeader";
import NumberedTitle from "../../components/NumberedTitle";
import NumberedTabs from "../../components/NumberedTabs";

import data from "../../data.json";

import vehicleP from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import vehicleL from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleL from "../../assets/technology/image-space-capsule-landscape.jpg";
import capsuleP from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceportL from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceportP from "../../assets/technology/image-spaceport-portrait.jpg";

import "./technology.css";

function Technology() {
  const technology = data["technology"];
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const techno = technology[technologyIndex];
  const technologyImagesP = [vehicleP, spaceportP, capsuleP];
  const technologyImagesL = [vehicleL, spaceportL, capsuleL];

  const imgTechnologyP = technologyImagesP[technologyIndex];
  const imgTechnologyL = technologyImagesL[technologyIndex];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const changeTechnology = (e) => {
    setTechnologyIndex(e.target.id);
  };

  const changeImages = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", changeImages);

  return (
    <div className="technology">
      <PrimaryHeader page="technology" />
      <main className="grid grid__container grid__container--technology flow">
        <NumberedTitle title="space launch 101" number="03" />
        <div className="technology-content flex">
          <NumberedTabs changeTechnology={changeTechnology} />
          <article className="flow">
            <h3 className="fs-600 ff-sans-cond letter-spacing-3 text-accent uppercase">
              the termonlogy...
            </h3>
            <h2 className="uppercase fs-700 ff-serif">{techno.name}</h2>
            <p>{techno.description}</p>
          </article>
        </div>
        <img
          src={screenWidth > 992 ? imgTechnologyP : imgTechnologyL}
          alt="alt"
        />
      </main>
    </div>
  );
}

export default Technology;
