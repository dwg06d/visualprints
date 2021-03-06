import React, { Component } from "react";
import "./products.css";
import data from "../../resources/json/ProductList.json";

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
    let mediaName;

    switch (this.state.media) {
      case "gloss-photo":
        mediaName = "Gloss Photo";
        break;
      case "matte-photo":
        mediaName = "Matte Photo";
        break;
      case "hot-press":
        mediaName = "Hot Press Paper";
        break;
      case "cold-press":
        mediaName = "Cold Press Paper";
        break;
      case "alum-composite":
        mediaName = "Aluminum Composite";
        break;
      case "acrylic":
        mediaName = "Acrylic";
        break;
    }

    switch (this.state.media) {
      case "":
        selectionElement = (
          <div>
            <h3>Please select media.</h3>
          </div>
        );
        break;
      case "gloss-photo":
      case "matte-photo":
      case "hot-press":
      case "cold-press":
        selectionElement = (
          <div>
            <h3>{mediaName}</h3>
            <label for="size-select">Select Size:</label>
            <select name="size" id="size-select">
              <option value="" />
              <option value="4x6">4x6</option>
              <option value="5x7">5x7</option>
              <option value="8x10">8x10</option>
              <option value="11x14">11x14</option>
              <option value="18x24">18x24</option>
              <option value="24x36">24x36</option>
            </select>
            <br />
            <label for="quantiy">Quantity:</label>
            <input type="number" id="quantity" defaultValue="0" />
            <br />
            <button className="btn btn-success">Add to Cart</button>
          </div>
        );
        break;
      case "alum-composite":
      case "acrylic":
        selectionElement = (
          <div>
            <h3>{mediaName}</h3>
            <label for="size-select">Select Size:</label>
            <select name="size" id="size-select">
              <option value="" />
              <option value="12x18">12x18</option>
              <option value="18x24">18x24</option>
            </select>
            <br />
            <label for="quantiy">Quantity:</label>
            <input type="number" id="quantity" defaultValue="0" />
            <br />
            <p>Finishing options:</p>
            <div>
              <input type="radio" id="hanger" name="finishing" value="hanger" />
              <label for="id">Ready to hang.</label>
            </div>
            <div>
              <input
                type="radio"
                id="stand-off"
                name="finishing"
                value="stand-off"
              />
              <label for="id">Stand-offs (4 corners)</label>
            </div>
            <div>
              <input type="radio" id="none" name="finishing" value="none" />
              <label for="id">None</label>
            </div>
            <br />
            <button className="btn btn-success">Add to Cart</button>
          </div>
        );
    }

    const product = data.products.find((p) => p.id == this.props.id);

    return (
      <div className="container" id="product-container">
        {/* <h1>{this.props.id}</h1> */}
        <div className="row">
          <div className="col">
            <img
              src={`/img/${product.img}`}
              alt="Image"
              className="img-fluid"
              id="product-img"
            />
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <h5 className="card-subtitle">{product.artist}</h5>
                <p className="card-text">{product.desc}</p>
                <h5 className="text-muted">Price: ${product.price}</h5>
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
                <option value="" />
                <optgroup label="Paper">
                  <option value="gloss-photo" label="Glossy Photo" />
                  <option value="matte-photo" label="Matte Photo" />
                  <option value="hot-press" label="Hot Press Paper" />
                  <option value="cold-press" label="Cold Press Paper" />
                </optgroup>
                <optgroup label="Rigid Substrate">
                  <option value="alum-composite" label="Aluminum Composite" />
                  <option value="acrylic" label="Acrylic" />
                </optgroup>
              </select>
            </div>
          </div>
          <div className="col">{selectionElement}</div>
        </div>
      </div>
    );
  }
}
