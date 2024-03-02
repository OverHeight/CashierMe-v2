import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:5005/api/penjualan";

const UseGetPenjualan = () => {
    const [penjualan, setPenjualan] = useState([]);

    useEffect(() => {
        axios
            .get(baseUrl)
            .then((response) => setPenjualan(response.data))
            .catch((error) => console.error(error));
    }, []);

    return penjualan;
};

const UseGetSelectedPenjualan = (id) => {
    const [penjualan, setPenjualan] = useState(null);

    useEffect(() => {
        axios
            .get(`${baseUrl}/${id}`)
            .then((response) => setPenjualan(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    return penjualan;
};

const UsePostPenjualan = async (data) => {
    const response = await axios
        .post(baseUrl, data)
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
    return response
};

const UseDeletePenjualan = async (id) => {
    const response = await axios
        .delete(`${baseUrl}/${id}`)
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
    return response
};

export {
    UseGetPenjualan,
    UseGetSelectedPenjualan,
    UsePostPenjualan,
    UseDeletePenjualan,
};
