import axios from "axios";

export const getUsers = (callback) => {
  axios
    .get("https://fakestoreapi.com/users")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteUser = (id) => {
  axios
    .delete(`https://fakestoreapi.com/users/${id}`)
    .then((response) => {
      getUsers();
    })
    .catch((error) => {
      console.log(error);
    });
};
