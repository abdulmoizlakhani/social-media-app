import React from "react";

const CardContent = props => {
  const { data } = props;
  return (
    <div
      className={`card_content ${props["cardContentClass"]}`}
      style={{ backgroundImage: `url(${data["backgroundImgUrl"]})` }}
    >
      <p className="card_text">{data["content"]}</p>
    </div>
  );
};

export default CardContent;
