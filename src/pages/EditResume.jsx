import FormSection from "@/components/custom/FormSection";
import ResumePreview from "@/components/custom/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfocontext";
import dummy from "@/data/dummy";
import React, { useEffect, useState } from "react";
import { GetResumeById } from "../../services/globalAPI";
import { useParams } from "react-router-dom";

function EditResume() {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  useEffect(() => {
    setResumeInfo(dummy);
    GetResumeInfo();
  }, []);

  const GetResumeInfo = () => {
    GetResumeById(resumeId).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        {/* Form Section  */}
        <FormSection />
        {/* Preview Section  */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
