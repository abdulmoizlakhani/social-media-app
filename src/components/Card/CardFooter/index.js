import React from "react";

const CardFooter = props => (
  <div className={`card_footer ${props["cardFooterClass"]}`}>{props.children}</div>
);

export default CardFooter