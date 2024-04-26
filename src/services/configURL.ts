import axios from "axios";

const BASE_URL = "";

export const https = axios.create({
  baseURL: BASE_URL,
  params: {},
  headers: {
    accept: "application/json",
    Authorization: "",
  },
});
