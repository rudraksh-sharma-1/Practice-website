import React from "react";
import Card from "react-bootstrap/Card";
import Card5 from "../Images/Card-5.jpg";
import Card6 from "../Images/Card-6.jpg";
import Card7 from "../Images/Card-7.jpg";
import Card8 from "../Images/Card-8.jpg";
import { Button } from "react-bootstrap";

function Under() {
  return (
    <>
      <div className="mx-4  mt-4 bg-dark text-light">
        <h1 className="ps-1">UNDER $199</h1>
      </div>
      <div className="d-flex justify-content-evenly my-4  flex-md-wrap flex-wrap">
        <Card
          style={{ width: "18rem" }}
          className="d-flex flex-column align-items-center my-2"
        >
          <Card.Img variant="top" src={Card5} className="under" />
          <Card.Body>
            <Card.Title>Generic</Card.Title>
            <Card.Text>
              Aster Luxfeel Scented 100% Natural Soy Candle, 80 gm| Luxury Aroma
              Therapy Votive Jar...
            </Card.Text>
            <Button variant="secondary">Shop Now</Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex flex-column align-items-center my-2"
        >
          <Card.Img variant="top" src={Card6} className="under" />
          <Card.Body>
            <Card.Title>Kaameri Bazaar</Card.Title>
            <Card.Text>
              Kaameri Bazaar Lavender Fields Highly Fragranced Glass jar Candle
              - Gift...
            </Card.Text>
            <Button variant="secondary">Shop Now</Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex flex-column align-items-center my-2"
        >
          <Card.Img variant="top" src={Card7} className="under" />
          <Card.Body>
            <Card.Title>Jivisa</Card.Title>
            <Card.Text>
              Jivisa Natural Handmade Aromatherapy Essential-Oil Premium Scented
              Soy Wax Candle...
            </Card.Text>
            <Button variant="secondary">Shop Now</Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex flex-column align-items-center my-2"
        >
          <Card.Img variant="top" src={Card8} className="under" />
          <Card.Body>
            <Card.Title>Aromahpure</Card.Title>
            <Card.Text>
              Aromahpure Valentine’s Scented Candles Gift Set for Girlfriend &
              Boyfriend|Midnight Romance ...
            </Card.Text>
            <Button variant="secondary">Shop Now</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Under;
