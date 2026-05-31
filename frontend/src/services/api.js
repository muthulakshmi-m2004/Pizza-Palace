import axios from "axios";

const API = axios.create({
  baseURL: "https://pizza-palace-backend-xnks.onrender.com/api",
});

export default API;