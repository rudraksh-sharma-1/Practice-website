import React, { useState, useEffect } from "react";
import "../style.css";
function Discover() {
  const [details, setDetails] = useState([]);
  const fetchData = async () => {
    let a = await fetch("https://dummyjson.com/products");
    let json = await a.json();
    setDetails(json.products);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    /* Main Div */
    <div className="Discover-box bg-dark">
      {/* Heading */}
      <h1 className="text-light m-auto mt-2">Some More Products</h1>
      {details.map((val) => (
        <>
          {/* Left Side Div */}
          <div data-aos="fade-up-right" className="left-sight-box">
            <section className="text-section">
              <h5>{val.title}</h5>
              <p className="text-light">{val.description}</p>
            </section>
            <section className="left-side-img-section">
              <img src={val.images} alt={val.title} />
            </section>
          </div>

          {/* Right Side Div */}
          <div data-aos="fade-up-left" className="right-sight-box">
            <section className="right-side-img-section">
              <img src={val.images[1]} alt={val.title} />
            </section>
            <section className="text-section">
              <h5>{val.title}</h5>
              <p className="text-light">{val.description}</p>
            </section>
          </div>
        </>
      ))}
    </div>
  );
}

export default Discover;
