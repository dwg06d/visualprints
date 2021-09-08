import React from "react";
import Button from "react-bootstrap/Button";
import { Card,CardGroup } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      

      <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Filler incase we wanted to add info to the photographs  
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            Filler incase we wanted to add info to the photographs {" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            Filler incase we wanted to add info to the photographs 
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>

      <div>
        <Button variant="dark">Dark</Button>{" "}
      </div>
    </div>
  );
}
