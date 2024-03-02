import axios from "axios";

const baseUrl = "http://localhost:5005/api/detail-penjualan";

const UsePostDetailPenjualan = async (data) => {
    try {
        const response = await axios.post(baseUrl, data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const UseGetDetailPenjualan = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const UseGetSelectedDetailPenjualan = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const UseDeleteDetailPenjualan = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export {
    UsePostDetailPenjualan,
    UseGetDetailPenjualan,
    UseGetSelectedDetailPenjualan,
    UseDeleteDetailPenjualan,
};
