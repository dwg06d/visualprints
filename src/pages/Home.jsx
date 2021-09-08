import React from "react";
import Button from "react-bootstrap/Button";
import Card from "../components/Cad/Cards";

export default function Home() {
  return (
    <div>
        

      <h1 >Home Page</h1>
      <Card/>
      <div>
        <Button variant="dark">Dark</Button>{" "}
      </div>
    </div>
  );
}
