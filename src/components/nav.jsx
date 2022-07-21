import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class Nav extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 p-2">
          <Link className="navbar-brand" to="/">
            Admin
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <NavLink className=" nav-item nav-link" to="">
                Movies
              </NavLink>
              <NavLink className="nav-item nav-link" to="">
                Customer
              </NavLink>
              <NavLink className="nav-item nav-link" to="">
                Rentals
              </NavLink>
              <NavLink className="nav-item nav-link" to="">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="">
                Register
              </NavLink>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
