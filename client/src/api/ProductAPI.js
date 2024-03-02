import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:5005/api/produk";

const useGetProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => setProducts(response.data))
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);

  return products;
};

const useGetSelectedProduct = (id) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`baseUrl/${id}`)
      .then((response) => setProducts(response.data))
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return products;
};

const UsePostProduct = (credential) => {
  const response = axios
    .post(baseUrl, credential, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => console.log(response.data));

  return response;
};

const UseDeleteProduct = (id) => {
  const response = axios.delete(baseUrl + `/${id}`);
  return response;
};

export {
  useGetProduct,
  useGetSelectedProduct,
  UsePostProduct,
  UseDeleteProduct,
};
