import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <ul>
        <h1>sheworks</h1>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/time">time</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
