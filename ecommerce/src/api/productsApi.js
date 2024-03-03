import axios from "axios";

const API_URL = "http://localhost:3000/products";

const handleRequest = async (method, url, data) => {
    const response = await axios({ method, url, data });
    return response.data;
};

export const fetchProductsApi  = async () => {
    return await handleRequest("GET", API_URL);
};

export const fetchProductByIdApi  = async (id) => {
    return await handleRequest("GET", `${API_URL}/${id}`);
};

export const updateProductApi  = async (id, editedProduct) => {
    return await handleRequest("PUT", `${API_URL}/${id}`, editedProduct);
};

export const deleteProductApi = async (id) => {
    await handleRequest("DELETE", `${API_URL}/${id}`);
};

export const addProductApi = async (newProduct) => {
    return await handleRequest("POST", API_URL, newProduct);
};
