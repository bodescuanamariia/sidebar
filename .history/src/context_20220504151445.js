import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpne] = useState(false);
  const openSidebar = () => {
    setIsSideBarOpen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };
  const openModal = () => {
    setIsModalOpne(true);
  };
  const closeModal = () => {
    setIsModalOpne(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
