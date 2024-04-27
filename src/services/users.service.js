import axios from "axios";

export const getUsers = (callback) => {
  axios
    .get("https://fakestoreapi.com/users")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log("Gagal mendapatkan data:", error);
    });
};

export const deleteUser = (id) => {
  axios
    .delete(`https://fakestoreapi.com/users/${id}`)
    .then((response) => {
      getUsers();
    })
    .catch((error) => {
      console.log("Gagal menghapus data:", error);
    });
};

export const addUser = (data) => {
  axios
    .post("https://fakestoreapi.com/users")
    .then((response) => {
      console.log("Data berhasil ditambahkan:", response.data);
    })
    .catch((error) => {
      console.error("Gagal menambahkan data:", error);
    });
};
