import http from "./http";

export const getCourses = async () => {
  try {
    const response = await http.get("api/courses");
    return response?.data?.courses || [];
  } catch (error) {
    throw error?.response?.data;
  }
};

export const getCourseDetail = async (courseId) => {
  try {
    const response = await http.get(`api/course/${courseId}`);
    return response?.data?.course || null;
  } catch (error) {
    throw error?.response?.data;
  }
};
