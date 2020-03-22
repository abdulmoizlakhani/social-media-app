import React from "react";
import Card from "../../components/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardFooter from "../../components/Card/CardFooter";
import CardControl from "../../components/Card/CardControl";
import Button from "../../components/Button";
import ShowUploadedImage from "../../components/ShowUploadedImage";
import StatusEditor from "../StatusEditor";
import { FaRegImages } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const CreateStatusCard = props => {
  const {
    handleOnClick,
    handleOnChange,
    statusText,
    statusBgImg,
    onFileUploadChange
  } = props;

  return (
    <Card cardContainerClass="card__filled-grey br3 py5 px4">
      <CardHeader />
      <StatusEditor
        statusText={statusText}
        statusEditorClass="mt6"
        onChange={handleOnChange}
      />
      <CardFooter cardFooterClass="mt6">
        <CardControl
          htmlType="file"
          ControlIcon={FaRegImages}
          statusBgImg={statusBgImg}
          title={"Photo"}
          controlTitleType={statusBgImg ? "disabled" : ""}
          controlIconType={statusBgImg ? "disabled" : ""}
          onFileUploadChange={onFileUploadChange}
        />
        <Button
          disabled={!statusText}
          BtnIcon={MdSend}
          btnText={"Post"}
          onClick={handleOnClick}
        />
      </CardFooter>
      {statusBgImg ? <ShowUploadedImage imgUrl={statusBgImg} /> : null}
    </Card>
  );
};

export default CreateStatusCard;
