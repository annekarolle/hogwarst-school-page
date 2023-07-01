import axios from "axios";

const harryPotterAPI = axios.create({
  baseURL: "https://hp-api.onrender.com/api/",
  timeout: 5000, // 5 segundos
});

export default harryPotterAPI;
