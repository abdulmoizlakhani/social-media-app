import React from "react";
import CreateComment from "./createComment";
import ShowComment from "./showComment";

const CommentBox = props => {
  const { commentsList, commentText, handleOnChange, handleOnClick } = props;

  return (
    <div className="comment_box__container mt5">
      <CreateComment
        commentText={commentText}
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
      />
      {commentsList &&
        commentsList
          .sort((a, b) => {
            if (a["createdTimestamp"] > b["createdTimestamp"]) return -1;
            if (a["createdTimestamp"] < b["createdTimestamp"]) return 1;
            else return 0;
          })
          .map((comment, i) => (
            <ShowComment key={`show_comment_${i}`} data={comment} />
          ))}
    </div>
  );
};

export default CommentBox;
