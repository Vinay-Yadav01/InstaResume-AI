import { Loader2, PlusSquare } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { CreateNewResume } from "../../../services/globalAPI.js";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function AddResume() {
  const [openDialog, setopenDialog] = useState(false);
  const [resumeTitle, setresumeTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onCreate = () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };
    CreateNewResume(data).then((res) => {
      setLoading(false);
      navigate("/dashboard/resume/" + res.data.documentId + "/edit");
    }),
      (error) => {
        setLoading(false);
      };
  };
  return (
    <div>
      <div
        className="p-14 py-24 items-center flex justify-center bg-secondary rounded-lg h-[280px]  border-dashed border-primary border-2 hover:scale-105 transform transition duration-200 ease-in-out cursor-pointer"
        onClick={() => setopenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              Add a title for new resume
              <Input
                className="my-3 font-semibold text-black text-lg"
                placeholder="Ex. Full Stack Resume"
                onChange={(e) => setresumeTitle(e.target.value)}
                value={resumeTitle}
              />
            </DialogDescription>
            <div className="flex justify-end space-x-4">
              <Button variant="ghost" onClick={() => setopenDialog(false)}>
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}
              >
                {loading ? (
                  <Loader2 className="animate-spin" size="24" />
                ) : (
                  "Create"
                )}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
