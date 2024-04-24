import axios from "axios";

export const getProduct = (callback) => {
  axios
    .get("https://fakestoreapi.com/products/categories")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
