/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  //   const meals = [
  //     { name: "Noodle", calories: 86 },
  //     { name: "Fried Rice", calories: 89 },
  //     { name: "Pizza", calories: 101 },
  //     { name: "Shrimp", calories: 78 },
  //     { name: "Steak", calories: 143 },
  //   ];
  //   meals.sort((a, b) => a.name.localeCompare(b.name));
  // meals.sort((a, b) => a.calories - b.calories); // Numeric Order
  // eals.sort((a, b) => b.calories - a.calories); // Numeric Order

  //   const lowCalMeals = meals.filter((meals) => meals.calories <= 100);
  //   const highCalMeals = meals.filter((meals) => meals.calories >= 100);
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((itm) => (
    <li key={itm.id}>
      {itm.name}:&nbsp;<b>{itm.calories}</b>
    </li>
  ));

  return (
    <>
      <h2 className="text-[24px]">{category}</h2>
      <br />
      <ol className="mb-[12px]">{listItems}</ol>
    </>
  );
};
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
