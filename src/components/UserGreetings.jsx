/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const UserGreetings = (props) => {
  if (props.isLoggedIn) {
    return (
      <h2 className="font-semibold text-[2rem] w-[30%] bg-slate-600">
        Welcome {props.username}
      </h2>
    );
  } else {
    return (
      <h2 className="font-bold text-[2rem] bg-red-800 w-[30%]">
        Please log in to continue
      </h2>
    );
  }
};
UserGreetings.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreetings;
