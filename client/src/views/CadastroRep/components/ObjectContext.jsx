import React, { createContext, useContext, useState } from "react";

const ObjetoContext = createContext();

export const ObjetoProvider = ({ children }) => {
  const [objetoRepublica, setObjetoRepublica] = useState({
    name: "",
    Moradores: 1,
    Quartos: 1,
    Banheiros: 1,
    Camas: 1,
    roomType: "",
    title: "",
    
  });

  return (
    <ObjetoContext.Provider value={{ objetoRepublica, setObjetoRepublica }}>
      {children}
    </ObjetoContext.Provider>
  );
};

export const useObjeto = () => useContext(ObjetoContext);
