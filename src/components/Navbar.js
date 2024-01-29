import React from "react";
import Nike from "./images/nikelogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="image">
          <img src={Nike} alt="logo" />
        </div>

        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* <button type="button">Login</button> */}
      </nav>
    </>
  );
};
export default Navbar;
