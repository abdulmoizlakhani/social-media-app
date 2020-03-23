import React from "react";
import Card from "../../components/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardContent from "../../components/Card/CardContent";
import CardFooter from "../../components/Card/CardFooter";
import CardControl from "../../components/Card/CardControl";
import CommentBox from "../../containers/CommentBox";
import {
  FaRegThumbsUp,
  FaThumbsUp,
  FaRegCommentDots,
  FaRegTrashAlt
} from "react-icons/fa";

const StatusCard = props => {
  const {
    data,
    commentText, 
    handleOnCommentChange,
    handleOnLikeIconClick,
    handleOnCommentIconClick,
    handleOnDeleteIconClick,
    handleOnCommentSendClick
  } = props;
  return (
    <Card cardContainerClass="card__shaded my7 py5 px4">
      <CardHeader
        showTime={true}
        showCardOptions={true}
        showPlace={true}
        showFriendsIcon={true}
        data={data}
      />
      <CardContent cardContentClass="my4 br2 px4 py5" data={data} />
      <CardFooter cardFooterClass="mt3">
        <CardControl
          ControlIcon={
            data["likes"].indexOf("user_1") !== -1 ? FaThumbsUp : FaRegThumbsUp
          }
          title={data["likes"].indexOf("user_1") !== -1 ? "Liked" : "Like"}
          count={data["likes"]["length"]}
          controlIconType={
            data["likes"].indexOf("user_1") !== -1 ? "highlighted" : ""
          }
          controlTitleType={
            data["likes"].indexOf("user_1") !== -1 ? "highlighted" : ""
          }
          handleOnIconClick={() => handleOnLikeIconClick(data["dataIndex"])}
        />
        <CardControl
          ControlIcon={FaRegCommentDots}
          title={"Comments"}
          count={data["comments"]["length"]}
          controlIconType={data["showComments"] ? "highlighted" : ""}
          controlTitleType={data["showComments"] ? "highlighted" : ""}
          handleOnIconClick={() => handleOnCommentIconClick(data["dataIndex"])}
        />
        <CardControl
          ControlIcon={FaRegTrashAlt}
          title={"Delete"}
          controlIconType="danger"
          handleOnIconClick={() => handleOnDeleteIconClick(data["postId"])}
        />
      </CardFooter>
      {data["showComments"] && (
        <CommentBox
          commentsList={data["comments"]}
          commentText={commentText}
          handleOnChange={handleOnCommentChange}
          handleOnClick={handleOnCommentSendClick}
        />
      )}
    </Card>
  );
};

export default StatusCard;
