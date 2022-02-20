import React from "react";

function PrimaryNav() {
  return (
    <nav>
      <ul
        data-visible="false"
        id="primary-navigation"
        className="flex primary-navigation underline-indicators"
      >
        <li className="active">
          <a
            href="#"
            className="ff-sans-cond text-white uppercase letter-spacing-2"
          >
            <span>00</span>home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="ff-sans-cond text-white uppercase letter-spacing-2"
          >
            <span>01</span>destination
          </a>
        </li>
        <li>
          <a
            href="#"
            className="ff-sans-cond text-white uppercase letter-spacing-2"
          >
            <span>02</span>crew
          </a>
        </li>
        <li>
          <a
            href="#"
            className="ff-sans-cond text-white uppercase letter-spacing-2"
          >
            <span>03</span>technology
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNav;
