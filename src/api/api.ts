import axios from "axios";

const apiAxios = axios.create({
  baseURL: "http://localhost:5218/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export { apiAxios };
