/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../Button";
import Card from "../Card";
import PropTypes from "prop-types";

const Yes = () => {
  return <div>Yeah</div>;
};
const No = () => {
  return <div>Nope</div>;
};
const Student = (props) => {
  return (
    <div className="font-semibold p-[10px] border-[3px] w-[20rem]">
      <p className="p-0 m-0">Name: {props.nama}</p>
      <p className="p-0 m-0">Age: {props.age}</p>
      <p className="m-0 p-0 flex">
        Student: &nbsp;{props.isStudent ? <Yes /> : <No />}
      </p>
    </div>
  );
};
Student.propTypers = {
  nama: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  nama: "Guest",
  age: 0,
  isStudent: false,
};
export default Student;
