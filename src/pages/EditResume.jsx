import FormSection from "@/components/custom/FormSection";
import ResumePreview from "@/components/custom/ResumePreview";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditResume() {
  const params = useParams();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {/* Form Section  */}
      <FormSection />
      {/* Preview Section  */}
      <ResumePreview />
    </div>
  );
}

export default EditResume;
