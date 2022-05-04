import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{}</AppContext.Provider>;
};

export { AppContext, AppProvider };
