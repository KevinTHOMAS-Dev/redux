import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post"
import { isEmpty } from "./components/Utils";
import { useSelector } from "react-redux";

const App = () => {
  const posts = useSelector((state) => state.postReducer);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">CONTENU
          { !isEmpty (posts) && posts.map((post, index) => <Post post = {post} key={index}/>) }
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
