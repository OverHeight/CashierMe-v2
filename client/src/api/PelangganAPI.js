import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:5005/api/pelanggan";

const UsePostPelanggan = async (data) => {
    try {
        const response = await axios.post(baseUrl, data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const UseGetPelanggan = async () => {
    const [pelanggan, setPelanggan] = useState([])
    try {
        useEffect(() => {
            axios.get(baseUrl).then((response) => setPelanggan(response.data));
        }, [])
        return pelanggan;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const UseGetSelectedPelanggan = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const UseDeletePelanggan = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export {
    UsePostPelanggan,
    UseGetPelanggan,
    UseGetSelectedPelanggan,
    UseDeletePelanggan,
};
