import React from "react";
import { Link } from "react-router-dom";

const PortfoliosHomePage = () => (
  <div>
    <h2>My portfolios</h2>
    <p>See what I've done:</p>
    <ul>
      <li>
        <Link to="/portfolio/1">Portfolio #1</Link>
      </li>
      <li>
        <Link to="/portfolio/2">Portfolio #2</Link>
      </li>
    </ul>
  </div>
);

export default PortfoliosHomePage;
