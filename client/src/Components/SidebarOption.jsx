import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiHash } from "react-icons/fi";
import { MdRssFeed } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function SidebarOption({ text, route }) {
  let icon;
  if (text === "Home") {
    icon = <AiFillHome className="h-8 w-8" />;
  } else if (text === "Explore") {
    icon = <FiHash className="h-8 w-8" />;
  } else if (text === "Feed") {
    icon = <MdRssFeed className="h-8 w-8" />;
  } else if (text === "Profile") {
    icon = <CgProfile className="h-8 w-8" />;
  }

  return (
    <Link to={route} className="hover:text-black hover:bg-white duration-200 rounded-md p-2 text-xl m-2 ">
     <div className="flex sm:items-center justify-center space-x-4">
      <div className="">{icon}</div>
      <div className="hidden items-start sm:inline-flex">{text}</div>
     </div>
    </Link>
  );
}

export default SidebarOption;
