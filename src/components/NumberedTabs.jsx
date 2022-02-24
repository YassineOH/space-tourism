import React from "react";

function NumberedTabs({ changeTechnology }) {
  const changeActive = (e) => {
    const parent = e.target.parentNode;
    const children = parent.querySelectorAll("* > *");
    Array.from(children).map((child) =>
      child.setAttribute("data-selected", "false")
    );
    e.target.setAttribute("data-selected", "true");
  };

  return (
    <div className="numbered-indicators ff-serif fs-600 flex">
      <button
        data-selected="true"
        id="0"
        onClick={(e) => {
          changeActive(e);
          changeTechnology(e);
        }}
      >
        1
      </button>
      <button
        data-selected="false"
        id="1"
        onClick={(e) => {
          changeActive(e);
          changeTechnology(e);
        }}
      >
        2
      </button>
      <button
        data-selected="false"
        id="2"
        onClick={(e) => {
          changeActive(e);
          changeTechnology(e);
        }}
      >
        3
      </button>
    </div>
  );
}

export default NumberedTabs;
