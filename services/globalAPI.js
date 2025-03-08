import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = async ({ data }) => {
  try {
    const response = await axiosClient.post("/user-resumes", { data });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const GetResumes = async (userEmail) => {
  try {
    const response = await axiosClient.get(
      "/user-resumes?filters[userEmail[$eq]=" + userEmail
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const UpdateResumeDetail = async (id, data) => {
  try {
    const response = await axiosClient.put(`/user-resumes/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const GetResumeById = async (id) => {
  try {
    const response = await axiosClient.get(`/user-resumes/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const DeleteResumeById = async (id) => {
  try {
    const response = await axiosClient.delete(`/user-resumes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export {
  CreateNewResume,
  GetResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
