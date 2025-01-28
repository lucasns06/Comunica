import React, { createContext, useContext, useState } from "react";
import { StyleSheet } from "react-native";
const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      id: 0,
      imagem: require("../src/images/Necessidades.png"),
      texto: "Necessidades",
      navegacao: "necessidades",
      cor: styles.um,
      imagens: [
        {
            id: 1,
            imagem:  require("../src/images/necessidades/ajuda.png"),
            texto: 'Ajuda',
            cor: styles.um,
        },
        {
            id: 2,
            imagem:  require("../src/images/necessidades/dor.png"),
            texto: 'Dor',
            cor: styles.um,
        },
        {
            id: 3,
            imagem:  require("../src/images/necessidades/vaso.png"),
            texto: 'Banheiro',
            cor: styles.um,
        },
        {
            id: 4,
            imagem:  require("../src/images/necessidades/fome.png"),
            texto: 'Fome',
            cor: styles.um,
        }
      ]
    },
    {
      id: 1,
      imagem: require("../src/images/triste.png"),
      texto: "Emoções",
      navegacao: "emocoes",
      cor: styles.dois,
      imagens: [
        {
            id: 1,
            imagem:  require("../src/images/emocoes/feliz.png"),
            texto: 'Feliz',
            cor: styles.dois,
        },
        {
            id: 2,
            imagem:  require("../src/images/emocoes/triste.png"),
            texto: 'Triste',
            cor: styles.dois,
        },
        {
            id: 3,
            imagem:  require("../src/images/emocoes/cansado.png"),
            texto: 'Cansado',
            cor: styles.dois,
        },
        {
            id: 4,
            imagem:  require("../src/images/emocoes/bravo.png"),
            texto: 'Bravo',
            cor: styles.dois,
        }
      ]
    },
    {
      id: 2,
      imagem: require("../src/images/diaAdia.png"),
      texto: "Social",
      navegacao: "social",
      cor: styles.tres,
      imagens: [
        {
            id: 1,
            imagem:  require('../src/images/social/sim.png') ,
            texto: 'Sim',
            cor: styles.tres,
        },
        {
            id: 2,
            imagem:  require('../src/images/social/nao.png'),
            texto: 'Não',
            cor: styles.tres,
        },
        {
            id: 3,
            imagem:  require('../src/images/social/obrigado.png'),
            texto: 'Obrigado',
            cor: styles.tres,
        },
        {
            id: 4,
            imagem:  require('../src/images/social/desculpa.png'),
            texto: 'Desculpa',
            cor: styles.tres,
        }
      ]
    },
    {
      id: 3,
      imagem: require("../src/images/roupa.png"),
      texto: "Roupas",
      navegacao: "roupas",
      cor: styles.quatro,
      imagens: [
        {
            id: 1,
            imagem:  require('../src/images/roupas/calca.png') ,
            texto: 'calça',
            cor: styles.quatro,
        },
        {
            id: 2,
            imagem:  require('../src/images/roupas/roupa.png'),
            texto: 'Camisa',
            cor: styles.quatro,
        },
        {
            id: 3,
            imagem:  require('../src/images/roupas/short.png'),
            texto: 'Short',
            cor: styles.quatro,
        },
        {
            id: 4,
            imagem:  require('../src/images/roupas/cueca.png'),
            texto: 'Cueca',
            cor: styles.quatro,
        }
      ]
    },
  ]);
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
const styles = StyleSheet.create({
  um: {
    backgroundColor: "#7FAFF6",
  },
  dois: {
    backgroundColor: "#F97D7D",
  },
  tres: {
    backgroundColor: "#9D7FF6",
  },
  quatro: {
    backgroundColor: "#4AE9A7",
  },
});
export const useCategory = () => useContext(CategoryContext);
