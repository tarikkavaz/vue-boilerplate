import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://620117bbfdf509001724981b.mockapi.io/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
