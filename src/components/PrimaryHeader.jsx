import React from "react";
import logo from "../assets/shared/logo.svg";
import close from "../assets/shared/icon-close.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import PrimaryNav from "./PrimaryNav";

function PrimaryHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="flex primary-header">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <button oncClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img src={close} alt="close" />
        ) : (
          <img src={menu} alt="open" />
        )}
      </button>
      <PrimaryNav />
    </header>
  );
}

export default PrimaryHeader;
