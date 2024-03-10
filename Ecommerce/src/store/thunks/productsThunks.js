import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsApi, getProductByIdApi, updateProductApi, deleteProductApi, addProductApi } from "../../api/productsApi.js";

export const getProductsThunk  = createAsyncThunk(
    "products/getProducts",
    async () => {
        return await getProductsApi ();
    }
);

export const getProductByIdThunk  = createAsyncThunk(
    "products/getProductById",
    async (id) => {
        return await getProductByIdApi (id);
    }
);

export const updateProductThunk  = createAsyncThunk(
    "products/updateProduct",
    async ({ id, editedProduct }) => {
        return await updateProductApi (id, editedProduct);
    }
);

export const deleteProductThunk = createAsyncThunk(
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

export const addProductThunk = createAsyncThunk(
    "products/addProduct",
    async (newProduct) => {
        return await addProductApi(newProduct);
    }
);