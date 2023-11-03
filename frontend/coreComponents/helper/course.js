import http from "./http";

export const createCourse = async (courseData) => {
  const adminToken = JSON.parse(localStorage.getItem("adminJwt")).token;
  try {
    const response = await http.post("api/admin/create", courseData, {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    });
    console.log("desde el servidor", response?.data || null);
    return response?.data || null;
  } catch (error) {
    throw error?.response?.data;
  }
};
