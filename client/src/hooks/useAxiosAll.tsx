import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type DoAxiosFunction = (method: string, path: string, body?: object, needToken?: boolean) => void;

const useAxiosAll = (): [DoAxiosFunction, object, boolean, boolean] => {
  const [data, setData] = useState({});
  const [err, setErr] = useState(false);
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();

  const doAxios = async (method: string, path: string, body: object = {}, needToken = true): Promise<void> => {
    let header = {};
    let requestCon = {};

    if (needToken) {
      const expSeconds = Number(localStorage.getItem("exp"));
      const nowSeconds = Math.floor(new Date().getTime() / 1000);
      if (expSeconds < nowSeconds) {
        await axios
          .post(
            `${process.env.REACT_APP_API_URL}/members/token`,

            {},
            {
              headers: {
                refresh: localStorage.getItem("refresh"),
              },
            },
          )
          .then((res) => {
            const token = res.headers.authorization;
            localStorage.setItem("authToken", token.replace(/^Bearer\s/, ""));
            localStorage.setItem("refresh", res.headers.refresh);
          })
          .catch(() => {
            localStorage.removeItem("authToken");
            localStorage.removeItem("refresh");
            localStorage.removeItem("memberId");
            localStorage.removeItem("exp");
            localStorage.removeItem("iat");
            navigate("/login");
            localStorage.setItem("needLogin", "needLogin");
          });
      }
      if (needToken) {
        const access_token = `Bearer ${localStorage.getItem("authToken")}`;
        header = {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        };
      } else {
        header = {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        };
      }
    }

    if (Object.keys(body).length > 0) {
      requestCon = {
        method: method,
        url: `${process.env.REACT_APP_API_URL}${path}`,
        headers: header,
        data: body,
      };
    } else {
      requestCon = {
        method: method,
        url: `${process.env.REACT_APP_API_URL}${path}`,
        headers: header,
      };
    }

    axios
      .request(requestCon)
      .then((res) => {
        setOk(true);
        if (res.data.data) {
          setData(res.data.data);
        }
      })
      .catch(() => {
        setErr(true);
      });
  };

  return [doAxios, data, err, ok];
};

export default useAxiosAll;
