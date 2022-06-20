import React from "react";

import ImgDsDark from "assets/img/casarepousoodelia3.jpg";

import { Link } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 bg-light border-bottom shadow-sm">
        <div className="container">
          <nav className="my-2 my-md-0 mr-md-3">
            <div className="Icone-NavBar">
              <Link to="/">
                <img src={ImgDsDark} alt="Casa Repouso" width="120" />
                <span> Casa De Repouso Chácara Odélia</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
