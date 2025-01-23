import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  return (
    <UserContext.Provider value={{ nome, setNome, sexo, setSexo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
