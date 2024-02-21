import PropTypes from 'prop-types';
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = ({ name, email }) => {
    setIsLoggedIn(true);
    const userDataObj = { name, email };
    setUserData(userDataObj);
    localStorage.setItem("userData", JSON.stringify(userDataObj));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({});
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
  };