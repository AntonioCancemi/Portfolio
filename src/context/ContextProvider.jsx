import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const useMyContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  //curriculm link
  const curriculm =
    "https://drive.google.com/file/d/1U7XMpJu59EQvGyCjlSrsNYW-gwGBqAsB/view?usp=sharing";
  // for pre loading page
  const [loadingPage, setLoadingPage] = useState(true);
  // used for every page switch
  const updateState = (time) => {
    var delay = time ? time : 1500;
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, delay);
  };

  return (
    <Context.Provider value={{ curriculm, loadingPage, updateState }}>
      {children}
    </Context.Provider>
  );
};
