import React from 'react'
import {products} from '../../resources/json/ProductList.json'
import { Link } from 'react-router-dom';
import "./ProductGrid.css"; 

export default function ProductGrid() {
    return (
        <div>
            <div>

          {products.map((data, key) => {

            return (
              <div key={key}>
                <Link to="/products/1456" className="">
                <div className="card">
                    <img className="card-img-top" src={data.img} alt={data.title} />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                </div>
                </div>
                </Link>
              </div>
            )
          })}
        </div>
        </div>
    )
}
