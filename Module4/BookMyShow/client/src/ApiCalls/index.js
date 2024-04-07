import axios from "axios";

// prettier-ignore

export const axiosInstance = axios.create({
  headers:{
      'Content-Type':'application/json',
      'authorization':`Bearer ${localStorage.getItem('token')}`
  }
})
