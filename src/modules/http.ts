import axios, { AxiosInstance } from "axios";

export const api = {
  user: axios.create({
    baseURL: `/api/users`,
  }),
};

export default axios;

