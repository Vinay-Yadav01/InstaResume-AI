import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { GetResumes } from "../../../services/globalAPI";
import ResumeCardItem from "./ResumeCardItem.jsx";

function AllResume() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumesList();
  }, [user]);

  /***
    Use to Get Users Resumes List
  ***/
  const GetResumesList = () => {
    GetResumes(user?.primaryEmailAddress?.emailAddress).then((res) => {
      setResumeList(res.data);
    });
  };
  return (
    <>
      {resumeList &&
        resumeList.map((resume, index) => (
          <ResumeCardItem resume={resume} key={index} />
        ))}
    </>
  );
}

export default AllResume;
