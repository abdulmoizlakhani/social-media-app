import React, { useState } from "react";
import AppHeader from "./containers/AppHeader";
import CreateStatusCard from "./containers/CreateStatusCard";
import StatusCard from "./containers/StatusCard";
import { generateRandomId, getBase64 } from "./helpers";

// const dummyData = [
//   {
//     createdTimestamp: new Date().getTime(),
//     content: `Lorem Ipsum è un testo segnaposto utilizzato nel`,
//     likes: ["user_1"],
//     comments: [],
//     backgroundImgUrl:
//       "https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045__340.png"
//   },
//   {
//     createdTimestamp: new Date().getTime(),
//     content: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo.`,
//     likes: ["user_2", "user_3", "user_1"],
//     comments: [
//       { comment: "Very Nice, keep it up!", commentBy: "user_2" },
//       { comment: "Very Nice, keep it up!", commentBy: "user_3" }
//     ],
//     backgroundImgUrl:
//       "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=1000&q=80"
//   },
//   {
//     createdTimestamp: new Date().getTime(),
//     content: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo.`,
//     likes: ["user_3", "user_2"],
//     comments: [
//       { comment: "Very Nice, keep it up!", commentBy: "user_3" },
//       { comment: "Very Nice, keep it up!", commentBy: "user_2" },
//       { comment: "Very Nice, keep it up!", commentBy: "user_1" }
//     ],
//     backgroundImgUrl:
//       "https://cdn.pixabay.com/photo/2016/11/22/23/03/hardwood-1851071__340.jpg"
//   }
// ];

const App = () => {
  const [statusText, updateStatusText] = useState("");
  const [statusBgImg, updateStatusBgImg] = useState("");
  const [posts, updatePosts] = useState([]);

  const addNewPost = () => {
    updatePosts([
      ...posts,
      {
        postId: generateRandomId(),
        createdTimestamp: new Date().getTime(),
        content: statusText,
        likes: [],
        comments: [],
        postedBy: "user_1",
        backgroundImgUrl: statusBgImg
      }
    ]);
    updateStatusText("");
    updateStatusBgImg("");
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

  const handleOnCommentIconClick = () => {};

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
            />
          );
        })}
    </div>
  );
};

export default App;
