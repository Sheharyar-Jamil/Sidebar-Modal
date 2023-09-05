import React, {useContext} from "react";
import {FaBars} from 'react-icons/fa';
import { AppContext } from "./Context";

const Home = () => {

    const {toggleModalHandler, toggleSidebarHandler} = useContext(AppContext);
    return(
        <main>
            <button className="sidebar-toggle" onClick={toggleSidebarHandler}>
                <FaBars />
            </button>
            <button className="btn" onClick={toggleModalHandler}>show toggle</button>
        </main>
    );
};

export default Home;