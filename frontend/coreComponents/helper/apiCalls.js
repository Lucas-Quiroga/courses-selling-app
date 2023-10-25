import http from "./http";

export const getCourses = async () => {
  try {
    const response = await http.get("api/user/courses");
    return response?.data?.courses || [];
  } catch (error) {
    throw error?.response?.data;
  }
};
