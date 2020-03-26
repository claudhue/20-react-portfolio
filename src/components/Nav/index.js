import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h1 class="display-4 font-weight-light" href="#">
        Claudia Huerta
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to="/" className="link">
              About Me
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/portfolio" className="link">
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
