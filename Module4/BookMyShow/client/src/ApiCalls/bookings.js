import { axiosInstance } from ".";

const BASE_URL = "/api/bookings";
export const MakePayment = async (payload) => {
  try {
    const res = await axiosInstance.post(
      `${BASE_URL}/create-checkout-session`,
      payload
    );
    console.log(res);
    return res.data;
  } catch (error) {
    return error.response;
  }
};
