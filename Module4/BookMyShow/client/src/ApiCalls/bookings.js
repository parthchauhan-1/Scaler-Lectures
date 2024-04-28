import { axiosInstance } from ".";

const BASE_URL = "/api/bookings";
export const MakePayment = async (payload) => {
  try {
    const res = await axiosInstance.post(
      `${BASE_URL}/create-checkout-session`,
      payload
    );
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export const BookTickets = async (payload) => {
  try {
    const res = await axiosInstance.post(`${BASE_URL}/book-tickets`, payload);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export const GetBookings = async () => {
  try {
    const res = await axiosInstance.get(`${BASE_URL}/get-bookings`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};
