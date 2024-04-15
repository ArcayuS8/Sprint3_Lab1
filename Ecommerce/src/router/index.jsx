import CartSection from "../views/components/CartSection.jsx";
import Layout from "../views/components/Layout.jsx";
import LoginForm from "../views/components/LoginForm.jsx";
import NotFound from "../views/components/NotFound.jsx";
import ProductDetails from "../views/components/ProductDetails.jsx";
import ProductsSection from "../views/components/ProductsSection.jsx";
import ProtectedRoute from "../components/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <ProductsSection /> },
      {
        path: "/product/:id",
        element: (
          <ProtectedRoute><ProductDetails /></ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute><CartSection /></ProtectedRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <LoginForm /> },
]);
