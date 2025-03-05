import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UpdateResumeDetail } from "../../../../services/globalAPI";
import { toast } from "sonner";

function PersonalDetail({ enabledNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("---", resumeInfo);
  }, []);

  const handleInputChange = (e) => {
    enabledNext(false);
    const { name, value } = e.target;
    console.log(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
    const newData = {
      ...resumeInfo,
      [name]: value,
    };
    setResumeInfo(newData);
  };

  // const onSave = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const data = {
  //     data: formData,
  //   };
  //   UpdateResumeDetail(params?.resumeId, data).then(
  //     (resp) => {
  //       console.log(resp);
  //       enabledNext(true);
  //       setLoading(false);
  //       toast("Details updated");
  //     },
  //     (error) => {
  //       setLoading(true);
  //     }
  //   );
  // };
  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: {
        firstName: formData?.firstName || resumeInfo?.firstName,
        lastName: formData?.lastName || resumeInfo?.lastName,
        jobTitle: formData?.jobTitle || resumeInfo?.jobTitle,
        address: formData?.address || resumeInfo?.address,
        phone: formData?.phone || resumeInfo?.phone,
        email: formData?.email || resumeInfo?.email,
      },
    };

    UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false); // Changed from true to false
        toast("Error updating details");
      }
    );
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={handleInputChange}
              defaultValue={resumeInfo?.lastName}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              defaultValue={resumeInfo?.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              required
              defaultValue={resumeInfo?.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              defaultValue={resumeInfo?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={resumeInfo?.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
