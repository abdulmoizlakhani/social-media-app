import React from "react";

const ShowUploadedImage = ({ imgUrl }) => {
  return (
    <div className="upload__img__container br2 mt4">
      <img className="upload__img" src={imgUrl} alt="uploaded background" />
    </div>
  );
};

export default ShowUploadedImage;
