import Header from "@/components/custom/Header";
import ResumePreview from "@/components/custom/ResumePreview";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useRef, useEffect, useState, useContext } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { GetResumeById } from "../../services/globalAPI";
import { RWebShare } from "react-web-share";
import { useParams } from "react-router-dom";

function ViewResume() {
  const [isExploding, setIsExploding] = useState(true);
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    isExploding && setTimeout(() => setIsExploding(false), 2000);
    GetResumeInfo();
  }, []);

  const GetResumeInfo = () => {
    GetResumeById(resumeId).then((res) => {
      console.log(res.data);
      setResumeInfo(res.data);
    });
  };

  const HandleDownload = () => {
    window.print();
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "40%",
            left: "100%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {isExploding && (
            <ConfettiExplosion
              force={0.6}
              duration={2500}
              particleCount={80}
              width={1000}
            />
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1
            style={{ color: "#4CAF50", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            🎉 Congratulations! 🎉
          </h1>
          <h2 style={{ fontSize: "1.5rem", color: "#333" }}>
            Your resume has been generated successfully.
          </h2>
          <p style={{ fontSize: "1rem", color: "#666", marginTop: "20px" }}>
            You can now download your resume or share it with others using the
            buttons below.
          </p>
          <div style={{ marginTop: "20px" }}>
            <Button
              onClick={HandleDownload}
              style={{
                marginRight: "10px",
                padding: "10px 20px",
                fontSize: "1rem",
              }}
            >
              Download
            </Button>
            <RWebShare
              data={{
                text: "Check out My Resume",
                url:
                  import.meta.env.VITE_BASE_URL +
                  "/my-resume/" +
                  resumeId +
                  "/view",
                title:
                  resumeInfo?.firstName +
                  " " +
                  resumeInfo?.lastName +
                  " Resume",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button style={{ padding: "10px 20px", fontSize: "1rem" }}>
                Share
              </Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
