import React from "react";
import { Link } from "react-router-dom";

function PrimaryNav({ page }) {
  return (
    <nav>
      <ul
        data-visible="false"
        id="primary-navigation"
        className="flex primary-navigation underline-indicators"
      >
        <li className={`${page === "home" && "active"} `}>
          <Link
            to="/"
            className="ff-sans-cond text-white uppercase letter-spacing-2"
          >
            <span>00</span>home
          </Link>
        </li>
        <li className={`${page === "destination" && "active"} `}>
          <Link
            to="/destination"
            className="ff-sans-cond text-white uppercase letter-spacing-2"
          >
            <span>01</span>destination
          </Link>
        </li>
        <li className={`${page === "crew" && "active"} `}>
          <Link
            to="/crew"
            className="ff-sans-cond text-white uppercase letter-spacing-2"
          >
            <span>02</span>crew
          </Link>
        </li>
        <li className={`${page === "technology" && "active"} `}>
          <Link
            to="/technology"
            className="ff-sans-cond text-white uppercase letter-spacing-2"
          >
            <span>03</span>technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNav;
