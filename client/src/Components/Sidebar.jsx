import React from "react";
import SidebarOption from "./SidebarOption";
import { SidebarOptions } from "../utils/SidebarInfo";

function Sidebar() {
  return (
    <div className="bg-black text-white min-h-screen sticky left-0 top-0 flex flex-col  border-r border-gray-800">
        <div className="text-2xl font-bold p-2  md:p-3   hover:text-white hover:bg-blue-700 rounded-md transition duration-200 ease-linear hover:animate-pulse">Social Blaze</div>
      {SidebarOptions.map((opt, i) => (
        <SidebarOption text={opt.text} key={i} route={opt.route}  />
      ))}
    </div>
  );
}

export default Sidebar;
