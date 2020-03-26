import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div>
      <br />
      <div class="card-group img-thumbnail w-50 h-100">
        <div class="card">
          <a href={"https://claudhue.github.io/03-Password-Generator/"} className = "url">
            <h5>Password Generator</h5>
          </a>
        </div>
        <div class="card">
          <a href={"https://claudhue.github.io/04-Code-Quiz/"} className = "url">
            <h5>Code Quiz</h5>
          </a>
        </div>

        <div class="card">
          <a href={"https://claudhue.github.io/05-Day-Planner/"} className = "url">
            <h5>Day Planner</h5>
          </a>
        </div>
        <div class="card">
          <a href={"https://claudhue.github.io/06-Weather-Dashboard/"} className = "url">
            <h5>Weather Dashboard</h5>
          </a>
        </div>
      </div>
    </div>
  );
}
