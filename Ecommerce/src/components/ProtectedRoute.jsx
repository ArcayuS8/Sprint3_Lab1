import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";

function ProtectedRoute({ children }) {
  const { userData, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <>Loading...</>;
  }

  return userData ? children : <Navigate to={"/login"} state={location} />;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.object.isRequired
};