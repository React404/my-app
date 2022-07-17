import React, { Component } from "react";
class Nav extends Component {
  state = {};
  render() {
    return (
      <>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Tools
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">Call us</a>
          </li>
        </ul>
      </>
    );
  }
}

export default Nav;
