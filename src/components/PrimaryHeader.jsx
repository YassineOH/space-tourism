import React from "react";
import logo from "../assets/shared/logo.svg";
import close from "../assets/shared/icon-close.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import PrimaryNav from "./PrimaryNav";

const navMobilePosition = (check) => {
  const nav = document.querySelector("nav ul");
  if (check) {
    nav.setAttribute("data-visible", "true");
  } else {
    nav.setAttribute("data-visible", "false");
  }
};

function PrimaryHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="flex primary-header">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={() => {
          setIsMenuOpen((isMenuOpen) => !isMenuOpen);
          navMobilePosition(!isMenuOpen);
        }}
      >
        {isMenuOpen ? (
          <img src={close} alt="close" />
        ) : (
          <img src={menu} alt="menu" />
        )}
      </button>
      <PrimaryNav />
    </header>
  );
}

export default PrimaryHeader;
