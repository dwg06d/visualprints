import React from "react";
import { products } from "../../resources/json/ProductList.json";
import { Link } from "react-router-dom";
import "./productgrid.css";

export default function ProductGrid() {
  return (
    <div className="container">
      <h1>Product Grid</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
      <div>
        {products.map((data, key) => {
          // const photo = require(`/img/austin-with-stars.jpg`).default/*  */;

          return (
            <div key={key}>
              <Link
                to={`/products/${data.id}`}
                className=""
                id="product-grid-link"
              >
                <div className="card">
                  <img
                    className="card-img-top img-fluid"
                    src={`/img/${data.img}`}
                    alt={data.title}
                    id="product-grid-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-subtitle">{data.artist}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
