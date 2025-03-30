import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState, useEffect } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { AIChatSession } from "../../../services/aiModal";
import { toast } from "sonner";
import { useRef } from "react";

const PROMPT = `position titile: {positionTitle} , Depends on position title give me 5-7 points for my experience in resume (Please do not add experince level and No JSON array) , give me result With HTML tags(Only) as {"experience_points": ["", "", "", "", "", "", "" ]}`;
function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const GenerateSummeryFromAI = async () => {
    if (!resumeInfo?.experience[index]?.title) {
      toast("Please Add Position Title");
      return;
    }
    try {
      setLoading(true);
      const prompt = PROMPT.replace(
        "{positionTitle}",
        resumeInfo.experience[index].title
      );

      const result = await AIChatSession.sendMessage(prompt);
      console.log(result.response.text());
      const resp = result.response.text();
      setValue(
        resp
          .replace(`{"experience_points": [`, "")
          .replace("]}", "")
          .replace(`", "`, "")
      );

      toast.success("AI content generated successfully");
    } catch (error) {
      console.error("AI Generation Error:", error);
      toast.error("Failed to generate content");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Summary</label>
        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <BtnBulletList />
            <BtnClearFormatting />
            <BtnNumberedList />
            <Separator />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
