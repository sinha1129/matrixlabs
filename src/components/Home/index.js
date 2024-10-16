import { Component } from "react";

import Navbar from "../Navbar";

import "./index.css";
import Features from "../Features";
import About from "../About";

class Home extends Component {
  render() {
    return (
      <>
      <div className="main-container">
        <div className="bg-container">
          <div className="container">
            <Navbar />
            <div className="home-container">
              <h1 className="heading">
                When Innovation <br /> Meets <a className="span">Investment</a>
              </h1>
              <p className="description">
                Empowering Trading Through Advanced Technology
              </p>
              <button type="button" className="open-button">
                Open dApp
              </button>
            </div>
          </div>
        </div>
        
        <Features />
        <About />
        </div>
      </>
    );
  }
}

export default Home;
