import PropTypes from 'prop-types';
import { createContext, useState, useContext } from "react";

const FiltroContext = createContext();

export const useFiltro = () => {
  const context = useContext(FiltroContext);
  if (!context) {
    throw new Error("useFiltro debe ser usado dentro de FiltroProvider");
  }
  return context;
};

export const FiltroProvider = ({ children }) => {
  const [filtro, setFiltro] = useState("");

  const changeFiltro = (textoFiltro) => {
    setFiltro(textoFiltro);
  };

  return (
    <FiltroContext.Provider value={{ filtro, changeFiltro }}>
      {children}
    </FiltroContext.Provider>
  );
};

FiltroProvider.propTypes = {
  children: PropTypes.object.isRequired
};