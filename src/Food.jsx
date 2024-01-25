/* eslint-disable no-unused-vars */
import React from "react";

const Food = () => {
  const food1 = "Ramen";
  const food2 = "Gyoza";
  return (
    <>
      <ul>
        <li>Pizza</li>
        <li>{`${food1.toUpperCase()}`}</li>
        <li>{food2}</li>
      </ul>
    </>
  );
};

export default Food;
