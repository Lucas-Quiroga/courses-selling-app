import http from "./http";

export const sendEmail = async (data) => {
  try {
    const response = await http.post("/emails", data);
    return response?.data || {};
  } catch (error) {
    throw error?.response?.data;
  }
};
