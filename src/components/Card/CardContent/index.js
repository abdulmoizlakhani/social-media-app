import React from "react";

const CardContent = props => {
  const { data } = props;
  return (
    <div className="card_content">
      <p className="card_text">{data["content"]}</p>
    </div>
  );
};

export default CardContent;
