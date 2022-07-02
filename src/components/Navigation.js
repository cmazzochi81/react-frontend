import React from "react";
import { NavLink, useLocation } from "react-router-dom";
export const Navigation = () => {
  const location = useLocation();

  function removeActiveHome() {
    const heading = document.querySelector(".heading").innerText;
    if (heading === "Welcome to My Full Stack React Demo") {
      console.log("True that baby : " + heading);
    }
    document.querySelector("#homeLink").classList.remove("active");
  }

  function addActiveHome() {
    console.log(location.pathname);
    document.querySelector("#homeLink").classList.add("active");
  }

  function loadGoogleButton(e) {
    e.preventDefault();
    removeActiveHome();
    console.log("Testing loadGoogleButton function");
    window.location.href = "/login";
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink id="homeLink" exact to="/" onClick={addActiveHome}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={removeActiveHome}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={removeActiveHome}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={loadGoogleButton}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
