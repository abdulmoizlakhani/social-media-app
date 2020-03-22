import React from "react";

const Button = props => {
  const { BtnIcon, btnText, onClick, disabled } = props;

  return (
    <div
      className={`button ${props["buttonContainerClass"]} ${
        disabled ? "button--disabled" : ""
      }`}
      onClick={!disabled ? onClick : null}
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
