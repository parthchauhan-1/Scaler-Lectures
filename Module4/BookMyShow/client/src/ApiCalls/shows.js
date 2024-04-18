import { axiosInstance } from ".";

const BASE_URL = "/api/shows";
export const AddShow = async (payload) => {
  try {
    const res = await axiosInstance.post(`${BASE_URL}/add-show`, payload);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const GetAllShowsByTheatre = async (payload) => {
  try {
    const res = await axiosInstance.post(
      `${BASE_URL}/get-all-shows-by-theatre`,
      payload
    );
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export const DeleteShow = async (payload) => {
  try {
    const res = await axiosInstance.post(`${BASE_URL}/delete-show`, payload);
    return res.data;
  } catch (error) {
    return error.response;
  }
};
