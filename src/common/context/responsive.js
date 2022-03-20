import { createContext, useState } from 'react';

export const ResponsiveContext = createContext();
ResponsiveContext.displayName = "Display";

export const ResponsiveProvider = ({ children }) => {
  const [tela, setTela] = useState(false);

  return (
    <ResponsiveContext.Provider value={{ tela, setTela }}>
      {children}
    </ResponsiveContext.Provider>
  )
}