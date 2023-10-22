import React from "react";
import { useState } from "react";


function Submenu(props) {
    const {link,name,submenu} = {...props}
    const [extraSubMenu,setExtraSubMenu]=useState(false)

  return (
    <li className="header__item_menu-item" onMouseOver={(()=>{setExtraSubMenu(true)})} onMouseOut={(()=>{setExtraSubMenu(false)})}>
      <div className="header__item_menu-cnt">
        <a href={link} className={`header__item_menu-list ${extraSubMenu? 'active' : ''}`}>
          {name}
        </a>
        {submenu && (
          <div
            className={`header__item_menu-sub header__item_menu ${
              extraSubMenu ? "active" : ""
            }`}
          >
            <div className="header__item_menu-alfa"></div>
            <ul className="header__item_menu-ul">
              {submenu.map((i, index) => {
                return (
                  <li key={index} className="header__item_menu-item">
                    <a href={i.link} className="header__item_menu-list ">
                      {i.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}

export default Submenu;
