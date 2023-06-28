import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <footer>
      <p>Powered by</p>
      <img src={"./images/DH.png"} alt="DH-logo" />
      <img src={"./images/ico-facebook.png"} alt="ico-facebook" />
      <img src={"./images/ico-instagram.png"} alt="ico-instagram" />
      <img src={"./images/ico-whatsapp.png"} alt="ico-whatsapp" />
      <img src={"./images/ico-tiktok.png"} alt="ico-tiktok" />
      <button onClick={goBack} className="myButton">Atras</button>
    </footer>
  );
};

export default Footer;
