import PropTypes from 'prop-types';
import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const handleLogin = ({ name, email }) => {
    const userRole = email.includes("@admin") ? "admin" : "user";

    const userDataObj = { name, email, role: userRole };
    setUserData(userDataObj);
    localStorage.setItem("userData", JSON.stringify(userDataObj));
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userData");
  };

  const authContextValue = {
    userData,
    loading,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};