import React from "react";
import Card from "../../components/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardContent from "../../components/Card/CardContent";
import CardFooter from "../../components/Card/CardFooter";
import CardControl from "../../components/Card/CardControl";
import { FaRegThumbsUp, FaRegCommentDots, FaRegTrashAlt } from "react-icons/fa";

const StatusCard = props => {
  const {
    data,
    handleOnLikeIconClick,
    handleOnCommentIconClick,
    handleOnDeleteIconClick
  } = props;
  return (
    <Card cardContainerClass="card__shaded my7 py5 px4">
      <CardHeader showTime={true} showCardOptions={true} data={data} />
      <CardContent data={data} />
      <CardFooter cardFooterClass="mt3">
        <CardControl
          ControlIcon={FaRegThumbsUp}
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
          title={"Comment"}
          count={data["comments"]["length"]}
          handleOnIconClick={handleOnCommentIconClick}
        />
        <CardControl
          ControlIcon={FaRegTrashAlt}
          title={"Delete"}
          controlIconType="danger"
          handleOnIconClick={() => handleOnDeleteIconClick(data["postId"])}
        />
      </CardFooter>
    </Card>
  );
};

export default StatusCard;
