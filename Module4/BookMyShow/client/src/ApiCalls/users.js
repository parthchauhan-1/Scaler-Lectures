import { axiosInstance } from ".";

// export const UserRegister = async function (value) {
//   try {
//     const res = await axiosInstance.post(`/api/users/register`, value);
//     console.log(res);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const User = async function (value, path) {
  try {
    const res = await axiosInstance.post(`/api/users/${path}`, value);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
