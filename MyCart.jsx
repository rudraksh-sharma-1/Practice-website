import React from "react";
import Button from "react-bootstrap/Button";
import cart from "./Images/Cart.jpg";

function MyCart() {
  return (
    <div className="my-cart">
      <img src={cart} alt="shoppping cart" />
      <h1>Your cart is empty</h1>
      <Button variant="dark" className="m-5" size="lg">
        Continue Shopping
      </Button>
      <h3>Have an account? </h3>
      <p>
        <a href="abc.html">Log in</a> to check out faster.
      </p>
    </div>
  );
}

export default MyCart;
