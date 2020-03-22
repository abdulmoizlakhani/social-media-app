import React from "react";
import Card from "../../components/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardFooter from "../../components/Card/CardFooter";
import CardControl from "../../components/Card/CardControl";
import Button from "../../components/Button";
import StatusEditor from "../StatusEditor";
import { FaRegImages } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const CreateStatusCard = props => {
  const { handleOnClick, handleOnChange, statusText } = props;

  return (
    <Card cardContainerClass="card__filled-grey br3 py5 px4">
      <CardHeader />
      <StatusEditor
        statusText={statusText}
        statusEditorClass="mt6"
        onChange={handleOnChange}
      />
      <CardFooter cardFooterClass="mt6">
        <CardControl ControlIcon={FaRegImages} title={"Photo"} />
        <Button BtnIcon={MdSend} btnText={"Post"} onClick={handleOnClick} />
      </CardFooter>
    </Card>
  );
};

export default CreateStatusCard;
