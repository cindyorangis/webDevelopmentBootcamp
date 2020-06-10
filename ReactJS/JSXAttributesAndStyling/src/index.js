import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false">
      My Favourite Foods
    </h1>
    <img src={img + "?grayscale"} alt="random"></img>
    <div>
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ul>
      <img
        className="food-img"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg"
        alt="bacon"
      ></img>
      <img
        className="food-img"
        src="https://consorcioserrano.es/wp-content/uploads/2017/10/sabor-aroma-central.jpg"
        alt="ham"
      ></img>
      <img
        className="food-img"
        src="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodles-1-600x900.jpg"
        alt="noodles"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
