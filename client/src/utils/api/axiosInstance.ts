import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

instance.interceptors.request.use(
  async (config) => {
    if (!config.headers["No-Auth"]) {
      const authToken = `Bearer ${localStorage.getItem("authToken")}`;
      const refresh = localStorage.getItem("refresh");
      if (refresh && authToken) {
        config.headers["Refresh"] = refresh;
        config.headers["Authorization"] = authToken;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return axios
        .post(
          `${process.env.REACT_APP_API_URL}/members/token`,
          {},
          {
            headers: {
              refresh: localStorage.getItem("refresh"),
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            const dateToSeconds = (dateString: string) => {
              const date = new Date(dateString);
              const seconds = Math.floor(date.getTime() / 1000);

              return `${seconds}`;
            };

            console.log(res);
            localStorage.setItem("authToken", res.headers.authorization);
            localStorage.setItem("refresh", res.headers.refresh);
            localStorage.setItem("exp", dateToSeconds(res.headers.exp));
            localStorage.setItem("iat", dateToSeconds(res.headers.iat));

            return instance(originalRequest);
          }
        })
        .catch(() => {
          localStorage.removeItem("refresh");
          localStorage.removeItem("authToken");
          localStorage.removeItem("exp");
          localStorage.removeItem("iat");
          localStorage.removeItem("memberId");
        });
    }
    return Promise.reject(err);
  },
);

export default instance;
