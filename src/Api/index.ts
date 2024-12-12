import axios from "axios";

export const API = axios.create({
  baseURL: "https://www.bakarcompany.somee.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
