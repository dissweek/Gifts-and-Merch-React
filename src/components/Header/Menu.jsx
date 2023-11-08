import React, { useState } from "react";
import Submenu from "./Submenu";
import { Link } from "react-router-dom";
import i18 from '../../utilites/i18next'

function Menu (props){
    const [extraMenu,setExtraMenu]=useState(false)
    return(
        <li className={`header__item ${extraMenu? 'active' : ''}`} onMouseOver={(()=>{setExtraMenu(true)})} onMouseOut={(()=>{setExtraMenu(false)})}><Link to={props.link} className={`header__item-span ${extraMenu? 'active' : ''}`}>{i18.language === 'ru' ? props.name_ru : props.name_en}</Link>
        {props.submenu &&
            <div className={`header__item_menu ${extraMenu? 'active' : ''}`}>
                <ul>
                    {props.submenu.map((obj,index)=>{
                        return(
                            <Submenu key={index} {...obj}/>
                        )
                    })}
                </ul>
            </div>
        }
        </li>
    )
}

export default Menu