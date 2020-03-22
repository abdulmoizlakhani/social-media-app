import React from "react";

const CardControl = props => {
  const {
    ControlIcon,
    title,
    count,
    controlIconType,
    controlTitleType,
    handleOnIconClick
  } = props;

  const _renderControlType = () => {
    if (controlTitleType === "highlighted") {
      return <p className="card_footer_control_type--highlighted">{title}</p>;
    } else {
      return <p className="card_footer_control_type">{title}</p>;
    }
  };

  const _renderControlIcon = () => {
    if (controlIconType === "danger") {
      return (
        <ControlIcon className="card_footer_control_icon card_footer_control_icon--danger" />
      );
    } else if (controlIconType === "highlighted") {
      return (
        <ControlIcon className="card_footer_control_icon card_footer_control_icon--highlighted" />
      );
    } else {
      return <ControlIcon className="card_footer_control_icon" />;
    }
  };

  return (
    <div className="card_footer_control" onClick={handleOnIconClick}>
      <div className="card_footer_control_icon_contianer">
        {_renderControlIcon()}
      </div>
      <div className="card_footer_control_type_container">
        {_renderControlType()}
        <p className="card_footer_control_count">{count}</p>
      </div>
    </div>
  );
};

export default CardControl;
