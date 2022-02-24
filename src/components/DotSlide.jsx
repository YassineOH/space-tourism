import React from "react";

function DotSlide({ changeCrewMembre }) {
  const changeActive = (e) => {
    const parent = e.target.parentNode;
    const children = parent.querySelectorAll("* > *");
    Array.from(children).map((child) =>
      child.setAttribute("data-selected", "false")
    );
    e.target.setAttribute("data-selected", "true");
  };

  return (
    <div className="dot-indicators flex">
      <button
        data-selected="true"
        id="0"
        onClick={(e) => {
          changeActive(e);
          changeCrewMembre(e);
        }}
      >
        <span className="sr-only">slide</span>
      </button>
      <button
        data-selected="false"
        id="1"
        onClick={(e) => {
          changeActive(e);
          changeCrewMembre(e);
        }}
      >
        <span className="sr-only">slide</span>
      </button>
      <button
        data-selected="false"
        id="2"
        onClick={(e) => {
          changeActive(e);
          changeCrewMembre(e);
        }}
      >
        <span className="sr-only">slide</span>
      </button>
      <button
        data-selected="false"
        id="3"
        onClick={(e) => {
          changeActive(e);
          changeCrewMembre(e);
        }}
      >
        <span className="sr-only">slide</span>
      </button>
    </div>
  );
}

export default DotSlide;
