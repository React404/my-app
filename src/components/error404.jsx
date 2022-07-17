import React, { Component } from "react";
import "./error.css";
import Background from "../img/Error404.svg";

class Error extends Component {
  render() {
    return (
      <>
        <div className="container ">
          <div className="item-2">
            <img src={Background} alt="" />
          </div>
          <div className="item-1">
            <h1>
              Error 404 <br></br>page not found {"😵"}
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default Error;
