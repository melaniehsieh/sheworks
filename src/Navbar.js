import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <ul>
        <h1>sheworks</h1>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/time">time</Link>
        </li>
        <li>
          <Link to="/family">family</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
