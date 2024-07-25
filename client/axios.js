import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.117:6666",
});

export default instance;
