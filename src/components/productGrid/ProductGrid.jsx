import React from "react";
import { products } from "../../resources/json/ProductList.json";
import { Link } from "react-router-dom";

export default function ProductGrid() {
	return (
		<div>
			<h1>Product Grid</h1>
			<div>
				{products.map((data, key) => {
          // const photo = require(`/img/austin-with-stars.jpg`).default;

					return (
						<div key={key}>
							<Link to={`/products/${data.id}`} className="">
								<div className="card">
									<img
										className="card-img-top"
										src={`/img/${data.img}`}
										alt={data.title}
									/>
									<div className="card-body">
										<h5 className="card-title">
											{data.title}
										</h5>
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
