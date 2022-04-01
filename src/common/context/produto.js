import { createContext, useState } from 'react';

export const ProdutoContext = createContext();
ProdutoContext.displayName = "Ver Produto";

export const ProdutoProvider = ({ children }) => {
  const [categoria, setCategoria] = useState(0);
  const [produto, setProduto] = useState(3);
  const [allCategorias, setAllCategorias] = useState({});

  return (
    <ProdutoContext.Provider value={{ produto, setProduto, categoria, setCategoria, setAllCategorias, allCategorias }}>
      {children}
    </ProdutoContext.Provider>
  )
}