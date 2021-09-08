import React, { Component } from "react";
import "./products.css"

export default class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			media: "",
		};
	}

	handleChange(e) {
		this.setState({ media: e.target.value });
	}

	render() {
		let selectionElement;

		switch (this.state.media) {
			case "":
				selectionElement = (
					<div>
						<h3>Please select media.</h3>
					</div>
				);
				break;
			case "gloss-photo":
				selectionElement = (
					<div>
						<h3>Glossy Photo:</h3>
						<label for="size-select">Select Size:</label>
						<select name="size" id="size-select">
							<option value=""></option>
							<option value="4x6">4x6</option>
							<option value="5x7">5x7</option>
							<option value="8x10">8x10</option>
							<option value="11x14">11x14</option>
							<option value="18x24">18x24</option>
							<option value="24x36">24x36</option>
						</select>
						<br/>
						<label for="quantiy">Quantity:</label>
						<input type="number" id="quantity" value="0"></input>
						<br/>
						<button className="btn btn-success">Add to Cart</button>
					</div>
				);
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<img src="https://i.stack.imgur.com/y9DpT.jpg" />
					</div>
					<div className="col">
						<div className="card">
							<div className="card-body">
								<h3 className="card-title">Photo title</h3>
								<h5 className="card-subtitle">
									Photographer name
								</h5>
								<p className="card-text">Photo description</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h3>Order Now:</h3>
						<div
							className="media-selection"
							onChange={this.handleChange.bind(this)}
						>
							<label for="media-select">Select Media:</label>
							<select name="media" id="media-select">
								<option value=""></option>
								<option value="gloss-photo">
									Glossy Photo
								</option>
								<option value="matte-photo">Matte Photo</option>
								<option value="hot-press">
									Hot Press Paper
								</option>
								<option value="cold-press">
									Cold Press Paper
								</option>
								<option value="alum-composite">
									Aluminum Composite
								</option>
								<option value="acrylic">Acrylic</option>
							</select>
						</div>
					</div>
					<div className="col">{selectionElement}</div>
				</div>
			</div>
		);
	}
}
