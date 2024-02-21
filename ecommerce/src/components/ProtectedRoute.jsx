import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to={"/login"} state={location} />;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.object.isRequired
};