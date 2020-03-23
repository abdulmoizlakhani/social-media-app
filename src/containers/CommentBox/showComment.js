import React from "react";
import CardHeader from "../../components/Card/CardHeader";

const ShowComment = ({ data }) => {
  return (
    <div className="comment_box mb5">
      <CardHeader
        type="small"
        cardHeaderClass="mt3"
        showTime={true}
        showCardOptions={false}
        showPlace={false}
        showFriendsIcon={false}
        data={data}
      />
      <p className="comment__content mt2 pl10">{data["comment"]}</p>
    </div>
  );
};

export default ShowComment;
