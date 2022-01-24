import React, { createContext, useState } from "react";
export const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
  const [ytLink, setYtLink] = useState("");

  const data = {
    ytLink,
    setYtLink,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
