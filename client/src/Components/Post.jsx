import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";

function Post() {
  return (
    <div className="p-2 flex flex-col border-t border-b border-gray-600  w-full h-fit space-y-2  sm:space-y-3 md:space-y-4 ">
      <div className="flex justify-between items-center">
        <div className="flex space-x-1 sm:space-x-2 md:space-x-4">
          <img src="" alt="" />
          <h1 className="font-bold">Name of User</h1>
          <p className="font-light text-gray-400">@username</p>
          <Link className="font-light text-gray-400 hover:underline hover:underline-offset-2">
            6 days ago
          </Link>
        </div>
        <p></p>
      </div>
      <p className="text-lg ml-1 sm:ml-2 md:ml-4">Tweet from user</p>
      <img
        className="ml-1 sm:ml-2 md:ml-4 object-cover w-full h-auto"
        src="https://firebasestorage.googleapis.com/v0/b/twitter-b468d.appspot.com/o/posts%2FRZ8LIWME0ItYt9Eh8nmD%2Fimage?alt=media&token=1030d3bf-d3c1-4f6f-9688-6ecd04035200"
      />
      <div className="flex justify-around items-center">
        <div className="flex items-center group space-x-1 sm:space-x-2 ">
          <div className="p-2 rounded-full flex items-center justify-center duration-200 group-hover:bg-pink-800/30 ">
            <AiOutlineHeart className="w-6 h-6 duration-200 text-gray-600 group-hover:text-pink-800 "/>
          </div>
          <p className="group-hover:text-pink-800 text-gray-600">1</p>
        </div>
        <div className="flex items-center group space-x-1 sm:space-x-2 ">
          <div className="p-2 rounded-full flex items-center justify-center duration-200 group-hover:bg-blue-600/30 ">
            <FaRegCommentDots className="w-6 h-6 duration-200 text-gray-600 group-hover:text-blue-600 "/>
          </div>
          <p className="group-hover:text-blue-600 text-gray-600">1</p>
        </div>
        <div className="flex items-center group space-x-1 sm:space-x-2 ">
          <div className="p-2 rounded-full flex items-center justify-center duration-200 group-hover:bg-green-600/30 ">
            <AiOutlineShareAlt className="w-6 h-6 duration-200 text-gray-600 group-hover:text-green-600 "/>
          </div>
          <p className="group-hover:text-green-600 text-gray-600">1</p>
        </div>
        <div className="flex items-center group space-x-1 sm:space-x-2 ">
          <div className="p-2 rounded-full flex items-center justify-center duration-200 group-hover:bg-blue-600/30 ">
            <BsArrowLeftRight className="w-6 h-6 duration-200 text-gray-600 group-hover:text-blue-800 "/>
          </div>
          <p className="group-hover:text-blue-600 text-gray-600">1</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
