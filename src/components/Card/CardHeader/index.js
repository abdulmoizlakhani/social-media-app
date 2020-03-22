import React from "react";
import TimeAgo from "react-timeago";
import { FaUser, FaUserFriends, FaEllipsisV } from "react-icons/fa";

const CardHeader = props => {
  const { showTime, showCardOptions, data } = props;

  return (
    <div className="card__header">
      <div className="user_info_container">
        <div className="user__avatar_container">
          <div className="user__avatar_box">
            <FaUser className="user__avatar--placeholder" />
          </div>
        </div>
        <div className="user__intro_container">
          <h2 className="user__name">Abdul Moiz</h2>
          <div className="ch__post_info_container">
            <p className="ch__post_info">
              {showTime && (
                <>
                  <span className="ch__post_info__timestamp">
                    <TimeAgo date={data["createdTimestamp"]} />
                  </span>
                  <span className="space-dash">-</span>
                </>
              )}
              <span className="ch__post_info__place">Lorem</span>
              <FaUserFriends className="ch__post_info__user_friends_icon" />
            </p>
          </div>
        </div>
      </div>

      {showCardOptions && (
        <div className="card__options_container">
          <FaEllipsisV className="card__options_icon" />
        </div>
      )}
    </div>
  );
};

export default CardHeader;
