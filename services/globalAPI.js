import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api/",
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

const GetResumes = async () => {
  try {
    const response = await axiosClient.get("user-resumes");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { CreateNewResume, GetResumes };
