import React from "react";

function Tabs({ changeDestination }) {
  const changeActive = (e) => {
    const parent = e.target.parentNode;
    const children = parent.querySelectorAll("* > *");

    Array.from(children).map((child) => child.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <div className="tab-list underline-indicators flex">
      <button
        className="uppercase text-accent letter-spacing-3 bg-transparent ff-sans-cond active"
        id="0"
        onClick={(e) => {
          changeActive(e);
          changeDestination(e);
        }}
      >
        moon
      </button>
      <button
        className="uppercase text-accent letter-spacing-3 bg-transparent ff-sans-cond"
        id="1"
        onClick={(e) => {
          changeActive(e);
          changeDestination(e);
        }}
      >
        mars
      </button>
      <button
        className="uppercase text-accent letter-spacing-3 bg-transparent ff-sans-cond"
        id="2"
        onClick={(e) => {
          changeActive(e);
          changeDestination(e);
        }}
      >
        europa
      </button>
      <button
        className="uppercase text-accent letter-spacing-3 bg-transparent ff-sans-cond"
        id="3"
        onClick={(e) => {
          changeActive(e);
          changeDestination(e);
        }}
      >
        titan
      </button>
    </div>
  );
}

export default Tabs;
