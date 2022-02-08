import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./styles/Home.css";

function Home() {
  return (
    <div id="HomeContainer">
      <header className="header">
        {/* Container for top items */}
        <div className="wrapper">
          <div className="navbarContainer">
            <h2>DeFi Dashboard</h2>
            <div className="linksContainer">
              <a>Overview</a>
              <a>Top DeFi Protocols</a>
              <a>Quote</a>
            </div>
          </div>
          {/* Container for bottom items */}
          <div className="pageDescContainer">
            {/* Left */}
            <div>
              <h1>This website is </h1>
              <h1>awesome</h1>
              <p>
                This website has some subtext that goes under here under the
              </p>
              <p>main title. It's a smaller font and the color is lower </p>
              <p>contrast.</p>
              <button className="signUpBtn">Sign up</button>
            </div>
            {/* Right */}
            <div className="imageBox">
              <p>This is a placeholder for image</p>
            </div>
          </div>
        </div>
      </header>
      <div className="nftSection">
        <h1>Some random information.</h1>
        <div className="linksContainer">
          <div className="nftContainer">
            <img src="" />
            <p>this is some subtext under an illustration or image</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
