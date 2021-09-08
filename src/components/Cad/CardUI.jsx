import React from "react";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src="holder.js/100px160" alt="" />
      </div>

      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere
          sapiente natus soluta omnis repellendus possimus. Accusamus ipsum
          perferendis eligendi?
        </p>
        <a href="#" className="btn btn-outline-success">Go anywhere</a>
      </div>
    </div>
  );
};

export default Card;
