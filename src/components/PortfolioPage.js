import React from "react";

const PortfolioPage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>A thing I've done</h2>
      <p>This page is for portfolio with id of {props.match.params.id}</p>
    </div>
  );
};

export default PortfolioPage;
