import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((response) => {
      callback(true, response.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
  //   console.log(decoded);
};
