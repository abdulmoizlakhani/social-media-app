import React from "react";

const CardControl = props => {
  const {
    htmlType,
    ControlIcon,
    title,
    count,
    statusBgImg,
    controlIconType,
    controlTitleType,
    handleOnIconClick,
    onFileUploadChange
  } = props;

  const _renderControlType = () => {
    if (controlTitleType === "highlighted") {
      return <p className="card_footer_control_type--highlighted">{title}</p>;
    } else if (controlTitleType === "disabled") {
      return <p className="card_footer_control_type--disabled">{title}</p>;
    } else {
      return <p className="card_footer_control_type">{title}</p>;
    }
  };

  const _renderControlIcon = () => {
    if (controlIconType === "danger") {
      return (
        <ControlIcon className="card_footer_control_icon card_footer_control_icon--danger" />
      );
    } else if (controlIconType === "disabled") {
      return (
        <ControlIcon className="card_footer_control_icon card_footer_control_icon--disabled" />
      );
    } else if (controlIconType === "highlighted") {
      return (
        <ControlIcon className="card_footer_control_icon card_footer_control_icon--highlighted" />
      );
    } else {
      if (htmlType === "file") {
        return (
          <>
            <input
              type="file"
              className="control__type__file"
              onChange={onFileUploadChange}
              accept="image/*"
              value={statusBgImg}
            />
            <ControlIcon className="card_footer_control_icon" />
          </>
        );
      } else {
        return <ControlIcon className="card_footer_control_icon" />;
      }
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
