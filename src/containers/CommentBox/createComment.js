import React from "react";
import CardHeader from "../../components/Card/CardHeader";
import Button from "../../components/Button";
import StatusEditor from "../../containers/StatusEditor";
import { MdSend } from "react-icons/md";

const createComment = props => {
  const { commentText, handleOnChange, handleOnClick } = props;
  return (
    <div className="comment_box__create pb3">
      <CardHeader
        type="small"
        cardHeaderClass="mt3"
        showTime={false}
        showCardOptions={false}
        showPlace={false}
        showFriendsIcon={false}
      />
      <StatusEditor
        statusText={commentText}
        statusEditorClass="mt4"
        onChange={handleOnChange}
      />
      <Button
        buttonContainerClass="button--flat mt3"
        disabled={!commentText}
        BtnIcon={MdSend}
        btnText={"Send"}
        onClick={handleOnClick}
      />
    </div>
  );
};

export default createComment;
