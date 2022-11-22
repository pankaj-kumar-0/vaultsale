import React, { useState } from "react";
import "../Styles/Sidebar.css";
import items from "./SidebarData";
import Sidebaritem from "./Sidebaritem";

const Sidebar = () => {
  const [toggle, settoggle] = useState(false);
  const toggle_sidebar = () => {
    settoggle(!toggle);
  };

  return (
    <>
      <i id="toggle_btn" className="bi bi-list" onClick={toggle_sidebar}></i>
      
      <div className={toggle ? "side_bar active" : "side_bar"}>
        {items.map((data, index) => (
          <Sidebaritem  key={index} item={data} fun={toggle_sidebar} />
        ))}
      </div>
    </>
  );
};

export default Sidebar;

