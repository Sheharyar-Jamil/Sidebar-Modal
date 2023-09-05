import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = (props) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const toggleSidebarHandler = () => {
    {
      toggleSidebar ? setToggleSidebar(false) : setToggleSidebar(true);
    }
  };

  const toggleModalHandler = () => {
    {
      toggleModal ? setToggleModal(false) : setToggleModal(true);
    }
  };
  return (
    <AppContext.Provider
      value={{
        toggleSidebar,
        toggleModal,
        toggleSidebarHandler,
        toggleModalHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
