import React from "react";
import Card from "../components/Cad/Cards";

export default function Home() {
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
    </div>
  );
}
