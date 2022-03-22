import { createContext, useState } from 'react';

export const ProdutoContext = createContext();
ProdutoContext.displayName = "Ver Produto";

export const ProdutoProvider = ({ children }) => {
  const [categoria, setCategoria] = useState(0);
  const [produto, setProduto] = useState(0);

  return (
    <ProdutoContext.Provider value={{ produto, setProduto, categoria, setCategoria }}>
      {children}
    </ProdutoContext.Provider>
  )
}