import { axiosInstance } from ".";

const BASE_URL = "/api/movies";
//add a movie
export const AddMovie = async (payload) => {
  try {
    const res = await axiosInstance.post(`${BASE_URL}/add-movie`, payload);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

//delete a movie
export const DeleteMovie = async (payload) => {
  try {
    const res = await axiosInstance.post(`${BASE_URL}/delete-movie`, payload);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

//get-all-movies
export const GetAllMovies = async () => {
  try {
    const res = await axiosInstance.get(`${BASE_URL}/get-all-movies`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

//update-movie
export const UpdateMovie = async (payload) => {
  try {
    const res = await axiosInstance.put(`${BASE_URL}/update-movie`, payload);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

//get-movie-by-id
export const GetMovieById = async (id) => {
  try {
    const res = await axiosInstance.get(`${BASE_URL}/get-movie-by-id/${id}`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};
