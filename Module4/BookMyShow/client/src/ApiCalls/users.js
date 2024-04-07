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
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetCurrentUser = async function () {
  try {
    const res = await axiosInstance.get("/api/users/get-current-user");
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
