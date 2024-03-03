import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsApi, fetchProductByIdApi, updateProductApi, deleteProductApi, addProductApi } from "../../api/productsApi.js";

export const fetchProducts  = createAsyncThunk(
    "products/getProducts",
    async () => {
        return await fetchProductsApi ();
    }
);

export const fetchProductById  = createAsyncThunk(
    "products/getProductById",
    async (id) => {
        return await fetchProductByIdApi (id);
    }
);

export const saveProduct  = createAsyncThunk(
    "products/updateProduct",
    async ({ id, editedProduct }) => {
        return await updateProductApi (id, editedProduct);
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id) => {
        try {
            await deleteProductApi(id);
            return id;
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            throw error;
        }
    }
);

export const addProduct = createAsyncThunk(
    "products/addProduct",
    async (newProduct) => {
        return await addProductApi(newProduct);
    }
);