import { axiosInstance } from ".";

const BASE_URL = "/api/theatres";

export const AddTheatre = async (payload) => {
  try {
    const res = await axiosInstance.post(`${BASE_URL}/add-theatre`, payload);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export const GetAllTheatresByOwner = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${BASE_URL}/get-all-theatre-by-owner`,
      payload
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const DeleteTheatre = async (payload) => {
  try {
    const res = await axiosInstance.post(`${BASE_URL}/delete-theatre`, payload);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export const UpdateTheatre = async (payload) => {
  try {
    const res = await axiosInstance.put(`${BASE_URL}/update-theatre`, payload);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export const GetAllTheatres = async () => {
  try {
    const res = await axiosInstance.get(`${BASE_URL}/get-all-theatres`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};


