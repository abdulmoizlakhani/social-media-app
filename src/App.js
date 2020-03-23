import React, { useState } from "react";
import AppHeader from "./containers/AppHeader";
import CreateStatusCard from "./containers/CreateStatusCard";
import StatusCard from "./containers/StatusCard";
import { generateRandomId, getBase64 } from "./helpers";

const dummyData = [
  {
    postId: generateRandomId(),
    createdTimestamp: new Date().getTime(),
    content: `Lorem Ipsum è un testo segnaposto utilizzato nel`,
    likes: ["user_1"],
    comments: [],
    showComments: false,
    backgroundImgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi_TA7_-UJfdD2VvZe73h5eenhfPxII0fDUyweRHHxJtRyVSaA"
  },
  {
    postId: generateRandomId(),
    createdTimestamp: new Date().getTime(),
    content: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo.`,
    likes: ["user_2", "user_3", "user_1"],
    showComments: false,
    comments: [
      {
        comment: "Very Nice, keep it up!",
        commentBy: {
          userId: "user_2",
          userName: "Jack Mike",
        },
        createdTimestamp: new Date().getTime()
      },
      {
        comment: "Very Nice, keep it up!",
        commentBy: {
          userId: "user_3",
          userName: "John Doe",
        },
        createdTimestamp: new Date().getTime()
      }
    ],
    backgroundImgUrl:
      "https://lh3.googleusercontent.com/proxy/m0LpVizaG-oPQbwXz8tO9DwMcPdzW-TNHnBc7iWWO9sjBnf6gubwVeBNfxAuZqzMWun2KQbPURCQ7v2l3n0f2i4dbvUwQ9iAFn9TZ7z0xUd-sRZt8FyStSoAle-MhWTk"
  },
  {
    postId: generateRandomId(),
    createdTimestamp: new Date().getTime(),
    content: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo.`,
    likes: ["user_3", "user_2"],
    showComments: false,
    comments: [
      {
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        commentBy: {
          userId: "user_3",
          userName: "John Doe"
        },
        createdTimestamp: new Date().getTime()
      },
      {
        comment: "Very Nice, keep it up!",
        commentBy: {
          userId: "user_2",
          userName: "Jack Mike"
        },
        createdTimestamp: new Date().getTime()
      },
      {
        comment: "Very Nice, keep it up!",
        commentBy: {
          userId: "user_1",
          userName: "Abdul Moiz"
        },
        createdTimestamp: new Date().getTime()
      }
    ],
    backgroundImgUrl:
      "https://www.onlygfx.com/wp-content/uploads/2018/08/9-watercolor-holographic-effect-background-4-1024x718.jpg"
  }
];

const App = () => {
  const [statusText, updateStatusText] = useState("");
  const [newComments, updateNewComments] = useState({});
  const [statusBgImg, updateStatusBgImg] = useState("");
  const [posts, updatePosts] = useState([...dummyData]);

  const addNewPost = () => {
    updatePosts([
      ...posts,
      {
        postId: generateRandomId(),
        createdTimestamp: new Date().getTime(),
        content: statusText,
        showComments: false,
        likes: [],
        comments: [],
        postedBy: "user_1",
        backgroundImgUrl: statusBgImg
      }
    ]);
    updateStatusText("");
    updateStatusBgImg("");
  };

  const handleOnCommentSendClick = (postId, postKey) => {
    let updatedPosts = [...posts];
    updatedPosts[postKey]["comments"] = [
      ...updatedPosts[postKey]["comments"],
      {
        comment: newComments[postId]["comment"],
        commentBy: {
          userId: "user_1",
          userName: "Abdul Moiz",
        },
        createdTimestamp: new Date().getTime()
      }
    ];
    updatePosts(updatedPosts);
    delete newComments[postId];
  };

  const handleOnLikeIconClick = postKey => {
    let updatedPosts = [...posts];
    const alreadyLiked = updatedPosts[postKey]["likes"].includes("user_1");
    if (!alreadyLiked) {
      updatedPosts[postKey]["likes"] = [
        ...updatedPosts[postKey]["likes"],
        "user_1"
      ];
    } else {
      updatedPosts[postKey]["likes"].splice(
        updatedPosts[postKey]["likes"].indexOf("user_1"),
        1
      );
    }
    updatePosts(updatedPosts);
  };

  const handleOnCommentIconClick = postKey => {
    let updatedPosts = [...posts];
    const alreadyOpen = updatedPosts[postKey]["showComments"];
    if (alreadyOpen) {
      updatedPosts[postKey]["showComments"] = false;
    } else {
      updatedPosts[postKey]["showComments"] = true;
    }
    updatePosts(updatedPosts);
  };

  const handleOnDeleteIconClick = postId => {
    let updatedPosts = [...posts];
    updatedPosts = updatedPosts.filter(post => post["postId"] !== postId);
    updatePosts(updatedPosts);
  };

  const handleFileInput = ev => {
    const uploadedFile = ev["target"]["files"][0];
    getBase64(uploadedFile, result => {
      updateStatusBgImg(result);
    });
  };

  return (
    <div className="App">
      <AppHeader appHeaderClass="py4" />

      <CreateStatusCard
        statusText={statusText}
        statusBgImg={statusBgImg}
        handleOnClick={addNewPost}
        handleOnChange={ev => updateStatusText(ev["target"]["value"])}
        onFileUploadChange={handleFileInput}
      />

      {posts
        .sort((a, b) => {
          if (a["createdTimestamp"] > b["createdTimestamp"]) return -1;
          if (a["createdTimestamp"] < b["createdTimestamp"]) return 1;
          else return 0;
        })
        .map((data, i) => {
          const updatedData = { ...data, dataIndex: i };
          return (
            <StatusCard
              key={`status_card_${i}`}
              data={updatedData}
              handleOnLikeIconClick={handleOnLikeIconClick}
              handleOnCommentIconClick={handleOnCommentIconClick}
              handleOnDeleteIconClick={handleOnDeleteIconClick}
              commentText={
                newComments[updatedData["postId"]]
                  ? newComments[updatedData["postId"]]["comment"]
                  : ""
              }
              handleOnCommentChange={ev =>
                updateNewComments({
                  ...newComments,
                  [updatedData["postId"]]: { comment: ev["target"]["value"] }
                })
              }
              handleOnCommentSendClick={_ =>
                handleOnCommentSendClick(
                  updatedData["postId"],
                  updatedData["dataIndex"]
                )
              }
            />
          );
        })}
    </div>
  );
};

export default App;
