import React from "react";

const Filter = ({ clicked, filter, name }) => {
  return <button onClick={filter}>{name}</button>;
};

export default Filter;
