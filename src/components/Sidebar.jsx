import React, { useState, useContext } from "react";
import logo from "../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { links, social } from "../data";
import Links from "./Links";
import Social from "./Social";
import { AppContext } from "./Context";

const Sidebar = () => {

    const {toggleSidebar, toggleSidebarHandler} = useContext(AppContext);
  const [data, setData] = useState(links);
  const [details, setDetails] = useState(social);
  return (
    <aside className={`${toggleSidebar ? (
        'sidebar show-sidebar'
    ): (
        'sidebar'
    )}`}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={toggleSidebarHandler}>
          <FaTimes />
        </button>
        </div>
        <ul className="links">
          {data.map((link) => {
            return (
              <Links
                key={link.id}
                url={link.url}
                text={link.text}
                icon={link.icon}
              />
            );
          })}
        </ul>

        <ul className="social-icons">
            {details.map((detail) => {
                return(
                    <Social key={detail.id} url={detail.url} icon={detail.icon}/>
                )
            })}
        </ul>
    </aside>
  );
};

export default Sidebar;
