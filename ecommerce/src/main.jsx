import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { CartProvider } from "./hooks/useCart.jsx";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import { AuthProvider } from "./hooks/useAuth.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { FiltroProvider } from "./context/FilterContext.jsx";
import store from "./store/store.js"
import { Provider } from "react-redux";
import { ProductsProvider } from "./hooks/useProducts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <FiltroProvider>
              <ProductsProvider> {/* Aquí envuelve tus componentes con ProductsProvider */}
                <RouterProvider router={router}></RouterProvider>
              </ProductsProvider>
            </FiltroProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
    
  </React.StrictMode>
);
