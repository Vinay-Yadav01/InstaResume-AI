import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ResumeCardItem({ resume }) {
  return (
    <Link to={"/dashboard/resume/" + resume.resumeId + "/edit"}>
      <div className="p-14 bg-secondary flex items-center justify-center h-[280px] border-primary rounded-lg border-2 hover:scale-105 transform transition duration-200 ease-in-out cursor-pointer">
        <Notebook />
      </div>
      <h2 className="text-center">{resume.title}</h2>
    </Link>
  );
}

export default ResumeCardItem;
