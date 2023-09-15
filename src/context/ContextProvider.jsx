import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const useMyContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  //curriculm link
  const curriculm =
    "https://drive.google.com/file/d/1ruvxXKbkhQYpnLYiv6o7oc2qlR07hCWI/view?usp=drive_link";
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
