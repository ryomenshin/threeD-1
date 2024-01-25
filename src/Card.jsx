/* eslint-disable no-unused-vars */
import React from "react";
import photo from "../public/img/rmn.jpg";

const Card = () => {
  return (
    <>
      <div className="card">
        <img width="150" src="../public/img/rmn.jpg" alt="photo product" className="product-img"/>
        {/* <img width="150" src={photo} alt="photo product" /> */}
        <h2>Ramen</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam
          similique, expedita nulla maiores in.
        </p>
      </div>
    </>
  );
};

export default Card;
