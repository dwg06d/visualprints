import React from "react";
import Card from "../components/Cad/Cards";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Home-Style.css"; 

export default function Home() {
    const history = useHistory(); 

    function handleClick(){
      history.push("/store");
    }

  return (
    <div>
      <br/>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
        }}
      >
        Super Awesome Prints
      </h1>
      <h4
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems: "center"
        }}
      >
        something something intro to our shop
      </h4>
      <hr/>
      <br/>
      <Card/>
      <br/>
      <div className="home-btn">
      <Button
        className="btn-btn"
        variant ="dark"
        size="lg"
        onClick={handleClick}
        > 
        View Our Catalog
        </Button>
      </div>
    </div>
  );
}
