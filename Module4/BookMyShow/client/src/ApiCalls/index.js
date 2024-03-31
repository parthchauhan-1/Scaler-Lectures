import axios from "axios";

const axiousInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
