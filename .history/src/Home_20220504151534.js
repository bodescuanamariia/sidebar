import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={open}>
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
};

export default Home;
