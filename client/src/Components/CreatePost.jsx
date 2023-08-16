import React, { useCallback, useMemo, useRef, useState } from "react";
import { GoFileMedia } from "react-icons/go";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import axios from "axios";

function CreatePost() {
  const textRef = useRef(null);
  const [tweetText, setTweetText] = useState("");
  const [imagefile, setImageFile] = useState(null);

  const isButtonDisabled = useMemo(() => {
    return tweetText.trim() === "";
  }, [tweetText]);

  const handleTextChange = useCallback((event) => {
    setTweetText(event.target.value);
  }, []);

  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  }
  async function handleCreatePost(e) {
    e.preventDefault();
    axios
      .post("", {
        tweetText,
        userId: "testuser",
        tweetId: "testIdfoetweet",
      })
      .then((res) => {
        setTweetText("");
        console.log(res);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="p-2 flex flex-col border-t border-b border-gray-600  w-full h-fit space-y-2  sm:space-y-3 md:space-y-4 ">
      <h1 className="flex items-center text-2xl font-bold border-b border-gray-700 pb-2   ml-1 sm:ml-2 md:ml-4">
        <FaLocationArrow className=" mr-1 sm:mr-2 md:mr-4 text-blue-600" />
        Post a Blaze
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex space-x-1 sm:space-x-2 md:space-x-4">
          <img src="" alt="" />
          <h1 className="font-bold">Name of User</h1>
          <p className="font-light text-gray-400">@username</p>
        </div>
        <p></p>
      </div>
      <textarea
        ref={textRef}
        value={tweetText}
        onChange={handleTextChange}
        placeholder="What's happening..."
        className="text-lg outline-none ml-1 sm:ml-2 md:ml-4 min-h-[10vh] bg-transparent border-b border-gray-700"
      />

      <div className="flex justify-start space-x-2 md:space-x-3 items-center">
        <div className="flex items-center group space-x-1 sm:space-x-2 ">
          <div className="p-2 rounded-full flex items-center justify-center duration-200 group-hover:bg-blue-600/30">
            <label htmlFor="fileInput" className="cursor-pointer">
              <GoFileMedia className="w-6 h-6 duration-200 text-gray-600 group-hover:text-blue-600" />
            </label>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </div>
        <div className="flex items-center group space-x-1 sm:space-x-2 ">
          <div className="p-2 rounded-full flex items-center justify-center duration-200 group-hover:bg-blue-600/30 ">
            <AiOutlineFileGif className="w-6 h-6 duration-200 text-gray-600 group-hover:text-blue-600 " />
          </div>
        </div>
        <div className="flex items-center group space-x-1 sm:space-x-2 ">
          <div className="p-2 rounded-full flex items-center justify-center duration-200 group-hover:bg-blue-600/30 ">
            <BiPoll className="w-6 h-6 duration-200 text-gray-600 group-hover:text-blue-600 " />
          </div>
        </div>
        <div className="flex items-center group space-x-1 sm:space-x-2 ">
          <div className="p-2 rounded-full flex items-center justify-center duration-200 group-hover:bg-blue-600/30 ">
            <BsEmojiSmile className="w-6 h-6 duration-200 text-gray-600 group-hover:text-blue-800 " />
          </div>
        </div>
        <button
          onClick={handleCreatePost}
          disabled={isButtonDisabled}
          className={`${
            isButtonDisabled ? "opacity-30" : ""
          } bg-blue-600 p-2 rounded-2xl duration-300 font-bold text-lg`}
        >
          Blaze
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
