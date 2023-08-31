import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const useMyContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  // for pre loading page
  const [loadingPage, setLoadingPage] = useState(true);
  // used for every page switch
  const updateState = () => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 2000);
  };

  return (
    <Context.Provider value={{ loadingPage, updateState }}>
      {children}
    </Context.Provider>
  );
};
