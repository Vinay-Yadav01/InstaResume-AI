import { Loader2Icon, MoreVertical, Notebook } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DeleteResumeById } from "../../../services/globalAPI";
import { toast } from "sonner";
import { use } from "react";

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  // const onMenuClick=(url)=>{
  //   navigation(url)
  // }

  const onDelete = () => {
    setLoading(true);
    DeleteResumeById(resume.documentId).then(
      (resp) => {
        console.log(resp);
        toast.warning("Resume Deleted!");
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div className="">
      <Link to={"/dashboard/resume/" + resume.documentId + "/edit"}>
        <div
          className="p-14 bg-secondary flex items-center justify-center h-[280px] border-2 rounded-lg  hover:scale-105 transform transition duration-200 ease-in-out cursor-pointer bg-gradient-to-br from-blue-200 via bg-gray-200 to-blue-600"
          style={{
            borderColor: resume?.themeColor || "#000",
          }}
        >
          <div
            className="flex 
        items-center justify-center h-[180px] "
          >
            <Notebook />
            {/* <img src="/cv.png" width={80} height={80} /> */}
          </div>
        </div>
      </Link>
      <div
        className="border p-3 flex justify-between  text-black rounded-b-lg shadow-lg"
        style={{
          background: resume?.themeColor || "#f1f1f1",
        }}
      >
        <h2 className="text-sm">{resume.title}</h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                navigation("/dashboard/resume/" + resume.documentId + "/edit")
              }
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigation("/my-resume/" + resume.documentId + "/view")
              }
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigation("/my-resume/" + resume.documentId + "/view")
              }
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setOpenAlert(true);
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default ResumeCardItem;
