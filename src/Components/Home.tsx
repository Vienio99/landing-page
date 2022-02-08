import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./styles/Home.css";

function Home() {
  return (
    <div id="HomeContainer">
      <div className="headerWrapper">
        {/* Container for top items */}
        <header className="header">
          <div className="navbarContainer">
            <h2>DeFi Dashboard</h2>
            <div className="container">
              <a>Overview</a>
              <a>Top DeFi Protocols</a>
              <a>Quote</a>
            </div>
          </div>
          {/* Container for bottom items */}
          <div className="pageDescContainer">
            {/* Left */}
            <div>
              <p className="descTitle">This website is </p>
              <p className="descTitle">awesome</p>
              <p>
                This website has some subtext that goes under here under the
              </p>
              <p>main title. It's a smaller font and the color is lower </p>
              <p>contrast.</p>
              <button className="signUpBtnTop">Sign up</button>
            </div>
            {/* Right */}
            <div className="imageBox">
              <p>This is a placeholder for image</p>
            </div>
          </div>
        </header>
      </div>
      <div className="nftSection">
        <h1>Some random information.</h1>
        <div className="container">
          <div className="nftContainer">
            <div className="nftImg" />
            <p>this is some subtext</p>
            <p>under an illustration</p>
            <p> or image</p>
          </div>
          <div className="nftContainer">
            <div className="nftImg" />
            <p>this is some subtext</p>
            <p>under an illustration</p>
            <p> or image</p>
          </div>
          <div className="nftContainer">
            <div className="nftImg" />
            <p>this is some subtext</p>
            <p>under an illustration</p>
            <p> or image</p>
          </div>
          <div className="nftContainer">
            <div className="nftImg" />
            <p>this is some subtext</p>
            <p>under an illustration</p>
            <p> or image</p>
          </div>
        </div>
      </div>
      <div className="quoteSectionWrapper">
        <div className="quoteSection">
          <div className="textContainer">
            <em>
              <q>
                This is an inspiring quote, or a testimonial from a customer.
                Maybe it's just filling up space, or maybe people will actually
                read it. Who knows? All I know is that it looks nice.
              </q>
            </em>
            <p className="quoteAuthor">-Thor, God of Thunder</p>
          </div>
        </div>
      </div>
      <div className="inviteSectionWrapper">
        <div className="inviteSection">
          <div className="inviteContainer">
            <div className="inviteText">
              <h1>Call to action! It's time!</h1>
              <p>
                Sign up for our product by clicking that button right over
                there!
              </p>
            </div>
            <button className="signUpBtnBtm">Sign up</button>
          </div>
        </div>
      </div>
      <footer>Copyright The Odin Project 2021</footer>
    </div>
  );
}

export default Home;
