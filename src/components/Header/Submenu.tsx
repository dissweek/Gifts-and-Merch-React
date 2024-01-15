import React from "react";
import { useState } from "react";
import { setCategory } from "../../redux/slices/catalogSlice";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import i18 from '../../utilites/i18next.js'
import { MenuType } from "./menuList";


export const Submenu: React.FC<MenuType> = (props) =>{
  const {link,name_ru,name_en,submenu} = {...props}
  const [extraSubMenu,setExtraSubMenu]=useState(false)
  const dispatch = useDispatch()

  return (
    <li className="header__item_menu-item" onMouseOver={(()=>{setExtraSubMenu(true)})} onMouseOut={(()=>{setExtraSubMenu(false)})}>
      <div className="header__item_menu-cnt">
        <Link to={'/' + link} className={`header__item_menu-list ${extraSubMenu? 'active' : ''}`}>
        {i18.language === 'ru' ? name_ru : name_en}
        </Link>
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
                  <Link to={i.link} key={index} onClick={()=>dispatch(setCategory(i.category!))}  className="header__item_menu-item">
                    <li className="header__item_menu-list ">
                    {i18.language === 'ru' ? i.name_ru : i.name_en}
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

