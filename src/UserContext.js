import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

// Provider do contexto
export const UserProvider = ({ children }) => {
  const [nome, setNome] = useState('');
  return (
    <UserContext.Provider value={{ nome, setNome }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
