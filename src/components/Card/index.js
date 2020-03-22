import React from "react";

const Card = props => (
  <div className={`card ${props["cardContainerClass"]}`}>{props.children}</div>
);

export default Card;