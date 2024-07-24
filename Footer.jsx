import React from "react";
import "../style.css";
import Logo1 from "../Images/Footer-Logo-1.webp";
import Logo2 from "../Images/Footer-Logo-2.png";
import Logo3 from "../Images/Footer-Logo-3.webp";

function Footer(props) {
  return (
    <div className="Footer bg-dark">
      <div className="linkbox">
        <a href="mailto:rudraksh2233rr@gmail.com">
          <img src={Logo1} alt="Mail" className="footerimg" />
        </a>
        <a href="tel:7678622102">
          <img src={Logo2} alt="Phone" className="footerimg" />
        </a>
        <a href="whatsapp:contact=7678622102@s.whatsapp.com&message=I'd like to chat with you">
          <img src={Logo3} alt="WhatsApp" className="footerimg" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
