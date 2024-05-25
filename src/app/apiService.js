import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:8000",
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", { error });
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response.data;
  },
  function (error) {
    console.log("RESPONSE ERROR", error.response);
    const message = error.response?.data?.message || "Unknown Error";
    return Promise.reject({ message });
  }
);

export default apiService;
