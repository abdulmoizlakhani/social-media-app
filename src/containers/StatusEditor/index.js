import React from "react";

const StatusEditor = props => {
  const { statusText, onChange } = props;
  return (
    <div className={`status__editor__container ${props["statusEditorClass"]}`}>
      <textarea
        className="status__editor"
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        value={statusText}
        onChange={onChange}
      />
    </div>
  );
};

export default StatusEditor;
