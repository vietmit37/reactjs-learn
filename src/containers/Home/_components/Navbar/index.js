import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "myActive nav-link" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "myActive nav-link" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "myActive nav-link" : "nav-link"
                }
                to="/list-movie"
              >
                List Movie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "myActive nav-link" : "nav-link"
                }
                to="/hook"
              >
                Hook
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "myActive nav-link" : "nav-link"
                }
                to="/hoc"
              >
                HOC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "myActive nav-link" : "nav-link"
                }
                to="/spring"
              >
                React useSpring
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
