// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  // Función para iniciar sesión
  const login = (userData) => {
    // Aquí podrías realizar validaciones mínimas de los datos del usuario, por ejemplo, verificar que haya un nombre y un correo electrónico
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Almacena los datos del usuario en el LocalStorage
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Elimina los datos del usuario del LocalStorage
  };

  useEffect(() => {
    // Recupera los datos del usuario del LocalStorage cuando el componente se monta
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return { user, login, logout };
};

export default useAuth;
