import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ContactUs() {
  return (
    <>
      <h3 className="ms-5">Fill the Form to Contact Us</h3>
      <Form className="bg-secondary mb-2 mx-5 rounded" data-bs-theme="dark">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              label="Email address"
              className="mb-3 ms-2 mt-3 w-75 text-light"
            >
              <Form.Control type="email" placeholder="Enter email" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <FloatingLabel
              label="Password"
              className="mb-3 ms-2 mt-3 w-75 text-light"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <FloatingLabel
            label="Address"
            className="mb-3 ms-2 mt-2 w-75 text-light"
          >
            <Form.Control placeholder="1234 Main St" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <FloatingLabel
            label="Address 2"
            className="mb-3 ms-2 mt-2 w-75 text-light"
          >
            <Form.Control placeholder="Apartment, studio, or floor" />
          </FloatingLabel>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <FloatingLabel
              label="City"
              className="mb-3 ms-2 mt-2 w-75 text-light"
            >
              <Form.Control />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <FloatingLabel
              label="State"
              className="mb-3 ms-2 mt-2 w-75 text-light"
            >
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <FloatingLabel
              label="Zip"
              className="mb-3 ms-2 mt-2 w-75 text-light"
            >
              <Form.Control />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            className="ms-2 text-light"
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="ms-2 mt-2 mb-2">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactUs;
