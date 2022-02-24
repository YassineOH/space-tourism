import React from "react";
import PrimaryHeader from "../../components/PrimaryHeader";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <PrimaryHeader page="home" />
      <main className="grid grid__container" id="main">
        <div className="content flow">
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            so, you want to traval to <br />
            <span className="text-white fs-900 ff-serif">space</span>
          </h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!{" "}
          </p>
        </div>
        <a className="large-button fs-600 bg-white text-dark uppercase letter-spacing-2">
          explore
        </a>
      </main>
    </div>
  );
}

export default Home;
