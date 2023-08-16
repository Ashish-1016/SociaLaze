import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Trends from "./Trends";

function UserHomePage() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-4 lg:max-w-7xl mx-auto">
      <section className="col-span-1">
        <Sidebar />
      </section>
      <section className="col-span-4 md:col-span-2">
        
        <Feed />
      </section>
      <section className="col-span-1">
        <Trends />
      </section>
    </div>
  );
}

export default UserHomePage;
