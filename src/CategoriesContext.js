import React, { createContext, useContext, useState} from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({children}) =>{
  const [texto, setTexto] = useState('');
  const [cor, setCor] = useState('');
    return(
        <CategoryContext.Provider value={{texto, setTexto, cor, setCor}}>
            {children}
        </CategoryContext.Provider>
    );
}

export const useCategory = () => useContext(CategoryContext);