import AddResume from "@/components/custom/AddResume";
import AllResume from "@/components/custom/AllResume";
import React from "react";

function Dashboard() {
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl font-serif">My Resume</h2>
      <p className="mt-2 text-lg font-serif ">
        Start Creating AI resume to you next job role
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        <AddResume />
        <AllResume />
      </div>
    </div>
  );
}

export default Dashboard;
