import React from "react";
import { Button } from "react-bootstrap";
import "./card-style.css";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push(props.value);
  }

  return (
    <div className="card text-center cardUi-card">
      <div className="overflow cardUi-overflow">
        <img
          src={props.imgsrc}
          className="card-img-top cardUi-img cardUi-card-img-top"
        />
      </div>

      <div className="card-body text-dark cardUi-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary cardUi-card-text">
          This art piece is a master piece of art
        </p>
        <Button variant="outline-dark" size="lg" onClick={handleClick}>
          {" "}
          Purchase
        </Button>
        {/* <a href="#" className="btn btn-outline-success">Purchase $$</a> */}
      </div>
    </div>
  );
};

export default Card;
