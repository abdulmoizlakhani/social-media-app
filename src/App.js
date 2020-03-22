import React, { useState } from "react";
import AppHeader from "./containers/AppHeader";
import CreateStatusCard from "./containers/CreateStatusCard";
import StatusCard from "./containers/StatusCard";
import { generateRandomId } from "./helpers";

// const dummyData = [
//   {
//     createdTimestamp: new Date().getTime(),
//     content: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo.`,
//     likes: ["user_1"],
//     comments: []
//   },
//   {
//     createdTimestamp: new Date().getTime(),
//     content: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo.`,
//     likes: ["user_2", "user_3", "user_1"],
//     comments: [
//       { comment: "Very Nice, keep it up!", commentBy: "user_2" },
//       { comment: "Very Nice, keep it up!", commentBy: "user_3" }
//     ]
//   },
//   {
//     createdTimestamp: new Date().getTime(),
//     content: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo.`,
//     likes: ["user_3", "user_2"],
//     comments: [
//       { comment: "Very Nice, keep it up!", commentBy: "user_3" },
//       { comment: "Very Nice, keep it up!", commentBy: "user_2" },
//       { comment: "Very Nice, keep it up!", commentBy: "user_1" }
//     ]
//   }
// ];

const App = () => {
  const [statusText, updateStatusText] = useState("");
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
        postedBy: "user_1"
      }
    ]);
    updateStatusText("");
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

  return (
    <div className="App">
      <AppHeader appHeaderClass="py4" />

      <CreateStatusCard
        statusText={statusText}
        handleOnClick={addNewPost}
        handleOnChange={ev => updateStatusText(ev["target"]["value"])}
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
