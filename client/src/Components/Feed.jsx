import React from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";



function Feed() {

  

  return (
    <div className="flex flex-col items-center p-2 m-2">
      <div className="sticky border-b-[1px] border-gray-600  h-10 w-full font-bold text-2xl">Home</div>
      <CreatePost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
