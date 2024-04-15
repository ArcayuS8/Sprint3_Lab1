import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk, getProductByIdThunk, updateProductThunk, deleteProductThunk, addProductThunk } from "../thunks/productsThunks.js"

const initialState = {
    products: [],
    loading: false,
    error: null,
    selectedProduct: {},
};

const pendingMatcher = (action) => action.type.endsWith("/pending");

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        resetSelectedProduct: (state) => {
            state.selectedProduct = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProductByIdThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(updateProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                const updatedProduct = action.payload;
                state.products = state.products.map(product =>
                    product.id === updatedProduct.id ? updatedProduct : product
                );
            })
            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                const deletedProductId = action.payload;
                state.loading = false;
                state.products = state.products.filter(product =>
                    product.id !== deletedProductId
                );
            })
            .addCase(addProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                const addedProduct = action.payload;
                state.products.push(addedProduct);
            })
            .addMatcher(pendingMatcher, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher((action) => action.type.endsWith("/rejected"), (state, action) => {
                state.loading = false;
                state.error = action.error.response
                    ? action.error.response.data.message
                    : "Ha ocurrido un error.";
            });
    },
});

export const { setSelectedProduct, resetSelectedProduct } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;
export const selectSelectedProduct = (state) => state.products.selectedProduct;

export default productsSlice.reducer;
