import React, { useState } from "react";
import "../Styles/Sidebaritem.css";
import { Link } from "react-router-dom";

const Sidebaritem = ({ item ,fun }) => {
  const [open, setOpen] = useState(false);

    
  if (item.subNav){
    return (
        <div className={open ? "sidebar_item open" : "sidebar_item"}>
          <div className="sidebar_title" onClick={() => setOpen(!open)} >
            {item.title}
            <i
              className="bi-chevron-down toggle_btn"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
          <div  className="sidebar_content">
          { item.subNav.map((child, index) => 
          <div onClick={fun}>
          <Sidebaritem key={index} item={child} />
          </div>)
           }
          </div>
        </div>
      );
  }
  else{
    return (
        <Link  to = {item.path} className={open ? "sidebar_item open" : "sidebar_item"}>
          <div onClick={fun} className="sidebar_title">
            {item.title}
          </div>
        </Link>
      );
  }
};

export default Sidebaritem;
