import React from "react";
import { useState } from "react";
import { setCategory } from "../../redux/slices/catalogSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Submenu(props) {
    const {link,name,submenu} = {...props}
    const [extraSubMenu,setExtraSubMenu]=useState(false)
    const dispatch = useDispatch()
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
                  <Link to={i.link} key={index} onClick={()=>dispatch(setCategory(i.category),setExtraSubMenu(false))} className="header__item_menu-item">
                    <li className="header__item_menu-list ">
                      {i.name}
                    </li>
                  </Link>
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
