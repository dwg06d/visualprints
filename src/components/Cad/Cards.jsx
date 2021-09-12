import React, { Component } from "react";
import Card from "./CardUI";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card
              imgsrc="img/austin-with-stars.jpg"
              title={"#1"}
              value={"/products/3425"}
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc="/img/chevron-16x20ffffff.jpg"
              title={"#2"}
              value={"/products/2345"}
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc="/img/twurz_20090712_0246.jpg"
              title={"#3"}
              value={"/products/5767"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
