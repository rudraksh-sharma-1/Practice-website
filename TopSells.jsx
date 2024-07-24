import React from "react";
import Card from "react-bootstrap/Card";
import Card1 from "../Images/Card-1.jpg";
import Card2 from "../Images/Card-2.jpg";
import Card3 from "../Images/Card-3.jpg";
import Card4 from "../Images/Card-4.jpg";
import { Button } from "react-bootstrap";
import "../style.css";

function TopSells() {
  return (
    <>
      <div className="mx-4  mt-4 bg-dark text-light">
        <h1 className="ps-1">TOP SELLERS THIS WEEK</h1>
      </div>
      <div className="d-flex justify-content-evenly my-4 flex-md-wrap flex-wrap">
        <Card
          style={{ width: "18rem" }}
          className="d-flex flex-column align-items-center my-2"
        >
          <Card.Img variant="top" src={Card1} className="cards my-2" />
          <Card.Body>
            <Card.Title>DAFFI</Card.Title>
            <Card.Text>
              Crafted to Infuse Your surroundings with Tranquility, This
              Luxurious Candle boasts The Warm, Unwind After a Long...
            </Card.Text>
            <Button variant="secondary">Shop Now</Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex flex-column align-items-center my-2"
        >
          <Card.Img variant="top" src={Card2} className="cards my-2" />
          <Card.Body>
            <Card.Title>MINISO</Card.Title>
            <Card.Text>
              MINISO Scented Candles Home Wax Scented Candle Aroma Decoration
              Candles Gift for Home Decor-Fabulous Day,Pink...
            </Card.Text>
            <Button variant="secondary">Shop Now</Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex flex-column align-items-center my-2"
        >
          <Card.Img variant="top" src={Card3} className="cards my-2" />
          <Card.Body>
            <Card.Title>Aromahpure</Card.Title>
            <Card.Text>
              Aromahpure Scented Candle (45 hrs) (100% Soy Wax)- Handcrafted |
              Smoke-Free | Joyful Lavender- Lavender...
            </Card.Text>
            <Button variant="secondary">Shop Now</Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex flex-column align-items-center my-2"
        >
          <Card.Img variant="top" src={Card4} className="cards" />
          <Card.Body>
            <Card.Title className="mt-3">PROSPERRO LUMO</Card.Title>
            <Card.Text>
              PROSPERRO LUMO Paraffin Wax By Parkash Candle Set of 3 Fragrance
              Pillar Candles Marble Finish (Lavender Fragrance)
            </Card.Text>
            <Button variant="secondary">Shop Now</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default TopSells;
