import axios from "axios";
import { BASE_URL } from "../constants/urls";
// import { goToFeed } from "../routes/coordinator";

export const login = (body, navigate) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    //   goToFeed(navigate)
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
