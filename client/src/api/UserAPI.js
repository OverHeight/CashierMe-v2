import axios from "axios";

const baseUrl = "http://localhost:5005/api/user";

const UsePostUser = async (data) => {
    try {
        const response = await axios.post(baseUrl, data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const UseGetUser = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const UseGetSelectedUser = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const UseDeleteUser = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export {
    UsePostUser,
    UseGetUser,
    UseGetSelectedUser,
    UseDeleteUser,
};
