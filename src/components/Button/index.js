import React from "react";

const Button = props => {
  const { BtnIcon, btnText, onClick } = props;

  return (
    <div
      className={`button ${props["buttonContainerClass"]}`}
      onClick={onClick}
    >
      <div className="button__text__container">
        <p className="button__text">{btnText}</p>
      </div>
      <div className="button__icon__container">
        <BtnIcon className="button__icon" />
      </div>
    </div>
  );
};

export default Button;
